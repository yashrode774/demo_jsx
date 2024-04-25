import { props, cleanClass } from '../utils';
import classNames from 'classnames';

export default function Field({fieldName, fieldType, label, labelDisplay, labelHidden, attributes, items, titleAttributes, multiple }) {
  const classes = classNames(['field', `field--name-${cleanClass(fieldName)}`, `field--type-${cleanClass(fieldType)}`, `field--label-${cleanClass(labelDisplay)}`, labelDisplay === 'inline' && 'clearfix', getFieldClasses()]);
  const titleClasses = classNames(['field__label', labelDisplay === 'visually_hidden' && 'visually-hidden']);

  // umami_jsx_preprocess_field
  function getFieldClasses() {
    let classes = [];
    if (fieldName) {
      if (
        fieldName === 'field_recipe_category' ||
        fieldName === 'field_tags' ||
        fieldName === 'field_difficulty') {
        classes.push('label-items');
      }
    }
    if (fieldType.includes('text')) {
      classes.push('clearfix', 'text-formatted');
    }
    return classes;
  }

  function renderItems() {
    return items.map((item, index) => (
      <div key={index} {...props(item.attributes, {'class': 'field__item'})}>
        {item.content}
      </div>
    ));
  }

  if (labelHidden) {
    if (multiple) {
      return (
        <div {...props(attributes, {'class': classNames(classes, 'field__items')})}>
          {renderItems()}
        </div>
      );
    } else {
      return items.map((item, index) => (
        <div key={index} {...props(attributes, {'class': classNames(classes, 'field__item')})}>
          {item.content}
        </div>
      ));
    }
  } else {
    return (
      <div {...props(attributes, {'class': classes})}>
        <div {...props(titleAttributes, {'class': classNames(titleClasses)})}>{label}</div>
        {multiple ? (
          <div className="field__items">
            {renderItems()}
          </div>
        ) : renderItems()}
      </div>
    );
  }
}
