import React from 'react';
import { render } from 'react-dom';
import Root from './components/root';
import uuid from 'node-uuid';
import configuteStore from './configureStore';

require('../scss/main.scss');

const store = configuteStore();

render(<Root store={store} />,
    document.getElementById('app'));

module.hot.accept();