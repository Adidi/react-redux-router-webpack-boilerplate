import React from 'react';
import { render } from 'react-dom';
import Root from './components/root';

require('../scss/main.scss');

render(<Root name="World" />,
    document.getElementById('app'));

module.hot.accept();