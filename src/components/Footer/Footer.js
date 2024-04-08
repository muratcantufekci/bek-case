import React from 'react';

import Link from 'next/link';

import cx from 'classnames'

import css from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={css.wrapper}>
      <div className={cx('container',css.container)}>
        <div className={css.left}>
          <p>
          All rights reserved © 2024
          </p>
        </div>
        <div className={css.right}>
            <Link href='/faq'>Sıkça Sorulan Sorular</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
