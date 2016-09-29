import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Pizzagram</Link>
        </h1>
          <br>Is this even working</br>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
});

export default Main;
