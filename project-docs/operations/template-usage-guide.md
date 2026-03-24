# Template Usage Guide

This is the quickest reference for using the three publishing templates in this project.

## Which Template To Use

Use [recommendation-template.md](C:/Users/liang/Documents/Projects/display_guide/project-docs/templates/recommendation-template.md) when you are publishing:

- Best monitor roundups
- Buying guides by use case
- Buying guides by budget
- Buying guides by spec

Use [review-template.md](C:/Users/liang/Documents/Projects/display_guide/project-docs/templates/review-template.md) when you are publishing:

- A review of one specific monitor model
- A verdict-driven article about whether a product is worth buying

Use [comparison-template.md](C:/Users/liang/Documents/Projects/display_guide/project-docs/templates/comparison-template.md) when you are publishing:

- IPS vs VA vs OLED
- 1080p vs 1440p vs 4K
- 27 inch vs 32 inch
- 144Hz vs 240Hz

## Recommendation Template

### Where It Goes

- `recommendations/by-use-case/`
- `recommendations/by-budget/`
- `recommendations/by-type/`

### How To Use It

1. Open the existing `.mdx` route file in `recommendations/`
2. Keep the current frontmatter and slug
3. Replace the placeholder intro
4. Keep the `AffiliateDisclosure` block
5. Add the quick summary table
6. Replace the placeholder card section with real recommendations
7. Add `How to Choose`
8. Add FAQ

### Required Links

- Link back to relevant `docs/` pages
- Link to related recommendation pages when useful

## Review Template

### Where It Goes

- `blog/`

### How To Use It

1. Create a new dated blog post file
2. Add frontmatter and tag it as `reviews`
3. Fill in the review structure:
   - Verdict
   - Who This Is For
   - Specs Table
   - Performance Breakdown
   - Buying Advice
4. Link to the closest recommendation roundup
5. Link to at least one guide page in `docs/`

### Good Use Cases

- `LG 27GP850-B Review`
- `Dell U2723D Review`
- `Samsung Odyssey G7 Review`

## Comparison Template

### Where It Goes

- `blog/`

### How To Use It

1. Create a new dated blog post file
2. Add frontmatter and tag it as `comparisons`
3. Fill in the structure:
   - Quick Answer
   - Best For
   - Side-by-Side Comparison
   - Final Recommendation
4. Link to related guide pages in `docs/`
5. Link to relevant recommendation pages in `recommendations/`

### Good Use Cases

- `IPS vs VA vs OLED`
- `27 inch vs 32 inch`
- `60Hz vs 144Hz`

## Before You Publish

- Placeholder text is removed
- Slug is correct
- Internal links point to live pages
- Affiliate disclosure is present when needed
- `npm run typecheck` passes
- `npm run build` passes

## Related Docs

- [operations-playbook.md](C:/Users/liang/Documents/Projects/display_guide/project-docs/operations/operations-playbook.md)
- [content-style-guide.md](C:/Users/liang/Documents/Projects/display_guide/project-docs/operations/content-style-guide.md)
- [internal-linking-plan.md](C:/Users/liang/Documents/Projects/display_guide/project-docs/architecture/internal-linking-plan.md)
