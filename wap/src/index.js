import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

import './css/iconfont.css';
import './css/index.css';
import Home from './js/component/pages/home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Home/>, document.getElementById('root')
);
registerServiceWorker();
