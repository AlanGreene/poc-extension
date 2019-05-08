import React, { Component } from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';

import LandingPage from './LandingPage';
import SubPage from './SubPage';

import styles from './ExtensionExample.css';

class ExtensionExample extends Component {
  constructor(props) {
    super(props);

    const { selectors } = this.props;
    this.state = { selectors };
  }

  render() {
    const { match } = this.props;
    const { selectors } = this.state;
    return (
      <>
        <nav>
          <ul>
            <li className={styles.navLink}>
              <NavLink activeClassName={styles.active} exact to={match.url}>Extension landing page</NavLink>
            </li>
            <li className={styles.navLink}>
              <NavLink activeClassName={styles.active} to={`${match.url}/sub-page`}>Extension sub page</NavLink>
            </li>
          </ul>
        </nav>

        <Route
          exact
          path={match.path}
          render={props => <LandingPage {...props} selectors={selectors} />}
        />
        <Route
          path={`${match.path}/sub-page`}
          component={SubPage}
        />
      </>
    );
  }
}

export default withRouter(ExtensionExample);
