import {props} from "../utils";
import inputBehaviors from "./inputBehaviors";


function Textarea({attributes = {}, wrapperAttributes = {}})  {
  return (<div{ ...props(wrapperAttributes) }>
    <textarea { ...props(attributes) }  />
  </div>)
}

export default inputBehaviors(Textarea)
