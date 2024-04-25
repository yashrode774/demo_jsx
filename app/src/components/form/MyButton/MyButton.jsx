// @todo Port styling from https://git.drupalcode.org/project/sdc_examples/-/blob/1.x/components/my-button/my-button.css

import external from './icons/external.svg'
import like from './icons/like.svg'
import power from './icons/power.svg'
const icons = {external, like, power}

export default function ({text, iconType = 'power'}) {
  return(
    <button>
      {text}
      <img src={icons[iconType]} />
    </button>
  );
}
