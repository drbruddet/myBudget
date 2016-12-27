import React from 'react';
import {render} from 'react-dom';

import OperationList from './components/operationList.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>My Budget Application</h1>
        <OperationList />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
