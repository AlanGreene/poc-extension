import React, { Component } from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';

import LandingPage from './LandingPage';
import SubPage from './SubPage';

import styles from './ExtensionExample.css';

function ExtensionExample({ match }) {
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
        component={LandingPage}
      />
      <Route
        path={`${match.path}/sub-page`}
        component={SubPage}
      />
    </>
  );
}

export default withRouter(ExtensionExample);
