import React, { Component } from 'react';
import {render} from 'react-dom';

import OperationContainer from './containers/OperationContainer.jsx';

class App extends Component {

  render () {
    return (
      <div>
        <h1>My Budget Application</h1>
        <OperationContainer />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
