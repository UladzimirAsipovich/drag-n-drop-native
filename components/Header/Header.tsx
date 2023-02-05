import React from 'react';
import style from './Header.module.scss';
import type { I_Header } from './Header.types';

const Header: I_Header = ({ title, children, center, size = 'md', element = 'h2' }) => {
  return (
    <header className={`${style.header} ${center ? style.header_center : ''} ${style[`header_${size}`]}`}>
      {
        children ?? React.createElement(element, {
          className: style.header__title,
        }, (title || "Header"))
      }
    </header>
  )
}

export default Header;