export default function Breadcrumb({ breadcrumb, currentPageTitle }) {
  if (breadcrumb) {
    // JSX transformers remove newlines and whitespace around newlines, so that
    // JSX code can be formatted as desired with respect to newlines and
    // indentation without it affecting the output. However, Twig preserves
    // whitespace. In most cases, this whitespace difference isn't significant,
    // because HTML specifies that most whitespace between elements shouldn't
    // be rendered. However, in some cases, such as when lists are styled as
    // inline blocks, spaces between elements do get rendered. Because for the
    // Umami JSX demonstration theme we're re-using Umami's CSS, and Umami's
    // CSS was created based on Umami's Twig output which includes boundary
    // whitespace, we need to explicitly add in a space in a few places to match
    // Umami's look. In a real project, it would be preferable to instead create
    // the correct CSS based on not having boundary whitespace in the HTML.
    const space = ' ';

    return(
      <nav className="breadcrumb" role="navigation" aria-labelledby="system-breadcrumb">
        <h2 id="system-breadcrumb" className="visually-hidden">{ Drupal.t('Breadcrumb') }</h2>
        <ol>
          { breadcrumb && breadcrumb.constructor === Array && breadcrumb.map(({ text, url }, index) =>
            [
              <li key={ index }>
                { space }
                { url ? <a href={ url }>{ text }</a> : text }
              </li>,
              space
            ]
          )}
          <li>{ space }{ currentPageTitle }</li>
        </ol>
      </nav>
    );
  }
}
