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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

class LandingPage extends React.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
      console.log('Form submitted');
    });
  }
  render() {
    const {
      namespaces
    } = this.props;
    return React.createElement(CarbonComponentsReact.Form, {
      onSubmit: this.handleSubmit,
      style: {
        width: 300
      }
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
    })), React.createElement(CarbonComponentsReact.FormGroup, {
      legendText: "Pipeline details"
    }, React.createElement(CarbonComponentsReact.Dropdown, {
      id: "dropdown-0",
      initialSelectedItem: "default",
      items: namespaces,
      label: "Namespace",
      titleText: "Namespace"
    })), React.createElement(CarbonComponentsReact.Button, {
      type: "submit",
      style: {
        marginTop: "2em"
      }
    }, "Submit"));
  }
}
const mapStateToProps = (state, {
  selectors
}) => ({
  namespaces: selectors.getNamespaces(state)
});
var LandingPage$1 = ReactRedux.connect(mapStateToProps)(LandingPage);

function SubPage() {
  return React.createElement("span", null, "This is a sub page for my custom extension");
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') { return; }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".ExtensionExample_navLink__2Aq6d {\n  margin-bottom: 1em;\n}\n\n.ExtensionExample_active__3BWwp {\n  text-decoration: none;\n}\n";
var styles = {"navLink":"ExtensionExample_navLink__2Aq6d","active":"ExtensionExample_active__3BWwp"};
styleInject(css);

class ExtensionExample extends React.Component {
  constructor(props) {
    super(props);
    const {
      selectors
    } = this.props;
    this.state = {
      selectors
    };
  }
  render() {
    const {
      match
    } = this.props;
    const {
      selectors
    } = this.state;
    return React.createElement(React.Fragment, null, React.createElement("nav", null, React.createElement("ul", null, React.createElement("li", {
      className: styles.navLink
    }, React.createElement(ReactRouterDOM.NavLink, {
      activeClassName: styles.active,
      exact: true,
      to: match.url
    }, "Extension landing page")), React.createElement("li", {
      className: styles.navLink
    }, React.createElement(ReactRouterDOM.NavLink, {
      activeClassName: styles.active,
      to: `${match.url}/sub-page`
    }, "Extension sub page")))), React.createElement(ReactRouterDOM.Route, {
      exact: true,
      path: match.path,
      render: props => React.createElement(LandingPage$1, _extends({}, props, {
        selectors: selectors
      }))
    }), React.createElement(ReactRouterDOM.Route, {
      path: `${match.path}/sub-page`,
      component: SubPage
    }));
  }
}
var ExtensionExample$1 = ReactRouterDOM.withRouter(ExtensionExample);

export default ExtensionExample$1;
