import React from 'react';

require('./App.css');
require('./abc.less');

export default () => <h1 className="some-class">Hello World</h1>;

/*
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}
*/
