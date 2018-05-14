import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Toast} from "antd-mobile";
import 'antd-mobile/lib/toast/style/css.js'; //获取样式

import {login,signUp} from "../functional/common";

import {Login,SignUp} from "../../action/action";

class Sign extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isSignUp: false
        };
        this.emailReg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;

    }
    componentWillMount() {
        document.body.style.background = '#fff';
    }
    componentDidMount() {

    }
    email() {

    }
    pwd() {
        console.log('pwd',this.refs.pwd.value)
    }
    //登录
    signin() {
        let email = this.refs.email.value;
        let pwd = this.refs.pwd.value;
        if(email && pwd ) {
            if(this.emailReg.test(email)) {
                let fetch = login(email, pwd);
                //dispatch action 进入reducer处理登录事件
                this.props.Login(fetch).then(() => {
                    //resolve之后返回
                    if(this.props.user) {
                        localStorage.setItem('email', email);
                        window.location.href = '/'; //登录后强制刷新返回主页
                    }
                });
            }else{
                Toast.info('Please enter the right email address!', 1.5);
            }
        }else{
            Toast.info('Please enter your information.', 1.5);
        }
    }
    //注册
    signUp() {
        let email = this.refs.email.value;
        let pwd = this.refs.pwd.value;
        if(email && pwd) {
            if(this.emailReg.test(email)) {
                let fetch = signUp(email, pwd);
                this.props.SignUp(fetch).then(() => {
                    console.log('11111')
                    // this.signin();
                });
            }else{
                Toast.info('Please enter the right email address!', 1.5);
            }
        }else{
            Toast.info('Please enter your information.', 1.5);
        }
    }
    render() {
        // let token = localStorage.getItem('token');
        let token = null;
        return(
            <div className="sign">
                <p className="rounded">M</p>

                <div className="commit-area">
                    <input
                        type="text"
                        placeholder="Email"
                        ref={"email"}
                        onChange={this.email.bind(this)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        ref={"pwd"}
                        maxLength="16"
                        onChange={this.pwd.bind(this)}
                    />
                    <div
                        className="commit-btn"
                        onClick={this.signin.bind(this)}
                    >Sign in</div>
                    <div
                        className={token ? 'commit-btn none' : 'commit-btn'}
                        onClick={this.signUp.bind(this)}
                    >New Account</div>
                    <p className={token ? 'service none' : 'service'}>
                        <Link to="/term">
                            <span>Terms of Service</span>
                        </Link>
                        <span> & </span>
                        <Link to="/privacy">
                            <span>Privacy Policy</span>
                        </Link>
                    </p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state,props) => {
    return state;
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        Login,SignUp
    },dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Sign);