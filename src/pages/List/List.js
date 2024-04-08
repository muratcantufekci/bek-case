'use client';

import React, { useState } from 'react';

import cx from 'classnames';

import useBasketStore from '@/store/useBasketStore';
import useModalStore from '@/store/useModalStore';

import Button from '@/components/Button';
import Card from '@/components/Card';
import { MODAL_BASKET_FAIL,MODAL_BASKET_SUCCESS } from '@/components/Modal/constants';

import NotFound from '../NotFound';

import css from './List.module.scss';

const ListPage = ({ data }) => {
  const basketStore = useBasketStore()
  const modalStore = useModalStore();
  const [resetCount, setResetCount] = useState(false)

  const completeShoppingBtnHandler = () => {
    if(basketStore.basketPoint > 0 && basketStore.userPoint >= basketStore.basketPoint) {
      modalStore.openModal(MODAL_BASKET_SUCCESS);
      basketStore.updateUserPoint()
      basketStore.clearBasketPoint()
      setResetCount(!resetCount)
    } else if(basketStore.userPoint < basketStore.basketPoint) {
      modalStore.openModal(MODAL_BASKET_FAIL);
    }
  }

  return (
    <div>
      <div className={cx('container', css.container)}>
        <h2>Ürün Listesi</h2>
        <div className={css.wrapper}>
          {data?.length > 0 ? (
            <div className={css.content}>
              {data?.map((item) => (
                <Card key={item.id} title={item.name} desc={item.description} img={item.img} point={item.point} resetCount={resetCount}/>
              ))}
            </div>
          ) : (
            <NotFound />
          )}
          <div className={css.right}>
            <div className={css.point}>
              <p>
                BEK Puanınız: <span>{basketStore.userPoint}</span>
              </p>
            </div>
            <div className={css.basket}>
              <div className={css.top}>
                <p>Sepetiniz</p>
              </div>
              <div className={css.bottom}>
                <span>Toplam Sepet Puanı: {basketStore.basketPoint} Bek</span>
              </div>
            </div>
              <Button variant="green" classnames={{ container: 'w-full' }} onClick={completeShoppingBtnHandler}>
                Alışverişi Tamamla
              </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPage;
