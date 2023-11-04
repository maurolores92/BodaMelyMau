import React from 'react';
import '../src/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

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

    Modal.setAppElement('#__next');

    return () => {
      document.head.removeChild(slickCSS);
      document.head.removeChild(slickJS);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Melisa & Mauricio</title>
        <meta name="description" content="Invitacion Boda Melisa y Mauricio" />
        <meta name="keywords" content="Invitacion Boda Melisa y Mauricio" />
        <meta property="og:title" content="Invitacion Boda Melisa y Mauricio" />
        <meta property="og:image" content="../public/images/imagenPrincipal.svg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <link rel="apple-touch-icon" sizes="180x180" href="../public/images/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="../public/images/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="../public/images/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="../public/images/favicon/site.webmanifest"/>
        
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
