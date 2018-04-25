import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Provider} from 'react-redux'


import './css/iconfont.css';
import './css/index.css';
import Home from './js/component/pages/home';
import Product from './js/component/pages/product';
import Account from './js/component/pages/account';
import Profile from './js/component/pages/profile';
import Sign from './js/component/pages/sign';
import Download from './js/component/pages/download';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Home/>, document.getElementById('root')
);

export class Root extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/product" component={Product}/>
                    <Route path="/account" component={Account}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/sign" component={Sign}/>
                    <Route path="/download" component={Download}/>
                </Switch>
            </Router>
        )
    }
}


const root = document.getElementById('root');

ReactDOM.render(
    <Provider>
        <Root/>
    </Provider>,root
);

registerServiceWorker();
