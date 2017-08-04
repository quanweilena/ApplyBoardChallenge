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
import s from './Welcome.css';
import { connect } from 'react-redux';

class MyWelcome extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      name: props.name || "Guest",   //If user doesn't enter a name, pass "Guest" to display on page
    };
  }


  render() {

    var characters = this.props.length;

    // If user doesn't enter a name, this line will not be displayed
    var renderNameCharacters = characters ? (<h2 className={s.subtitle}>
        Your name has {characters} characters!
      </h2>) : null;

    return (
      <div className={s.root}>
        <div className={s.container}>
          {/* Display name alone with 'WELCOME' */}
          <h1 className={s.title}> {this.state.title} {this.state.name}</h1>
          {/* Display name length */}
          {renderNameCharacters}
        </div>         
      </div>
    );
  }
}

// Pass state from redux store to props
const mapStateToProps = (state) => {
  return {
    name: state.user.name,
    length: state.user.length
  }
}

// Connect to redux
const Welcome = connect(mapStateToProps)(MyWelcome);

export default withStyles(s)(Welcome);
