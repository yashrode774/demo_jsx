import { createElement as h, Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import hyperscriptify from 'hyperscriptify';
import propsify from 'propsify';
import DrupalContextApp from "./DrupalContext";

import components from './components';
components['drupal-html-fragment'] = Fragment;



const processJSX = () => document.querySelectorAll('template[hyperscriptify]').forEach(function(templateElement) {
  const App = hyperscriptify(templateElement.content, h, Fragment, components, { propsify });
  const container = document.createElement('div');
  templateElement.after(container);
  const root = createRoot(container);
  root.render(h(DrupalContextApp, {value: {}}, App));
});
processJSX();

Drupal.JSXHyperscriptify = (context) => {
  return hyperscriptify(context, h, Fragment, components, { propsify });
}

Drupal.JSXAdditional = (Application, context) => {
  const container = document.createElement('div');
  context.after(container);
  const root = createRoot(container);
  root.render(h(DrupalContextApp, {value: {}}, Application));
  return container;
}
Drupal.JSXProcess = processJSX;
Drupal.JSXComponents = components;
