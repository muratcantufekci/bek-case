'use client';
import React, { memo, useEffect, useState } from 'react';

import Image from 'next/image';

import useBasketStore from '@/store/useBasketStore';

import Button from '../Button';

import css from './Card.module.scss';

const Card = ({ title, desc, img, point, isGiveaway, resetCount }) => {
  const [count, setCount] = useState(0);
  const basketStore = useBasketStore();

  const incrementBtnHandler = (point) => {
    setCount((prev) => prev + 1);
    basketStore.increseBasketPoint(point);
  };

  const decrementBtnHandler = (point) => {
    if (count > 0) {
      setCount((prev) => prev - 1);
      basketStore.decreseBasketPoint(point);
    }
  };

  useEffect(() => {
    setCount(0);
  }, [resetCount]);

  return (
    <div className={css.container}>
      <h5>{title}</h5>
      <div className={css.img}>
        <Image width={180} height={180} src={img} alt="Ürün" />
      </div>
      <span>{desc}</span>
      <h5>{isGiveaway ? `Çekilişte verilecek ürün sayısı: ${point} Adet` : point + ' BEK Puanı'}</h5>
      {!isGiveaway && (
        <div className={css.btns}>
          <Button variant="white" onClick={() => incrementBtnHandler(point)}>
            +
          </Button>
          <span>{count}</span>
          <Button variant="white" onClick={() => decrementBtnHandler(point)}>
            -
          </Button>
        </div>
      )}
    </div>
  );
};

export default memo(Card);
