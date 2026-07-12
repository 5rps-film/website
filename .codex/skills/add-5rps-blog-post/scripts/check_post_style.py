#!/usr/bin/env python3
"""Scan a 5RPS MDX draft for mechanical house-style violations."""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path


HARD_BANS = (
    "it is important to note that",
    "but here's the catch",
    "but here’s the catch",
    "this underscores the importance of",
    "it cannot be denied that",
    "as of my knowledge cutoff",
    "in today's fast-paced world",
    "in today’s fast-paced world",
    "in this ever-evolving landscape",
    "in the digital age",
    "in conclusion",
    "to summarize",
    "let's delve into",
    "let’s delve into",
    "delve deeper",
    "at its core",
    "at the core",
    "game-changer",
    "uncharted waters",
    "embark on a journey",
    "treasure trove of information",
)

RESTRICTED = (
    "leverage",
    "optimize",
    "enhance",
    "utilize",
    "synergy",
    "deliverables",
    "holistic",
    "capability",
    "pivotal",
    "crucial",
    "groundbreaking",
    "cutting-edge",
    "explore",
    "delve",
    "ensure",
    "foster",
    "embark",
    "significant",
    "relevant",
    "dynamic",
    "innovative",
    "comprehensive",
    "robust",
    "streamlined",
)


def line_number(text: str, offset: int) -> int:
    return text.count("\n", 0, offset) + 1


def scan(path: Path) -> list[str]:
    text = path.read_text(encoding="utf-8")
    lower = text.lower()
    errors: list[str] = []

    for match in re.finditer("—", text):
        errors.append(f"line {line_number(text, match.start())}: em dash")

    for phrase in HARD_BANS:
        start = lower.find(phrase)
        if start >= 0:
            errors.append(
                f"line {line_number(text, start)}: hard-banned phrase: {phrase!r}"
            )

    restricted_count = 0
    restricted_hits: list[str] = []
    for word in RESTRICTED:
        matches = list(re.finditer(rf"\b{re.escape(word)}(?:s|d|ing)?\b", lower))
        if matches:
            restricted_count += len(matches)
            restricted_hits.append(f"{word}={len(matches)}")
    if restricted_count > 2:
        errors.append(
            "restricted-word total exceeds 2: " + ", ".join(restricted_hits)
        )

    for transition in ("moreover", "furthermore", "additionally"):
        count = len(re.findall(rf"\b{transition}\b", lower))
        if count > 1:
            errors.append(f"transition repeated: {transition}={count}")

    if "<LocalizedContent locale=\"en\">" not in text:
        errors.append('missing <LocalizedContent locale="en"> block')
    if "<LocalizedContent locale=\"ja\">" not in text:
        errors.append('missing <LocalizedContent locale="ja"> block')

    return errors


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("post", type=Path)
    args = parser.parse_args()

    if not args.post.is_file():
        print(f"error: not a file: {args.post}", file=sys.stderr)
        return 2

    errors = scan(args.post)
    if errors:
        print(f"{args.post}: style check failed")
        for error in errors:
            print(f"- {error}")
        return 1

    print(f"{args.post}: style check passed")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
