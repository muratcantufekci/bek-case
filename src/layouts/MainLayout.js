import React  from 'react';

import Head from 'next/head';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Modal from '@/components/Modal';

import '@/assets/styles/globals.scss';

function MainLayout({ children, ...props }) {

  return (
    <html lang="tr-TR">
      <Head>
        <title>BEK Case</title>
      </Head>

      <body>
        <Header {...props} />
        {children}
        <Footer />
        <Modal />
      </body>
    </html>
  );
}

export default MainLayout;
