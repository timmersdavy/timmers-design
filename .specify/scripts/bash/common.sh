#!/usr/bin/env bash
# Shared helpers for speckit scripts.
set -euo pipefail

repo_root() {
    git rev-parse --show-toplevel 2>/dev/null || pwd
}

current_branch() {
    git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "main"
}

# Find the feature directory that matches the current branch (specs/NNN-slug).
# Falls back to the most recently modified specs/* dir if the branch name
# doesn't match (e.g. detached HEAD, or working outside a feature branch).
feature_dir_for_branch() {
    local root branch dir
    root="$(repo_root)"
    branch="$(current_branch)"
    dir="$root/specs/$branch"
    if [[ -d "$dir" ]]; then
        echo "$dir"
        return 0
    fi
    # fallback: latest specs/ subdir
    dir="$(ls -dt "$root"/specs/*/ 2>/dev/null | head -n1 || true)"
    if [[ -n "$dir" ]]; then
        echo "${dir%/}"
        return 0
    fi
    return 1
}

next_feature_number() {
    local root last_num num
    root="$(repo_root)"
    last_num=0
    if [[ -d "$root/specs" ]]; then
        for d in "$root"/specs/*/; do
            [[ -d "$d" ]] || continue
            base="$(basename "$d")"
            num="${base%%-*}"
            if [[ "$num" =~ ^[0-9]+$ ]]; then
                num=$((10#$num))
                if (( num > last_num )); then
                    last_num=$num
                fi
            fi
        done
    fi
    printf "%03d" $((last_num + 1))
}

slugify() {
    echo "$1" | tr '[:upper:]' '[:lower:]' | tr -cs 'a-z0-9' '-' | sed 's/^-*//; s/-*$//' | cut -c1-50
}
