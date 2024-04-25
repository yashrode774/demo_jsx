import React from 'react';
import {cleanClass, props} from '../utils';

export default function BlockFooterPromoBlock({ label, titleAttributes, attributes, content, titlePrefix, titleSuffix, elements }) {
  const bundleClass = cleanClass(`block-type-${elements.content.blockContent.bundle}`);

  return (
    <div {...props(attributes, {'class': bundleClass})}>
      {content.fieldMediaImage}
      {titlePrefix}
      {label ? <h2 {...props(titleAttributes)}>{label}</h2> :
        content.fieldTitle && <h2 {...props(titleAttributes)}>{content.fieldTitle}</h2>}
      {titleSuffix}
      <div className="footer-promo-content">
        {label ? (
            Object.keys(content).map((key) => {
              return (<div key={key}>
                {key !== 'fieldMediaImage' && content[key]}
              </div>)
            })) : (
            Object.keys(content).map((key) => {
              return (<div key={key}>
                {key !== 'fieldMediaImage' && key !== 'fieldTitle' && content[key]}
              </div>)
            }))
        }
      </div>
    </div>
  );
};
