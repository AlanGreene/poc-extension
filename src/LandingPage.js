import React, { Component } from 'react';
import { Button, Checkbox, Form, FormGroup, TextInput } from 'carbon-components-react';

export default class LandingPage extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted');
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup legendText="Checkboxes">
          <Checkbox defaultChecked labelText="Checked" id="checkbox-0" />
          <Checkbox labelText="Default" id="checkbox-1" />
          <Checkbox disabled labelText="Disabled" id="checkbox-2" />
        </FormGroup>

        <TextInput
          id="text-0"
          labelText="Text Input"
          placeholder="Placeholder text"
        />

        <Button type="submit" style={{ marginTop: "2em" }}>
          Submit
        </Button>
      </Form>
    );
  }
}
