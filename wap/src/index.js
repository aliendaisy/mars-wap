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
import {fetchJson} from './js/component/functional/common';
import store from './js/store/store'


var authFlag;
export class Root extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            auth: false, // 表示是否认证通过
            hasAuthed: false  // 表示是否向服务器发送过认证请求
        };
    }

    componentDidMount() {
        let token = localStorage.getItem('token');
        let auth = new Promise(resolve => {
            fetchJson('/mobile/owner/tokenLogin', {token: token}, doc => {
                resolve(doc);
            });
        });
        auth.then((result) => {
            if (result.ownerInfo) {
                this.setState({auth: true, hasAuthed: true});
            } else {
                this.setState({auth: false, hasAuthed: true});
            }
        });
    }

    render(){
        // 初始渲染时，尚未向服务器发送认证请求，因此不渲染元素
        if (!this.state.hasAuthed) {
            return null;
        }
        authFlag = this.state.auth;
        return(
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    {/*<Route path="/account" render={() => {*/}
                        {/*return this.state.auth ? <Account/> :*/}
                            {/*<Redirect to={{pathname: '/sign', state: {from: '/account'}}}/>*/}
                    {/*}}/>*/}
                    <PrivateRoute path="/product" component={Product}/>
                    <PrivateRoute path="/account" component={Account}/>
                    <PrivateRoute path="/profile" component={Profile}/>
                    <Route path="/sign" component={Sign}/>
                    <Route path="/download" component={Download}/>
                </Switch>
            </Router>
        )
    }
}
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            authFlag ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/sign",
                            state: { from: props.location }
                        }}
                    />
                )
        }
    />
);


const root = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Root/>
    </Provider>,root
);

