'use client';
import React from 'react';

import useModalStore from '@/store/useModalStore';

import { Close } from '../Icons';

import modalTypes from './types';

import css from './Modal.module.scss';

const Dialog = ({ children }) => {
  const modalStore = useModalStore();

  return (
    <div>
      <div className={css.modal} onClick={() => modalStore.closeModal()}>
        <div className={css.popup} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  );
};

function render(type) {
  switch (type) {
    default:
      return modalTypes[type] || null;
  }
}

const Container = () => {
  const modalStore = useModalStore();

  const Component = render(modalStore?.type);

  const handleClose = () => {
    modalStore.closeModal();
  };

  const closeButton = (
    <div onClick={handleClose} className={css.close}>
      <Close />
    </div>
  );

  if (!Component) {
    return null;
  }

  return (
    <Dialog {...modalStore.props}>
      <Component closeButton={closeButton} {...modalStore.props} />
    </Dialog>
  );
};

export default Container;
