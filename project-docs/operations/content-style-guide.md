# Content Style Guide

## Scope

This file defines structural rules for monitor guide content. It is not a writing brief for article copy.

## File Naming

- Recommendation files use lowercase kebab-case.
- Review files use `YYYY-MM-DD-model-name-review.md`.
- Comparison files use `topic-a-vs-topic-b.md`.

## Slug Rules

- Recommendation slugs stay under `/by-use-case`, `/by-budget`, or `/by-type`.
- Review slugs should match the filename topic and avoid unnecessary filler words.
- Slugs should stay stable after publication.

## Frontmatter Rules

Required fields for recommendations:

- `title`
- `description`
- `slug`

Recommended future fields:

- `keywords`
- `image`
- `sidebar_position` when manual ordering is needed

## Recommendation Page Structure

Every recommendation page should use this order:

1. Title and framing paragraph
2. Affiliate disclosure
3. Quick summary table
4. Three to five recommendation blocks
5. How to choose
6. FAQ

## Linking Rules

- Every recommendation page links back to at least two guide pages in `/docs`.
- Every guide CTA should point to a stable recommendation route, not a temporary anchor.
- Blog posts should point to both guide content and recommendation content whenever possible.

## Affiliate Rules

- Use a consistent disclosure message.
- Keep affiliate links in a predictable CTA section.
- Do not mix affiliate links into explanatory paragraphs when a dedicated CTA block exists.
