
# Remove TF Document Links but Keep Resources Nav

## Overview
Remove only the "TF Executive Summary" and "Full TF Document" dropdown items from the Resources navigation, while keeping the Resources dropdown itself intact (it will be empty for now, ready for future items).

## Changes

### File: `src/components/transformation/Navigation.tsx`

1. **Desktop nav (lines 94-97)**: Remove the two `<a>` links inside the dropdown menu but keep the dropdown container, converting the Resources button into a simple nav link instead (since an empty dropdown doesn't make sense). It will become a plain `<a>` link like the other nav items.

2. **Mobile menu (lines 139-141)**: Remove the "Resources" label and the two document links beneath it. Replace with a simple "Resources" nav link.

Since there's no dedicated `/resources` page, the Resources link will point to `/#resources` or simply remain as a non-linking label. Given the current site structure, the cleanest approach is to convert the desktop dropdown into a simple non-dropdown "Resources" nav link (matching the pattern of "About", "Stories", etc.) and do the same in mobile -- removing only the two PDF links while keeping "Resources" as a navigation item.

### Summary of edits
- **Desktop**: Replace the Resources dropdown block (lines ~85-99) with a simple `<a>` nav link
- **Mobile**: Remove the two PDF links (lines ~140-141), keep "Resources" as a link instead of a label
- Remove the `resourcesDropdownOpen` state variable (line 10) since the dropdown is no longer needed
