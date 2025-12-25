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
# VERSION BUMP
# ==============================
OLD_VERSION=$(node -p "require('./package.json').version")
NEW_VERSION=$(npm version "${BUMP}" --no-git-tag-version)

echo "🔖 Versione: ${OLD_VERSION} → ${NEW_VERSION}"

# ==============================
# CHANGELOG
# ==============================
echo "📝 Aggiornamento CHANGELOG.md..."
conventional-changelog \
  -p "${CHANGELOG_PRESET}" \
  -i "${CHANGELOG_FILE}" \
  -s

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
gh release create "${NEW_VERSION}" \
  --title "${NEW_VERSION}" \
  --notes-file "${CHANGELOG_FILE}"

# ==============================
# NPM PUBLISH
# ==============================
echo "📦 npm publish..."
npm publish --ignore-scripts

echo "✅ Release ${NEW_VERSION} completata"
