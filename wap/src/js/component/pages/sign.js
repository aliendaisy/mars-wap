import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {authCheck} from "../../action/action";
import {login} from "../functional/common";



class Sign extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pwd: '',
            isSignUp: false
        }
    }
    componentWillMount() {
        document.body.style.background = '#fff';
    }
    componentDidMount() {
    }
    email() {
        console.log('email',this.refs.email.value)
    }
    pwd() {
        console.log('pwd',this.refs.pwd.value)
    }
    signin() {
        if(this.refs.email.value && this.refs.pwd.value) {
            let fetch = login(this.refs.email.value, this.refs.pwd.value);
            console.log(fetch)
            this.props.authCheck(fetch);
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
        authCheck
    },dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Sign);