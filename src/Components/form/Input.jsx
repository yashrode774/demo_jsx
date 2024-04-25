import {props} from "../utils";
import inputBehaviors from "./inputBehaviors";
function Input(properties) {

const {attributes = {}, children = '', renderChildren = ''} = properties;
   return <><input {...props(attributes)}  />{ renderChildren }</>
}

export default inputBehaviors(Input)
