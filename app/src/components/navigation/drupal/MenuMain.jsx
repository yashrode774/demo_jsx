import React from 'react';
import { props, cleanClass } from '../../utils';
import classNames from 'classnames';
import {css} from '@linaria/core';

const MenuMain = ({ items, menuName, attributes }) => {
  return (
    <MenuLinks
      items={items}
      menuLevel={0}
      menuName={menuName}
      attributes={attributes}
    />
  );
};

function renderItems(items, attributes, menuLevel, menuName) {
  return Object.keys(items).map((key, index) => {
    const item = items[key];
    const itemClasses = [
      `menu-${cleanClass(menuName)}__item`,
      item.isExpanded ? `menu-${cleanClass(menuName)}__item--expanded` : '',
      item.isCollapsed ? `menu-${cleanClass(menuName)}__item--collapsed` : '',
      item.inActiveTrail
        ? `menu-${cleanClass(menuName)}__item--active-trail`
        : '',
      css`
        margin-top: 0.8em;
        text-align: center;
        @media screen and (min-width: 48em) {
          margin-top: 0;
          margin-bottom: 0;
          & + & {
            margin-left: 2.5em; /* LTR */
          }
          [dir="rtl"] & + & {
            margin-right: 2.5em;
            margin-left: 0;
          }
        }
      `
    ];
    const linkClasses = [
      `menu-${cleanClass(menuName)}__link`,
      css`
        display: inline-block;
        /* Margin required for focus outlines. */
        margin: 5px 3px;
        padding-bottom: 0.15em;
        transition: all 0.2s;
        text-decoration: none;
        color: inherit;
        border-bottom: solid 0.15em transparent;
        background-color: inherit;
        &:hover, &.is-active:hover, &:focus {
          text-decoration: none;
          color: #da3c13;
          border-bottom-color: #da3c13;
          background-color: inherit;
        }
        &:active, &.is-active {
          text-decoration: none;
          border-bottom-color: #da3c13;
        }
      `
    ];
    // workaround to get path value
    const titleToPathMap = {
      "Articles": "articles",
      "Recipes": "recipes",
      "Home": "<front>",
    }

    return (
      <li key={index} {...props(item.attributes, { class: classNames(itemClasses) })}>
        <a href={item.url} className={classNames(linkClasses)} data-drupal-link-system-path={titleToPathMap[item.title]}>
          {item.title}
        </a>
        {item.below && (
          <MenuLinks
            items={item.below}
            attributes={attributes}
            menuLevel={menuLevel + 1}
            menuName={menuName}
          />
        )}
      </li>
    );
  });
}

const MenuLinks = ({ items, attributes, menuLevel, menuName }) => {
  const submenuClasses = [`menu-${cleanClass(menuName)}__submenu`];
  const menuMainStyles = css`
    overflow: hidden;
    max-height: 0;
    margin: 0;
    padding: 0;
    list-style-type: none;
    transition: max-height 0.5s ease-in;
    color: #000;
    font-family: "Scope One", Georgia, serif;
    font-size: 1.266rem;
    font-weight: 400;
    line-height: 1.2;

    @media screen and (min-width: 48em) {
      display: flex;
      overflow: auto;
      flex-wrap: wrap;
      justify-content: flex-end;
      max-height: none;
    }
`;
  const menuClasses = [`menu-${cleanClass(menuName)}`, menuMainStyles];


  if (items && Object.keys(items).length > 0) {
    return menuLevel === 0 ? (
      <ul
        {...props(attributes, { class: classNames(menuClasses) })}
        data-drupal-selector="menu-main"
      >
        {renderItems(items, attributes, menuLevel, menuName)}
      </ul>
    ) : (
      <ul {...props(attributes, { class: classNames(submenuClasses) })}>
        {renderItems(items, attributes, menuLevel, menuName)}
      </ul>
    );
  }
  return null;
};

export default MenuMain;
