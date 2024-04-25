import Block from './Block';

export default function BlockLocalActionsBlock(props) {
  const nav = (
    <nav class="action-links">{props.content}</nav>
  );

  return (
    <Block {...props} content={nav}></Block>
  )
}
