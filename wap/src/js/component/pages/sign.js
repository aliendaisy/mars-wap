import React,{Component} from 'react';

class Sign extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isSignUp: false
        }
    }
    componentDidMount() {
        document.body.style.background = '#fff';
    }
    render() {
        return(
            <div className="sign">
                <img src="" alt="" className="rounded"/>

                <div className="commit-area">
                    <input type="text" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <div className="commit-btn">Sign in</div>
                    <div className={this.state.isSignUp ? 'commit-btn none' : 'commit-btn'}>New Account</div>
                    <p className={this.state.isSignUp ? 'service none' : 'service'}>Terms of Service <span>&</span> Privacy Policy</p>
                </div>
            </div>
        )
    }
}

export default Sign;