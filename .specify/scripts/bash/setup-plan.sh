#!/usr/bin/env bash
# Prepare plan.md for the current feature from the plan template.
# Usage: setup-plan.sh [--json]
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/common.sh"

JSON_MODE=false
[[ "${1:-}" == "--json" ]] && JSON_MODE=true

ROOT="$(repo_root)"
FEATURE_DIR="$(feature_dir_for_branch)" || {
    echo "No feature directory found. Run /speckit.specify first." >&2
    exit 1
}

SPEC_FILE="$FEATURE_DIR/spec.md"
PLAN_FILE="$FEATURE_DIR/plan.md"

if [[ ! -f "$SPEC_FILE" ]]; then
    echo "Missing $SPEC_FILE. Run /speckit.specify first." >&2
    exit 1
fi

if [[ ! -f "$PLAN_FILE" ]]; then
    if [[ -f "$ROOT/.specify/templates/plan-template.md" ]]; then
        cp "$ROOT/.specify/templates/plan-template.md" "$PLAN_FILE"
    else
        printf '# Implementation Plan\n' > "$PLAN_FILE"
    fi
fi

CONSTITUTION="$ROOT/.specify/memory/constitution.md"

if $JSON_MODE; then
    printf '{"FEATURE_DIR":"%s","SPEC_FILE":"%s","PLAN_FILE":"%s","CONSTITUTION_FILE":"%s"}\n' \
        "$FEATURE_DIR" "$SPEC_FILE" "$PLAN_FILE" "$CONSTITUTION"
else
    echo "Feature dir: $FEATURE_DIR"
    echo "Spec:        $SPEC_FILE"
    echo "Plan:        $PLAN_FILE"
fi
