import React,{Component} from 'react';

class Sign extends Component{
    render() {
        return(
            <div className="sign">
                <img src="" alt="" className="rounded"/>

                <div className="commit-area">
                    <input type="text" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <div className="commit-btn">Sign in</div>
                    <div className="commit-btn">New Account</div>
                    <p className="service">Terms of Service <span>&</span> Privacy Policy</p>
                </div>
            </div>
        )
    }
}

export default Sign;