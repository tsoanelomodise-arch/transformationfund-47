

# Google Analytics Integration

## Overview
Add Google Analytics 4 (GA4) tracking to your Transformation Fund website using Measurement ID `G-X5E2DK9T7Z`. Since this is a publishable key, it can be safely stored in the codebase.

## Implementation Steps

### 1. Add GA4 script to `index.html`
Insert the standard Google Analytics gtag.js snippet in the `<head>` section:
- Async script loading from `googletagmanager.com`
- gtag configuration with the Measurement ID

### 2. Add route change tracking in `src/App.tsx`
Since this is a Single Page Application (SPA), page views aren't automatically tracked on route changes. A small `useEffect` hook will be added inside the `BrowserRouter` to send a `page_view` event whenever the route changes, using `react-router-dom`'s `useLocation`.

## Technical Details

- **index.html**: Add the gtag.js `<script>` tags before the closing `</head>` tag
- **src/App.tsx**: Create an `AnalyticsTracker` component that uses `useLocation` to fire `gtag('event', 'page_view', ...)` on route changes, placed inside `BrowserRouter`
- No new dependencies required -- gtag.js loads from Google's CDN

