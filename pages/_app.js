import Script from 'next/script';
import { useEffect } from "react";
import { useRouter } from 'next/router';

import Navbar from '../components/Navbar';
import * as gtag from "../lib/gtag"
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
  };

  router.events.on("routeChangeComplete", handleRouteChange);
  
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return <>
    <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}/>
    <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${process.env.GA_MEASUREMENT_ID}, {
          page_path: window.location.pathname,
        });
      `,
      }}
    />
    
    <Navbar />
    <Component {...pageProps} />
  </>
}

export default MyApp
