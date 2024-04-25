import { useState, useContext, useEffect} from 'react';
import {DrupalFormContext} from "./Form";


// Wraps all form elements to provide common functionality and subscribe to the
// parent form's context.
const InputBehaviors = (OriginalInput) => {
  function WrappedInput(properties) {
    const {attributes, ...passProps} = properties;
    const [inputValue, setInputValue] = useState(attributes.value || '');
    const {formState, setFormState} = useContext(DrupalFormContext);

    // Include the input's default value in the form state on init.
    useEffect(() => {
      if (attributes.name && setFormState) {
        setFormState(prior => ({ ...prior, [attributes.name]: inputValue}))
      }
    }, []);

    if (['hidden', 'submit'].includes(attributes.type)) {
      attributes.readOnly = '';
    } else if (!attributes['data-drupal-uncontrolled']) {
      // If the input is not explicitly set as uncontrolled, its state should
      // be managed by React.
      attributes.value = inputValue;
      attributes.onChange = (e) => {
        setInputValue(e.target.value)
        setFormState((prior) => ({...prior, [e.target.name]: e.target.value }))
      }
    }

    // React objects to inputs with the value attribute set if there are no
    // event handlers added via on* attributes.
    const hasListener = Object.keys(attributes).some((key) => /^on[A-Z]/.test(key))
    if (!hasListener && !['hidden', 'submit'].includes(attributes.type)) {
      delete attributes.value
    }

    // This is adding custom logic to the submit button in the contact message
    // feedback form. This component is not the ideal place to add logic
    // specific to a single form+input. It lives here at the moment just to
    // demonstrate it is possible.
    // This adds logic to the contact form that disables the submit button & adds
    // an instruction message until the message and subject fields are not empty.
    if (formState && formState.formId && formState.formId === 'contact-message-feedback-form' && attributes.name === 'op') {
      attributes.disabled = !(formState['message[0][value]'] && formState['subject[0][value]'])
      if (attributes.disabled) {
        passProps.renderChildren = [<p>Subject and message require values in order to submit</p>]
      }
    }
    const noopFunction = () => {}
    return (
      <>
        <OriginalInput
          {...passProps}
          attributes={attributes}
          formState={formState}
          setFormState={setFormState || noopFunction}
        />
      </>
    );
  }
  return WrappedInput;
}

export default InputBehaviors;
