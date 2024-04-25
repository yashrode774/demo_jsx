import classNames from 'classnames';
import { cleanClass, props} from '../utils';

export default function BlockBundleBannerBlock({configuration, pluginId, titlePrefix, label, titleAttributes, titleSuffix, content, elements, attributes}) {
  // @todo: Find way to simplify drupal object structure so accessing values is easier.
  const imagePath = content.fieldMediaImage[0].media.fieldMediaImage.entity.uri.value.replace(/^public:\/\//, '/sites/default/files/');
  const bundleClass = cleanClass(`block-type-${elements.content.blockContent.bundle}`);
  const classes = classNames('block', `block-${cleanClass(configuration.provider)}`, `block-${cleanClass(pluginId)}`, 'cover-image', bundleClass);

  return (
    <div {...props(attributes, {'class': classes})} style={{backgroundImage: `url("${imagePath}")`}}>
      <div className="block-inner">
        {titlePrefix}
        {label && <h2 {...titleAttributes}>{label}</h2>}
        {titleSuffix}
        <div className="content" style={{display: "flex"}}>
          <div className="summary">
            {Object.keys(content).reverse().map((key) =>{
             return (<div key={key}>
                {(key !== 'fieldMediaImage' && key !== 'blockContent') && content[key]}
              </div>)
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
