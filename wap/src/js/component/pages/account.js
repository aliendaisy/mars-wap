import React,{Component} from 'react';
import Label from '../items/label';
import TopBar from '../items/topBar';

class Account extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: 'Alien',
            describe: 'Something about me'
        }
    }
    render() {
        return(
            <div className="account">
                <TopBar/>
                <div className="label-fat">
                    <img src={this.state.avatar} alt="" className="img-box"/>
                    <div className="info">
                        <p>{this.state.name}</p>
                        <p>{this.state.describe}</p>
                    </div>
                </div>

                <div className="label-box">
                    <Label
                        className="label-thin"
                        leftText={"Notifications"}
                    />
                    <Label
                        className="label-thin"
                        leftText={"My Circle"}
                    />
                </div>
                <div className="label-box">
                    <Label
                        className="label-thin"
                        leftText={"Contacts"}
                    />
                </div>
                <div className="label-box">
                    <Label
                        className="label-thin"
                        leftText={"About Us"}
                    />
                    <Label
                        className="label-thin"
                        leftText={"Partnership Program"}
                    />
                    <Label
                        className="label-thin"
                        leftText={"Contact Us"}
                    />
                    <Label
                        className="label-thin"
                        leftText={"Term of Use"}
                    />
                    <Label
                        className="label-thin"
                        leftText={"Privacy Policy"}
                    />
                </div>
            </div>
        )
    }
}

export default Account;