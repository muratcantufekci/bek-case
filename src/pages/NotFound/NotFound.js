import React from 'react';
import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import Button from '@/components/Button';

import css from './NotFound.module.scss'

const NotFound = () => {
  const router = useRouter();

  const [countdown, setCountdown] = useState(5);
  useEffect(() => {
    const redirectTimer = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    const redirectTimeout = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => {
      clearInterval(redirectTimer);
      clearTimeout(redirectTimeout);
    };
  }, []);

  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Üzgünüz, Aradığınız sayfayı ne yazık ki bulamıyoruz.
      </h1>
      <p className={css.description}>
        {countdown} saniye içinde Anasayfaya yönlendirileceksiniz.
      </p>

      <div className="mt-10">
        <Button onClick={() => router.push('/')}>Anasayfaya Dön</Button>
      </div>
    </div>
  );
};

export default NotFound;
