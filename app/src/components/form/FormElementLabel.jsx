import {props} from "../utils";
import classNames from 'classnames';


export default function FormElementLabel({title ='', titleDisplay = '', required = '', attributes = {}}) {
  const classes = classNames(
    'form-label',
    titleDisplay === 'after' ? 'option' : '',
    titleDisplay === 'invisible' ? 'visually-hidden' : '',
    !!required ? 'js-form-required' : '',
    !!required ? 'form-required' : '',
  )
  const show = !!title || !!required;
  return (show &&   <label {...props(attributes, {'class': classes})}>{ title['#markup'] }</label>
  )
}
