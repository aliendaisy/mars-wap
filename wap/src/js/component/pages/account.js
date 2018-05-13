import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import Label from '../items/label';
import TopBar from '../items/topBar';

import {AuthCheck} from "../../action/action";

class Account extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tokenUse: true, //token是否无用的标识
        }
    }

    componentWillMount() {
        document.body.style.background = '#f4f4f4';
    }

    goBack() {
        this.context.router.history.goBack();
    }
    render() {
        let user = this.props.user ? this.props.user : JSON.parse(localStorage.getItem('user'));

        return(
            <div className="account">
                <TopBar goBack={this.goBack.bind(this)}/>

                <Link to="/profile">
                    <div className="label-fat">
                        <img src={user.avatar} alt="" className="img-box"/>
                        <div className="info">
                            <p>{user.user_name}</p>
                            <p>{user.signature}</p>
                        </div>
                    </div>
                </Link>

                <div className="label-box">
                    <Link to="/download">
                        <Label className="label-thin" leftText={"Notifications"}/>
                    </Link>
                    <Link to="/download">
                        <Label className="label-thin" leftText={"My Circle"}/>
                    </Link>
                </div>
                <div className="label-box">
                    <Link to="/download">
                        <Label className="label-thin" leftText={"Contacts"}/>
                    </Link>
                </div>
                <div className="label-box">
                    <Link to="/aboutUs">
                        <Label className="label-thin" leftText={"About Us"}/>
                    </Link>
                    <Link to="/partner">
                        <Label className="label-thin" leftText={"Partnership Program"}/>
                    </Link>
                    <Label className="label-thin" leftText={"Contact Us"}/>
                    <Label className="label-thin" leftText={"Term of Use"}/>
                    <Link to="/privacy">
                        <Label className="label-thin" leftText={"Privacy Policy"}/>
                    </Link>
                </div>
            </div>
        )
    }
}

Account.contextTypes = {
    router: PropTypes.object
};

const mapStateToProps = (state,props) => {
    return state;
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        AuthCheck
    },dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Account);