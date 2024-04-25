import {props} from "../utils";
import classNames from 'classnames';


export default function FormElement({
    attributes = {},
    errors = '',
    prefix = '',
    suffix = '',
    required = false,
    type = '',
    name,
    label = '',
    labelDisplay = '',
    description = {},
    descriptionDisplay,
    disabled = '',
    titleDisplay,
    children = '',
    renderChildren = ''}) {
  const classes = classNames(
    'js-form-item',
    'form-item',
    `js-form-type-${type}`,
    `form-type-${type}`,
    `js-form-item-${name}`,
    `form-item-${name}`,
    !['after', 'before'].includes(titleDisplay)  ? 'form-no-label' : '',
    disabled === 'disabled' ? 'form-disabled' : '',
    errors ? 'form-item--error' : '',
  )

  const descriptionClasses = classNames(
    'description',
    descriptionDisplay === 'invisible' ? 'visually-hidden' : '',
  );

  return <div {...props(attributes, {'class': classes})}>
    {['before', 'invisible'].includes(labelDisplay) && label}
    {prefix.length > 0 &&     <span class="field-prefix">{ prefix }</span>}
    {(descriptionDisplay === 'before' && description.content) && description.content &&
      <div {...props(description.attributes || {}, {'class': descriptionClasses})}>
        { description.content }
      </div>
    }
    {renderChildren}

    {suffix.length > 0 &&  <span class="field-suffix">{ suffix }</span>}
    {['after'].includes(labelDisplay) && label}

    {errors && <div class="form-item--error-message form-item-errors">
      { errors }
      </div>}
    {(['after', 'invisible'].includes(descriptionDisplay) && description.content) && description.content &&
      <div {...props(description.attributes || {}, {'class': descriptionClasses})}>
        { description.content || '' }
      </div>}
  </div>

}
