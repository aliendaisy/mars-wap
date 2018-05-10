import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Toast} from "antd-mobile";
import 'antd-mobile/lib/toast/style/css.js'; //获取样式

import {Login,Signup} from "../../action/action";
import {login} from "../functional/common";


class Sign extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isSignUp: false
        }
    }
    componentWillMount() {
        document.body.style.background = '#fff';
    }
    componentDidMount() {

    }
    email() {
        let reg = /^(\w+)(\.\w+)*@(\w+)(\.\w+)*.(\w+)$/i;
    }
    pwd() {
        console.log('pwd',this.refs.pwd.value)
    }
    signin() {
        if(this.refs.email.value && this.refs.pwd.value) {

            let fetch = login(this.refs.email.value, this.refs.pwd.value);
            //dispatch action 进入reducer处理登录事件
            this.props.Login(fetch).then(() => {
                //resolve之后返回
                if(this.props.user) {
                    localStorage.setItem('email', this.refs.email.value);
                    window.location.href = '/'; //登录后强制刷新返回主页
                }else{
                    Toast.info(this.props.errMsg, 1.5);
                }
            });

        }else{
            Toast.info('Please enter your information.', 1.5)
        }
    }
    render() {
        return(
            <div className="sign">
                <img src="" alt="" className="rounded"/>

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
                    <div className={this.state.isSignUp ? 'commit-btn none' : 'commit-btn'}>New Account</div>
                    <p className={this.state.isSignUp ? 'service none' : 'service'}>Terms of Service <span>&</span> Privacy Policy</p>
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
        Login,Signup
    },dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Sign);