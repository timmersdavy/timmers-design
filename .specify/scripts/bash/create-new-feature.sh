#!/usr/bin/env bash
# Create a new feature: branch + specs/NNN-slug/spec.md from template.
# Usage: create-new-feature.sh "short description of the feature"
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/common.sh"

JSON_MODE=false
if [[ "${1:-}" == "--json" ]]; then
    JSON_MODE=true
    shift
fi

DESCRIPTION="${*:-}"
if [[ -z "$DESCRIPTION" ]]; then
    echo "Usage: $0 [--json] <feature description>" >&2
    exit 1
fi

ROOT="$(repo_root)"
NUM="$(next_feature_number)"
SLUG="$(slugify "$DESCRIPTION")"
[[ -z "$SLUG" ]] && SLUG="feature"
BRANCH_NAME="${NUM}-${SLUG}"
FEATURE_DIR="$ROOT/specs/$BRANCH_NAME"

mkdir -p "$FEATURE_DIR"

CURRENT_BRANCH="$(current_branch)"
if git show-ref --verify --quiet "refs/heads/$BRANCH_NAME"; then
    git checkout "$BRANCH_NAME" >/dev/null 2>&1
elif [[ "$CURRENT_BRANCH" != "$BRANCH_NAME" ]]; then
    git checkout -b "$BRANCH_NAME" >/dev/null 2>&1 || true
fi

SPEC_FILE="$FEATURE_DIR/spec.md"
if [[ ! -f "$SPEC_FILE" ]]; then
    if [[ -f "$ROOT/.specify/templates/spec-template.md" ]]; then
        cp "$ROOT/.specify/templates/spec-template.md" "$SPEC_FILE"
    else
        printf '# Feature Spec: %s\n' "$DESCRIPTION" > "$SPEC_FILE"
    fi
fi

if $JSON_MODE; then
    printf '{"BRANCH_NAME":"%s","SPEC_FILE":"%s","FEATURE_NUM":"%s","FEATURE_DIR":"%s"}\n' \
        "$BRANCH_NAME" "$SPEC_FILE" "$NUM" "$FEATURE_DIR"
else
    echo "Branch: $BRANCH_NAME"
    echo "Spec:   $SPEC_FILE"
fi
