import React from 'react'

import { Fail } from '@/components/Icons'

import css from './FormFail.module.scss'

const FormFail = ({closeButton}) => {
  return (
    <div className={css.container}>
        <div className={css.icon}>
            <Fail />
        </div>
        <span>Hatalı</span>
        <p>Lütfen Puanınız Kadar Alışveriş Yapınız!</p>
        {closeButton}
    </div>
  )
}

export default FormFail