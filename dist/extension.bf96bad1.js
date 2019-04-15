function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class ExtensionExample extends React.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
      console.log('Form submitted');
    });
  }
  render() {
    return React.createElement(CarbonComponentsReact.Form, {
      onSubmit: this.handleSubmit
    }, React.createElement(CarbonComponentsReact.FormGroup, {
      legendText: "Checkboxes"
    }, React.createElement(CarbonComponentsReact.Checkbox, {
      defaultChecked: true,
      labelText: "Checked",
      id: "checkbox-0"
    }), React.createElement(CarbonComponentsReact.Checkbox, {
      labelText: "Default",
      id: "checkbox-1"
    }), React.createElement(CarbonComponentsReact.Checkbox, {
      disabled: true,
      labelText: "Disabled",
      id: "checkbox-2"
    })), React.createElement(CarbonComponentsReact.TextInput, {
      id: "text-0",
      labelText: "Text Input",
      placeholder: "Placeholder text"
    }), React.createElement(CarbonComponentsReact.Button, {
      type: "submit",
      style: {
        marginTop: "2em"
      }
    }, "Submit"));
  }
}

export default ExtensionExample;
