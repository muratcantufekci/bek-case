import React from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import css from './Button.module.scss'

const Button = ({ type = "button", variant = "primary", children, classnames, ...props }) => {

  const cn = {
    container: cx(css.button, css[variant], classnames?.container)
  }

  return (
    <button type={type} className={cn.container} {...props}>{children}</button>
  )
}


Button.propTypes = {
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
    variant: PropTypes.oneOf(['primary', 'secondary', 'green', 'white', 'black', 'dark']),
}

export default Button