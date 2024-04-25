import Block from './Block';

export default function BlockLocalTasksBlock(props) {
  const nav = (
    <nav className="tabs" role="navigation" aria-label="Tabs">
      {props.content}
    </nav>
  );

  return (
    <Block {...props} content={nav}></Block>
  )
}
