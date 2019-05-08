import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Checkbox, Dropdown, Form, FormGroup } from 'carbon-components-react';

export class LandingPage extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted');
  };

  render() {
    const { namespaces } = this.props;
    return (
      <Form onSubmit={this.handleSubmit} style={{ width: 300 }}>
        <FormGroup legendText="Checkboxes">
          <Checkbox defaultChecked labelText="Checked" id="checkbox-0" />
          <Checkbox labelText="Default" id="checkbox-1" />
          <Checkbox disabled labelText="Disabled" id="checkbox-2" />
        </FormGroup>

        <FormGroup legendText="Pipeline details">
          <Dropdown
            id="dropdown-0"
            initialSelectedItem="default"
            items={namespaces}
            label="Namespace"
            titleText="Namespace"
          />
        </FormGroup>

        <Button type="submit" style={{ marginTop: "2em" }}>
          Submit
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = (state, { selectors }) => ({
  namespaces: selectors.getNamespaces(state)
});

export default connect(mapStateToProps)(LandingPage);
