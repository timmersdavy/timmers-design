#!/usr/bin/env bash
# Check which speckit artifacts exist for the current feature.
# Usage: check-prerequisites.sh [--json] [--require-tasks]
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/common.sh"

JSON_MODE=false
REQUIRE_TASKS=false
for arg in "$@"; do
    case "$arg" in
        --json) JSON_MODE=true ;;
        --require-tasks) REQUIRE_TASKS=true ;;
    esac
done

FEATURE_DIR="$(feature_dir_for_branch)" || {
    echo "No feature directory found. Run /speckit.specify first." >&2
    exit 1
}

SPEC_FILE="$FEATURE_DIR/spec.md"
PLAN_FILE="$FEATURE_DIR/plan.md"
TASKS_FILE="$FEATURE_DIR/tasks.md"

MISSING=()
[[ -f "$SPEC_FILE" ]] || MISSING+=("spec.md")
[[ -f "$PLAN_FILE" ]] || MISSING+=("plan.md")
if $REQUIRE_TASKS; then
    [[ -f "$TASKS_FILE" ]] || MISSING+=("tasks.md")
fi

if [[ ${#MISSING[@]} -gt 0 ]]; then
    echo "Missing required artifacts in $FEATURE_DIR: ${MISSING[*]}" >&2
    exit 1
fi

if $JSON_MODE; then
    printf '{"FEATURE_DIR":"%s","SPEC_FILE":"%s","PLAN_FILE":"%s","TASKS_FILE":"%s"}\n' \
        "$FEATURE_DIR" "$SPEC_FILE" "$PLAN_FILE" "$TASKS_FILE"
else
    echo "Feature dir: $FEATURE_DIR"
    echo "OK: all required artifacts present."
fi
