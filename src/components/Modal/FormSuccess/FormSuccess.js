import React from 'react'

import { Success } from '@/components/Icons'

import css from './FormSuccess.module.scss'

const FormSuccess = ({closeButton}) => {
  return (
    <div className={css.container}>
        <div className={css.icon}>
            <Success />
        </div>
        <span>Başarılı!</span>
        <p>Siparişiniz Başarıyla Tamamlandı. Teşekkür ederiz!</p>
        {closeButton}
    </div>
  )
}

export default FormSuccess