import React from 'react';
import ReactDom from 'react-dom';
import App from './app';

const div = document.createElement('div');
document.body.append(div);

ReactDom.render(<App />, div);