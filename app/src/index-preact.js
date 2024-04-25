import { h, Fragment, render } from 'preact';
import hyperscriptify from 'hyperscriptify';
import propsify from 'propsify';

import components from './components';
components['drupal-html-fragment'] = Fragment;

console.log('Preact');
document.querySelectorAll('template[hyperscriptify]').forEach(function(templateElement) {
  const App = hyperscriptify(templateElement.content, h, Fragment, components, { propsify });
  const container = document.createElement('div');
  templateElement.after(container);
  render(App, container);
});
