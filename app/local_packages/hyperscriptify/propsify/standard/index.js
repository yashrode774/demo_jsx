import factory from '../factory';
import { camelCase, mapKeys, mapValues, set } from 'lodash-es';
import htmlElementAttributeToPropMap from './reactHtmlAttributeToPropertyMap';

const basePropsify = factory({ camelCase, mapKeys, mapValues, set, htmlElementAttributeToPropMap });

export default function propsify( attributes, slots, context ) {
  const props = basePropsify(attributes, slots, context);

  // In React, setting the value prop of an input element makes the element not
  // editable, and the defaultValue prop more closely matches the semantics of
  // the value attribute.
  if (context.tagName === 'input' && props.defaultValue === undefined && props.value !== undefined ) {
    props.defaultValue = props.value;
    delete props.value;
  }

  // React requires the style prop to be an object rather than a style
  // attribute string. Instead of parsing the CSS of the style attribute
  // ourselves, grab it from the DOM element's style property.
  if (context.element && typeof props.style === 'string') {
    props.style = Object.entries(context.element.style)
      // Filter out empty values and numeric keys.
      .filter( ([ key, value ]) => (value !== '' && isNaN(key)) )
      // Convert from an array of key/value pairs to a key-indexed object.
      .reduce( (accumulator, [ key, value ]) => ({ ...accumulator, [key]: value }), {} );
  }

  return props;
}
