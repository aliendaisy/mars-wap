import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';

import './css/iconfont.css';
import './css/index.css';
import Home from './js/component/pages/home';
import Product from './js/component/pages/product';
import Account from './js/component/pages/account';
import Profile from './js/component/pages/profile';
import Sign from './js/component/pages/sign';
import Download from './js/component/pages/download';
import Order from './js/component/pages/order';

import AboutUs from './js/component/staticPages/aboutUs';
import Partner from './js/component/staticPages/partner';
import Privacy from './js/component/staticPages/privacy';
import Term from './js/component/staticPages/term';
import NotFound from './js/component/staticPages/notFound';

import store from './js/store/store';


export class Root extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <PrivateRoute path="/product" component={Product}/>
                    <PrivateRoute path="/account" component={Account}/>
                    <PrivateRoute path="/profile" component={Profile}/>
                    <PrivateRoute path="/order" component={Order}/>
                    <Route path="/sign" component={Sign}/>
                    <Route path="/download" component={Download}/>

                    <Route path="/aboutUs" component={AboutUs}/>
                    <Route path="/partner" component={Partner}/>
                    <Route path="/privacy" component={Privacy}/>
                    <Route path="/term" component={Term}/>

                    <Route path="/404" component={NotFound}/>
                    <Redirect from="*" to="/404"/>
                </Switch>
            </Router>
        )
    }
}

//根据token是否存在进行跳转判断
const PrivateRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem('token');
    let auth = token ? true : false;

    return(
        <Route
            {...rest}
            render={props =>
                        auth ? (<Component {...props} />) :
                        (<Redirect
                            to={{
                                pathname: "/sign",
                                state: {from: props.location}
                            }}
                        />)
                    }

        />
    );
};


const root = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Root/>
    </Provider>,root
);

