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

if [[ ! "${BUMP}" =~ ^(patch|minor|major)$ ]]; then
  echo "Usage: ./release.sh {patch|minor|major}"
  exit 1
fi

# ==============================
# PRE-CHECKS
# ==============================
CURRENT_BRANCH=$(git branch --show-current)

if [[ "${CURRENT_BRANCH}" != "${DEFAULT_BRANCH}" ]]; then
  echo "❌ Devi essere su '${DEFAULT_BRANCH}'"
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

# ==============================
# CHANGELOG
# ==============================
echo "📝 Aggiornamento CHANGELOG.md..."
conventional-changelog -p "${CHANGELOG_PRESET}" -i "${CHANGELOG_FILE}" -s --from "${LAST_TAG}"

# ==============================
# EXTRACT RELEASE NOTES
# ==============================
RELEASE_NOTES_FILE=$(mktemp)

# Estrae solo la sezione della versione corrente dal CHANGELOG
sed -n "/^#\\{1,2\\} \\[${NEW_VERSION}\\]/,/^#\\{1,2\\} \\[/p" "${CHANGELOG_FILE}" | sed '$d' > "${RELEASE_NOTES_FILE}"

# ==============================
# OVERWRITE package.json in dist
# ==============================
cp package.json dist

# ==============================
# GIT COMMIT
# ==============================
git add package.json dist "${CHANGELOG_FILE}"
git commit -m "chore(release): ${NEW_VERSION}"

# ==============================
# GIT TAG (NO 'v')
# ==============================
git tag "${NEW_VERSION}"

# ==============================
# GIT PUSH
# ==============================
git push origin "${DEFAULT_BRANCH}"
git push origin "${NEW_VERSION}"

# ==============================
# GITHUB RELEASE
# ==============================
echo "🚀 Creazione GitHub Release..."
gh release create "${NEW_VERSION}"  --title "Release ${NEW_VERSION}"  --notes-file "${RELEASE_NOTES_FILE}"

# ==============================
# CLEANUP
# ==============================
rm -f "${RELEASE_NOTES_FILE}"

# ==============================
# NPM PUBLISH
# ==============================
echo "📦 npm publish..."
npm publish --ignore-scripts

echo "✅ Release ${NEW_VERSION} completata"
