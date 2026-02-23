

# Make Resources Nav Non-Clickable

## Overview
Change the Resources navigation item from a clickable link to a non-clickable text element on both desktop and mobile, preventing navigation to a non-existent `/resources` page.

## Changes

### File: `src/components/transformation/Navigation.tsx`

1. **Desktop nav**: Replace `<a href="/resources" className="nav-link">Resources</a>` with a `<span>` styled the same way but without a link.

2. **Mobile nav**: Replace `<a href="/resources" ...>Resources</a>` with a non-clickable `<span>` or `<div>` element, keeping the same styling.

