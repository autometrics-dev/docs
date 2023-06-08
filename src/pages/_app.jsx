import Script from "next/script";
import { useEffect } from "react";
import * as snippet from "@segment/snippet";

export default function Nextra({ Component, pageProps }) {
  const loadSegment = () => {
    const options = {
      apiKey: process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY,
    };
    if (process.env.NEXT_PUBLIC_NODE_ENV) {
      return snippet.max(options);
    } else {
      return snippet.min(options);
    }
  };

  useEffect(() => {
    if (window && window.analytics)
      // NOTE - This will track virtual page views when transitioning client side,
      //        but we lack descriptive page names.
      //        To add page names, we can either set a `pageName` prop on the Components themselves,
      //        or make use of getStaticProps in all of the pages to set the page name on page Props, then pass it to the function here
      //        See the following:
      //          - https://javascript.plainenglish.io/add-segment-google-analytics-to-your-typescript-next-js-app-af9fc7cd83a9
      //          - https://morganfeeney.com/guides/how-to-integrate-google-tag-manager-with-nextjs
      window.analytics.page(null);
    else {
      // console.log("analytics not loaded");
    }
  }, []);

  return (
    <>
      <Script
        id="segmentScript"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: loadSegment() }}
      />

      <Component {...pageProps} />
    </>
  );
}
