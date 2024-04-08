'use client'
import { useState } from "react";

import cx from 'classnames';

import { Arrow } from "@/components/Icons";

import css from './Accordion.module.scss'

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={cx(css.container, isActive ? css.active : '') } onClick={() => setIsActive(!isActive)}>
      <div className={css.head}>
        <span className={css.title}>{title}</span>
        <div className={cx(css.icon, isActive ? css.active : '') }>
            <Arrow />
        </div>
      </div>
      <p className={cx(css.content, isActive ? css.active : '')}>{content}</p>
    </div>
  );
};

export default Accordion;
