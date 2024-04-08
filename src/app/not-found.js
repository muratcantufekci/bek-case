'use client';

import Head from 'next/head';

import '@/assets/styles/globals.scss';

import NotFoundPage from '@/pages/NotFound';

export default function Error() {
  return (
    <html>
      <Head>
        <title>BEK Case</title>
      </Head>

      <body>
        <NotFoundPage />
      </body>
    </html>
  );
}
