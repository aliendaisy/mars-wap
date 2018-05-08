import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Label from '../items/label';
import TopBar from '../items/topBar';

import {AuthCheck} from "../../action/action";

import {commonPath} from '../../reducer/reducer';

class Account extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tokenUse: true, //token是否无用的标识
            name: 'M',
            describe: 'Something about me'
        }
    }

    componentWillMount() {
        document.body.style.background = '#f4f4f4';
    }

    componentDidMount() {
        //登录验证
        if(!this.props.user) {
            this.props.AuthCheck().then(() => {
                this.setState({
                    avatar: `${commonPath}${this.props.user.header}`,
                    name: this.props.user.user_name
                });
            });
        }else{
            this.setState({
                avatar: `${commonPath}${this.props.user.header}`,
                name: this.props.user.user_name
            });
        }
    }
    render() {
        return(
            <div className="account">
                <TopBar/>
                <Link to="/profile">
                    <div className="label-fat">
                        <img src={this.state.avatar} alt="" className="img-box"/>
                        <div className="info">
                            <p>{this.state.name}</p>
                            <p>{this.state.describe}</p>
                        </div>
                    </div>
                </Link>

                <div className="label-box">
                    <Link to="/download">
                        <Label
                            className="label-thin"
                            leftText={"Notifications"}
                        />
                    </Link>
                    <Link to="/download">
                        <Label
                            className="label-thin"
                            leftText={"My Circle"}
                        />
                    </Link>
                </div>
                <div className="label-box">
                    <Link to="/download">
                        <Label
                            className="label-thin"
                            leftText={"Contacts"}
                        />
                    </Link>
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

const mapStateToProps = (state,props) => {
    return state;
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        AuthCheck
    },dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Account);