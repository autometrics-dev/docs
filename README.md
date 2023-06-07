# Autometrics Docs

## Note on Page Metrics

We use Segment for keeping track of page views. From there we forward to Google Tag Manager, which forwards to Google Analytics.

Next is a little particular when it comes to analytics. See the following files for how we went about implementing (e.g.) page view analytics:

- `src/pages/_app.js` - Load the segment snippet
-

To test analytics locally, create `.env` and add a `NEXT_PUBLIC_SEGMENT_WRITE_KEY` variable
