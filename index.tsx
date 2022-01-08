import React from 'react';
import { render } from 'react-dom';
import './style.css';

import BackwardCounter from './src/components/BackwardCounter';
import ForwardCounter from './src/components/ForwardCounter';

function App() {
  return (
    <React.Fragment>
      <ForwardCounter />
      <BackwardCounter />
    </React.Fragment>
  );
}

render(<App />, document.getElementById('root'));
