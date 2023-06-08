# Autometrics Docs

## Note on Page View Analytics

We use Segment for keeping track of page views. From there we forward to Google Tag Manager, which forwards to Google Analytics.

Next (and by extension, Nextra) is a little particular when it comes to analytics. See the `src/pages/_app.jsx` file for how we went about implementing (e.g.) page view analytics.

To test analytics locally, create `.env.local` and add a `NEXT_PUBLIC_SEGMENT_WRITE_KEY` variable (you can find this in Segment).
