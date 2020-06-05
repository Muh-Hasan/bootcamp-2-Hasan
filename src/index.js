import React from 'react';
import ReactDOM from 'react-dom';

function Hi() {
  return <h1 align="center">Hello World!</h1>;
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));