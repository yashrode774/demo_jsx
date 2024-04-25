import { props, cleanClass } from '../utils';
import classNames from 'classnames';

export default function Block({configuration, pluginId, attributes, titlePrefix, titleAttributes, label, titleSuffix, content, elements }) {
  const classes = classNames('block', `block-${cleanClass(configuration.provider)}`, `block-${cleanClass(pluginId)}`, getBundleClass());

  // umami_preprocess_block
  function getBundleClass() {
    if (elements && elements.content && elements.content.blockContent) {
      const bundle = elements.content.blockContent.bundle;
      return cleanClass(`block-type-${bundle}`);
    }
  }

  return (
    <div {...props(attributes, {'class': classes})}>
      {titlePrefix}
      {label && <h2 {...props(titleAttributes, {'class': 'block__title'})}>{label}</h2>}
      {titleSuffix}
      {content}
    </div>
  )
}
