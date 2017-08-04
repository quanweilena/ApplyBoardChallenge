/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.css';
import Link from '../../components/Link/';
import history from '../../history';
import { getExistingName, matchNameToTerm, sortName, styles } from './utils';
import { doLogin } from '../../actions/user';
import Autocomplete from 'react-autocomplete';

class Login extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string
  };
  constructor(props, context) {
    super(props);
    this.state = {
      title: props.title,
      name: ''
    };
    this.store = context.store;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.store.dispatch(doLogin(this.state.name));    // Pass name to redux store
    history.push("/welcome");    // Redirect user to welcome page
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1 style={styles.bounce}>
            {/* Display name alone with 'Hello' */}
            {this.state.title}&nbsp;{this.state.name}!
          </h1>
          <p className={s.lead}>Log in with your Name</p>
          <form onSubmit={this.handleSubmit}>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="name">
                Name
              </label>
            {/* Set autocomplete for "name" field */}
              <Autocomplete
                inputProps = {
                  { className: s.input,
                    id: "name",
                    name: "name",
                    autoComplete: "off"
                  }
                }
                wrapperStyle = {{}}
                value={this.state.name}
                items={getExistingName()}
                getItemValue={(item) => item.name}
                shouldItemRender={matchNameToTerm}
                sortItems={sortName}
                onChange={(event, name) => this.setState({ name })}
                onSelect={name => this.setState({ name })}
                renderItem={(item, isHighlighted) => (
                  <div
                    style={isHighlighted ? styles.highlightedItem : styles.item}
                    key={item.name}
                  >{item.name}</div>
                )}
              />
            </div>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="password">
                Password:
              </label>
              <input
                className={s.input}
                id="password"
                type="password"
                name="password"
              />
            </div>
            <div className={s.formGroup}>
              <button className={s.button}>Log in</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Login.contextTypes = {
  store: PropTypes.object
};

export default withStyles(s)(Login);
