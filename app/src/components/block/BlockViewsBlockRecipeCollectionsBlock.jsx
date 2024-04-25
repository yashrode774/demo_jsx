import Block from './Block';
import { css, cx } from '@linaria/core'
export default function BlockViewsBlockRecipeCollectionsBlock(props) {
  const blockStyles = css`
  .block-views-blockrecipe-collections-block {
    padding: 3rem 4%;
    color: #fff;
    background: #767775;

    .block__title {
      margin-bottom: 1.5rem;
      text-align: center;
    }

    .views-view-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .views-col {
      width: 100%;
      padding: 0 14px;
      text-align: center;

      @media screen and (min-width: 48em) {
        width: 25%;
        max-width: 13rem;
        text-align: left; /* LTR */

        [dir="rtl"] & {
          text-align: right;
        }
      }
    }

    .views-row {
      margin-bottom: 0.5rem;
      font-size: 0.9rem;

      a {
        text-decoration: none;
        color: #fff;
        font-weight: bold;

        &:active,
        &:focus,
        &:hover {
          text-decoration: underline;
          outline-color: #fff;
          background: transparent;
        }
      }
    }
  }
`;

  return (<div className={cx('container', blockStyles, css`max-width: 100%`)}>
    <Block {...props}></Block>
  </div>)
    ;
}
