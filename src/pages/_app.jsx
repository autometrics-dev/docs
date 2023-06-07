import Script from "next/script";
import { useEffect } from "react";
import * as snippet from "@segment/snippet";

export default function Nextra({ Component, pageProps }) {
  const loadSegment = () => {
    console.log("loading segment");
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
    if (window && window.analytics) {
      window.analytics.page("Testing 123");
      // console.log("analytics loaded");
    } else {
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
