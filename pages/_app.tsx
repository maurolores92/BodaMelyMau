import React from 'react';
import '../src/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    const slickCSS = document.createElement('link');
    slickCSS.href = '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css';
    slickCSS.rel = 'stylesheet';

    const slickJS = document.createElement('script');
    slickJS.src = '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
    slickJS.type = 'text/javascript';

    document.head.appendChild(slickCSS);
    document.head.appendChild(slickJS);

    return () => {
      document.head.removeChild(slickCSS);
      document.head.removeChild(slickJS);
    };
  }, []);

  return  <>
  <Head>
    <title>Tu Título Aquí</title>
    <meta name="description" content="Descripción de tu página" />
    {/* Agrega otros metadatos, enlaces a hojas de estilo, etc. */}
  </Head>
  <Component {...pageProps} />
</>;
}

export default MyApp;