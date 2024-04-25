import {props} from "../utils";
import classNames from "classnames";
// @todo this is currently not active as it is not listed in components.js,
// nor does it have a template-info.json. The children were rendering as escaped
// markup and while it's likely there's a simple solution, it was blocking other
// progress.

export default function Container({attributes = {}, children = '', renderChildren = ''} ) {
  const classes = classNames(
    attributes.hasParent ? 'js-form-wrapper' : '',
    attributes.hasParent ? 'form-wrapper' : '',
  )
  return <div { ...props(attributes, {'class': classes}) } >
    {renderChildren}
  </div>
}
