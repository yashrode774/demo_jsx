import Block from './Block';
import {css, cx} from '@linaria/core';

export default function BlockBundleDisclaimerBlock(props) {
  const styles = css`
  .disclaimer__disclaimer,
  .disclaimer__copyright {
    display: block;
    text-align: center;
    font-size: 0.94rem;
  }

  @media screen and (min-width: 75rem) {
      display: flex;
      justify-content: space-between;

    .disclaimer__disclaimer,
    .disclaimer__copyright {
      margin-bottom: 0;
      text-align: start;
    }

    .disclaimer__disclaimer {
      max-width: 40%;
      margin-left: 0.5rem; /* LTR */
    }

    [dir="rtl"] .disclaimer__disclaimer {
      margin-right: 0.5rem;
      margin-left: 0;
    }

    .disclaimer__copyright {
      width: 25%;
    }
  }
`;

  const disclaimer = (
    <div className={cx("disclaimer", styles)}>
      {props.content.fieldDisclaimer && (
        <div className="disclaimer__disclaimer">
          {props.content.fieldDisclaimer}
        </div>
      )}
      {props.content.fieldCopyright && (
        <div className="disclaimer__copyright">
          {props.content.fieldCopyright}
        </div>
      )}
    </div>
  );

  return (
    <Block {...props} content={disclaimer}></Block>
  )
}
