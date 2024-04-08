"use client"
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import cx from 'classnames';

import img from '@/assets/images/logo.jpg';

import useBasketStore from '@/store/useBasketStore';

import css from './Header.module.scss';

const Header = () => {
  const basketStore = useBasketStore()
  return (
    <div className={css.header}>
      <div className={cx('container', css.container)}>
        <Link href="/">
          <Image src={img} alt="Logo" className={css.logo} />
        </Link>
        <div className={css.actions}>
          <Link href="/products" className={css.link}>BEK Market</Link>
          <span className={css.point}>BEK Puanı : {basketStore.userPoint}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
