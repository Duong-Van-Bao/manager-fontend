import React from 'react';
import ReactDOM from 'react-dom';
import store from './Components/Store'
import './index.css';
import './../src/css/base.css';
import './../src/css/grid.css';
import './../src/css/main.css';
import './../src/css/responsive.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';


ReactDOM.render(
<Provider store={store}> 
<App />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
