import h from 'solid-js/h';
import { render } from 'solid-js/web';
import hyperscriptify from 'hyperscriptify';
import propsify from 'propsify';

import components from './components';
const Fragment = ({ children }) => <>{ children }</>;
components['drupal-html-fragment'] = Fragment;

console.log('Solid');
document.querySelectorAll('template[hyperscriptify]').forEach(function(templateElement) {
  const App = hyperscriptify(templateElement.content, h, Fragment, components, { propsify });
  const container = document.createElement('div');
  templateElement.after(container);
  render(App, container);
});
