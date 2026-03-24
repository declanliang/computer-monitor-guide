# Operations Playbook

This document is the publishing and editorial companion to the site's infrastructure.

It does not describe how to build the site. It describes what content to publish, in what order, and how to publish it using the existing routes and templates.

## Objectives

- Grow evergreen traffic through recommendation roundups
- Support those roundups with guide-to-buying internal links
- Publish time-sensitive reviews and comparisons in the blog
- Keep URL structure stable while content quality improves over time

## Content System

The site now has three content tracks:

- `docs/`: evergreen educational content
- `recommendations/`: evergreen buying roundups
- `blog/`: reviews, comparisons, and buying updates

## Publishing Order

### Phase 1: First Recommendation Roundups

Publish these first because they have the highest practical value and strongest internal-link support:

1. `recommendations/by-use-case/best-monitor-office-study.mdx`
2. `recommendations/by-use-case/best-monitor-programming.mdx`
3. `recommendations/by-use-case/best-monitor-graphic-design.mdx`
4. `recommendations/by-use-case/best-monitor-video-editing.mdx`
5. `recommendations/by-use-case/best-monitor-competitive-gaming.mdx`

### Phase 2: High-Intent Budget Pages

1. `recommendations/by-budget/best-monitors-under-150.mdx`
2. `recommendations/by-budget/best-monitors-under-300.mdx`
3. `recommendations/by-budget/best-monitors-under-500.mdx`
4. `recommendations/by-budget/best-monitors-under-1000.mdx`
5. `recommendations/by-budget/best-budget-4k-monitor.mdx`

### Phase 3: Spec Pages That Support Internal Linking

1. `recommendations/by-type/best-ips-monitors.mdx`
2. `recommendations/by-type/best-oled-monitors.mdx`
3. `recommendations/by-type/best-144hz-monitors.mdx`
4. `recommendations/by-type/best-4k-monitors.mdx`
5. `recommendations/by-type/best-1440p-monitors.mdx`
6. `recommendations/by-type/best-27-inch-monitors.mdx`

### Phase 4: Blog Publishing

Start publishing these once the first recommendation pages are live:

- Product reviews
- Comparison articles
- Buying updates

Recommended first comparison topics:

1. `ips-vs-va-vs-oled`
2. `1080p-vs-1440p-vs-4k`
3. `27-vs-32-inch-monitor`
4. `144hz-vs-240hz`
5. `60hz-vs-144hz`

## How To Publish Recommendation Pages

Each recommendation route already exists as an `.mdx` skeleton.

### Workflow

1. Open the target file in `recommendations/`
2. Keep the existing frontmatter and slug
3. Replace placeholder copy section by section
4. Keep the `AffiliateDisclosure` component near the top
5. Replace the placeholder `RecommendationCard` with real product entries or a table plus cards
6. Add links back to relevant guide pages in `docs/`
7. Run:

```bash
npm run typecheck
npm run build
```

### Required Recommendation Structure

Use this order:

1. Framing intro
2. Affiliate disclosure
3. Quick summary table
4. Product recommendations
5. How to choose
6. FAQ

### Related Files

- [recommendation-template.md](C:/Users/liang/Documents/Projects/display_guide/project-docs/templates/recommendation-template.md)
- [content-style-guide.md](C:/Users/liang/Documents/Projects/display_guide/project-docs/operations/content-style-guide.md)
- [internal-linking-plan.md](C:/Users/liang/Documents/Projects/display_guide/project-docs/architecture/internal-linking-plan.md)

## How To Publish Comparison Articles

Comparison articles belong in `blog/`.

### Workflow

1. Create a new dated blog file
2. Use the comparison structure from the shared template
3. Tag it with `comparisons`
4. Link to at least one guide page and one recommendation page
5. Run validation commands before publishing

### Related File

- [comparison-template.md](C:/Users/liang/Documents/Projects/display_guide/project-docs/templates/comparison-template.md)

## How To Publish Product Reviews

Product reviews also belong in `blog/`.

### Workflow

1. Create a new dated blog file
2. Tag it with `reviews`
3. Use a model-specific title and slug
4. Include verdict, specs, strengths, weaknesses, alternatives, and buying advice
5. Link to the closest recommendation roundup

### Related File

- [review-template.md](C:/Users/liang/Documents/Projects/display_guide/project-docs/templates/review-template.md)

## Editorial Rules

- Do not change slugs after publication unless absolutely necessary
- Keep recommendation pages evergreen and update product selections in place
- Keep blog content time-sensitive and model-specific
- Prefer adding internal links rather than duplicating explanations
- Keep affiliate disclosure wording consistent across recommendation pages

## Pre-Publish Checklist

- Frontmatter is present and correct
- Slug matches the route strategy
- Internal links point to live pages
- Disclosure is present when affiliate links exist
- Placeholder copy has been removed
- `npm run typecheck` passes
- `npm run build` passes

## Source Planning Reference

The original planning source is:

- [monitor-guide-plan.md](C:/Users/liang/Documents/Projects/display_guide/project-docs/strategy/monitor-guide-plan.md)

That file is still useful as a long-form planning reference. This playbook is the operational version for day-to-day publishing.
