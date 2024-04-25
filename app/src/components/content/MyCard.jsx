// @todo Port styling from https://git.drupalcode.org/project/sdc_examples/-/blob/1.x/components/my-card/my-card.css

export default function ({header, body}) {
  return(
    <div>
      <h2>{header}</h2>
      <div>{body}</div>
    </div>
  );
}
