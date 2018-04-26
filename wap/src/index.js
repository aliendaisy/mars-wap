import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
// import { BrowserRouter, HashRouter, Switch, Route, Redirect} from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory';

// 按路由拆分代码
import Loadable from 'react-loadable';
import {Provider} from 'react-redux'

import './css/iconfont.css';
import './css/index.css';
import Home from './js/component/pages/home';
import Product from './js/component/pages/product';
import Account from './js/component/pages/account';
import Profile from './js/component/pages/profile';
import Sign from './js/component/pages/sign';
import Download from './js/component/pages/download';




// const history = createBrowserHistory();
//
// const loadingComponent = ({isLoading, error}) => {
//     // Handle the loading state
//     if(isLoading) {
//         return <div>Loading...</div>
//     }
//     // Handle thi error state
//     else if(error) {
//         return <div>Sorry,three was a problem loading the page.</div>
//     }
//     else {
//         return null;
//     }
// };
//
// const Home = Loadable({
//     loader: () => import('./js/component/pages/home'),
//     loading: loadingComponent
// });
//
// const Product = Loadable({
//         loader: () => import('./js/component/pages/product'),
//     loading: loadingComponent
// });
//
// const Sign = Loadable({
//     loader: () => import('./js/component/pages/sign'),
//     loading: loadingComponent
// });
//
// const Account = Loadable({
//         loader: () => import('./js/component/pages/account'),
//     loading: loadingComponent
// });
//
// const Profile = Loadable({
//         loader: () => import('./js/component/pages/profile'),
//     loading: loadingComponent
// });
//
// const Download = Loadable({
//         loader: () => import('./js/component/pages/download'),
//     loading: loadingComponent
// });
// class Roots extends Component{
//     render() {
//         return(
//             <div>{this.props.children}</div>
//         )
//     }
// }
//
// //登录验证
// function requireAuth(Layout ,props) {
//     if(true) {
//         return <Redirect to="/sign"/>
//     } else {
//         return <Layout {...props}/>
//     }
// }
//
// let Router = process.env.NODE_ENV !== 'production' ? BrowserRouter : HashRouter;
//
// const RouteConfig = (
//     <Router history={history}>
//         <Switch>
//             <Route path="/" exact component={props => requireAuth(Home, props)}/>
//             <Route path="/product" component={Product}/>
//             <Route path="/account" component={Account}/>
//             <Route path="/profile" component={Profile}/>
//             <Route path="/sign" component={Sign}/>
//             <Route path="/download" component={Download}/>
//             <Redirect from="" to=""/>
//         </Switch>
//     </Router>
// );
//
// export default RouteConfig;

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

