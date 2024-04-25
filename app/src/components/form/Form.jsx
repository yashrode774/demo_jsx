import {props} from "../utils";
import { createContext, useState } from 'react';

export const DrupalFormContext = createContext({});
export const DrupalFormDispatchContext = createContext({});

export default function Form({attributes = {}, children = '', renderChildren = ''}) {
  const [formState, setFormState] = useState({formId: attributes['data-drupal-selector'] || ''})
  return (
    <DrupalFormContext.Provider value={{formState, setFormState}}>
      <form {...props(attributes)}>
        {renderChildren}
      </form>
    </DrupalFormContext.Provider>
  );
}
