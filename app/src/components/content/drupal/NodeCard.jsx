import React from 'react';
import { css, cx } from '@linaria/core'
import Pointer from '../../../assets/pointer.svg'
import {props, cleanClass} from '../../utils';
import classNames from 'classnames';

export default function NodeCard({ node, viewMode, attributes, label, titlePrefix, titleSuffix, url, content, titleAttributes, contentAttributes}) {
  const articleStyles = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
    border: 1px solid #fcece7;
    background: #fff;
    color: red;
  `;
  const articleClasses = classNames([
    'node',
    `node--type-${node.bundle}`,
    node.isPromoted && 'node--promoted',
    node.isSticky && 'node--sticky',
    !node.isPublished && 'node--unpublished',
    `node--view-mode-${cleanClass(viewMode)}`,
    'view-mode-card',
    articleStyles
  ]);
  const headingStyles = css`
    flex-grow: 1;
    .field--name-title {
      text-decoration: none;
      color: #000;
      font-size: 1.424rem;
      font-weight: 400;
      padding-top: 0.5rem;
    }
  `
  const pointerStyles = css`
    content: "";
    position: absolute;
    top: 25%;
    right: 0; /* LTR */
    width: 14px;
    height: 14px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: contain;
    display: block;
  `
  const linkStyles = css`
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    padding-right: 20px; /* LTR */
    text-decoration: none;
    text-transform: uppercase;
    border-bottom: 1px solid transparent;
    background: inherit;
     &:hover {
       text-decoration: none;
       color: #008068;
       border-bottom: 1px solid #008068;
       background: transparent;
     }
     &:focus {
       text-decoration: none;
       color: #008068;
       border-bottom: 1px solid #008068;
       background: transparent;
     }
  `

  return(
    <article {...props(attributes, { 'class': articleClasses})}>
      {titlePrefix}
      <h2 {...props(titleAttributes, {'class': headingStyles})}>
        {label}
      </h2>
      {titleSuffix}
      {viewMode === 'card' ? (
        <>
          <div {...props(contentAttributes, {'class': 'node__content'})}>
            {content}
          </div>
          <div className="read-more">
            <a className={cx('read-more__link', linkStyles)} href={url}>
              View {node.bundle}
              <img className={pointerStyles} src={Pointer} alt="Pointer" />
              <span className="visually-hidden"> - {label}</span>
            </a>
          </div>
        </>
      ) : (
        <>
          <div className={cx("read-more", viewMode === 'card_common' && css`margin-bottom: 1em`)}>
            <a className={cx('read-more__link', linkStyles)} href={url}>
              View {node.bundle}
              <img className={pointerStyles} src={Pointer} alt="Pointer" />
              <span className="visually-hidden"> - {label}</span>
            </a>
          </div>
          <div {...props(contentAttributes, {'class': cx( 'node__content', viewMode === 'card_common_alt' && css`order: -1`)})}>
            {content}
          </div>
        </>
      )}
    </article>
  );
}
