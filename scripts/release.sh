#!/usr/bin/env bash
set -euo pipefail

# ==============================
# CONFIG
# ==============================
DEFAULT_BRANCH="main"
CHANGELOG_FILE="CHANGELOG.md"
CHANGELOG_PRESET="angular"

# ==============================
# INPUT
# ==============================
BUMP="${1:-}"
DRY_RUN=false

if [[ "${2:-}" == "--dry-run" ]]; then
  DRY_RUN=true
fi

if [[ ! "${BUMP}" =~ ^(patch|minor|major)$ ]]; then
  echo "Usage: ./release.sh {patch|minor|major} [--dry-run]"
  exit 1
fi

run() {
  if $DRY_RUN; then
    echo "[dry-run] $*"
  else
    eval "$@"
  fi
}

# ==============================
# PRE-CHECKS
# ==============================
CURRENT_BRANCH=$(git branch --show-current)

if [[ "${CURRENT_BRANCH}" != "${DEFAULT_BRANCH}" ]]; then
  echo "❌ Devi essere su '${DEFAULT_BRANCH}'"
  exit 1
fi

if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "❌ Working tree non pulito. Commit o stasha prima di rilasciare."
  exit 1
fi

# ==============================
# LAST TAG
# ==============================
LAST_TAG=$(git describe --tags --abbrev=0)
echo "🔍 Ultimo tag rilevato: ${LAST_TAG}"

# ==============================
# VERSION BUMP
# ==============================
OLD_VERSION=$(node -p "require('./package.json').version")
NEW_VERSION=$(npm version "${BUMP}" --no-git-tag-version | sed 's/^v//')

echo "🔖 Versione: ${OLD_VERSION} → ${NEW_VERSION}"

if git rev-parse "${NEW_VERSION}" >/dev/null 2>&1; then
  echo "❌ Il tag ${NEW_VERSION} esiste già"
  exit 1
fi

# ==============================
# CHANGELOG
# ==============================
echo "📝 Aggiornamento CHANGELOG.md..."
run "conventional-changelog -p '${CHANGELOG_PRESET}' -i '${CHANGELOG_FILE}' -s --from '${LAST_TAG}'"

# ==============================
# EXTRACT RELEASE NOTES
# ==============================
RELEASE_NOTES_FILE=$(mktemp)

sed -n "/^#\\{1,2\\} \\[${NEW_VERSION}\\]/,/^#\\{1,2\\} \\[/p" "${CHANGELOG_FILE}" | sed '$d' > "${RELEASE_NOTES_FILE}"

if ! grep -q '\*' "${RELEASE_NOTES_FILE}"; then
  echo "❌ Nessuna voce trovata nel CHANGELOG per ${NEW_VERSION}"
  rm -f "${RELEASE_NOTES_FILE}"
  exit 1
fi

# ==============================
# OVERWRITE package.json in dist
# ==============================
run "cp package.json dist"

# ==============================
# GIT COMMIT
# ==============================
run "git add package.json dist '${CHANGELOG_FILE}'"
run "git commit -m 'chore(release): ${NEW_VERSION}'"

# ==============================
# GIT TAG (NO 'v')
# ==============================
run "git tag '${NEW_VERSION}'"

# ==============================
# GIT PUSH
# ==============================
run "git push origin '${DEFAULT_BRANCH}'"
run "git push origin '${NEW_VERSION}'"

# ==============================
# GITHUB RELEASE
# ==============================
echo "🚀 Creazione GitHub Release..."
run "gh release create '${NEW_VERSION}' --title 'Release ${NEW_VERSION}' --notes-file '${RELEASE_NOTES_FILE}'"

# ==============================
# CLEANUP
# ==============================
rm -f "${RELEASE_NOTES_FILE}"

# ==============================
# NPM PUBLISH
# ==============================
echo "📦 npm publish..."
run "npm publish --ignore-scripts"

echo "✅ Release ${NEW_VERSION} completata"
