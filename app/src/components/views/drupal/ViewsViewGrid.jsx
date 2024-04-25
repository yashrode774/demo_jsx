import { props } from "../../utils";

export default function ViewsViewGrid({ title, items, attributes, options }) {
  const gridClasses = [
    'views-view-grid',
    options.alignment,
    'cols-' + options.columns,
    'clearfix',
  ];

  function getRowClasses( row ) {
    return options.rowClassDefault ? [
      'views-row',
      options.alignment === 'horizontal' ? 'clearfix' : '',
      'row-' + row,
    ] : [];
  }

  function getColClasses( col ) {
    return options.colClassDefault ? [
      'views-col',
      options.alignment === 'vertical' ? 'clearfix' : '',
      'col-' + col,
    ] : [];
  }

  return(<>
    { title &&
      <h3>{ title }</h3>
    }
    <div { ...props( attributes, { 'class': gridClasses } ) }>
    { options.alignment === 'horizontal'
      ?
        items.map( ({ attributes, content }, row) =>
          <div key={ row } { ...props( attributes, { 'class': getRowClasses(row) } ) }>
            { content.map( ({attributes, content}, col) =>
                <div key={ col } { ...props( attributes, { 'class': getColClasses(col) } ) }>
                  { content }
                </div>
            )}
          </div>
        )
      :
        items.map( ({ attributes, content }, col) =>
          <div key={ col } { ...props( attributes, { 'class': getColClasses(col) } ) }>
            { content.map( ({ attributes, content }, row) =>
                <div key={ row } { ...props( attributes, { 'class': getRowClasses(row) } ) }>
                  { content }
                </div>
            )}
          </div>
        )
    }
    </div>
  </>);
}
