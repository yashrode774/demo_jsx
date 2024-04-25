import React, { useRef } from 'react';
import { props, cleanClass } from '../../utils';
import classNames from 'classnames';
import MenuIcon from '../../../../../images/svg/menu-icon.svg'
import {css, cx} from '@linaria/core';

export default function BlockUmamiMainMenu({
   derivativePluginId,
   configuration,
   content,
   attributes,
   titleAttributes,
   titlePrefix,
   titleSuffix
}) {
  const headingId = `${attributes.id || ''}-menu`;
  const buttonElement = useRef(null);
  const toggleWrapStyles = css`
    @media screen and (min-width: 48em) {
        display: none;
    }
  `
  const menuMainStyles = css`
    flex: 0 1 100%;
    text-align: center;
    @media screen and (min-width: 48em) {
      flex-basis: calc(100% - 220px);
      flex-grow: 0;
      flex-shrink: 1;
      text-align: right;
    }
    .menu-main--active {
      overflow-y: auto;
      max-height: 18.75rem;
    }
  `
  const navClasses = [
    'block',
    'block-menu',
    'navigation',
    derivativePluginId ? `menu-${cleanClass(derivativePluginId)}__wrapper` : '',
    menuMainStyles
  ];
  const menuMainToggleStyles = css`
    width: 41px;
    height: 41px;
    margin-right: -9px;
    /* the padding, margin & transparent border means the hamburger doesn't move on focus/hover */
    padding: 0 6px;
    text-align: left;
    border: 3px solid transparent;
    border-radius: 0;
    background-color: transparent;
    line-height: 1;
    &:hover {
      background-color: transparent;
    }
   svg {
     display: block;
   }
   @media screen and (min-width: 48em) {
     display: none;
   }
  `

  function onClickHandler() {
    buttonElement.current.classList.toggle('menu-main-toggle--active');
    const mainMenu = document.querySelector(
      '[data-drupal-selector="menu-main"]',
    );
    mainMenu.classList.toggle('menu-main--active');
  }

  return (
    <>
      <div className={cx("menu-main-togglewrap", toggleWrapStyles)}>
        <button
          type="button"
          name="menu_toggle"
          className={cx("menu-main-toggle", menuMainToggleStyles)}
          data-drupal-selector="menu-main-toggle"
          aria-label="Toggle the menu"
          onClick={onClickHandler}
          ref={buttonElement}
        >
          <img src={MenuIcon} alt="menu icon" />
        </button>
      </div>
      <nav
        role="navigation"
        aria-labelledby={headingId}
        {...props(attributes, { class: classNames(navClasses) })}
      >
        <>
          {titlePrefix}
          <h2
            {...props(
              titleAttributes,
              configuration.label_display === true
                ? ''
                : { class: 'visually-hidden' },
            )}
            id={headingId}
          >
            {configuration.label}
          </h2>
          {titleSuffix}
        </>
        {content}
      </nav>
    </>
  );
}
