import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import TopBar from '../items/topBar';

import {AuthCheck} from "../../action/action";
import {commonPath} from '../../reducer/reducer';


class Profile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,  //是否显示顶部save的标识
            son: false,  //是否显示编辑内容的标识
            tokenUse: true,
            infoType: 'name',
            name: 'M',
            signature: 'Something about me'
        }
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
    editName() {
        this.setState({
            isShow: true,
            son: true,
            infoType: 'name'
        });
    }
    editSignature() {
        this.setState({
            isShow: true,
            son: true,
            infoType: 'signature'
        });
    }
    saveInfo() {

    }
    render() {
        return(
            <div className="profile">
                <TopBar
                    isShow={this.state.isShow}
                    onClick={this.saveInfo.bind(this)}
                />
                <div className={this.state.son ? "label-box none" : "label-box"}>
                    <div className="label-fat">
                        <p>Profile photo</p>
                        <img src={this.state.avatar} alt="" className="img-box"/>
                    </div>
                    <div className="label-thin" onClick={this.editName.bind(this)}>
                        <p>Name</p>
                        <p>{this.state.name}</p>
                    </div>
                    <div className="label-thin" onClick={this.editSignature.bind(this)}>
                        <p>Signature</p>
                        <p className="signature">{this.state.signature}</p>
                    </div>
                </div>

                <EditInfo
                    sonShow={!this.state.son}
                    info={this.state.infoType === 'name' ? this.state.name : this.state.signature}
                    brief={this.state.infoType === 'name' ? "Change your name" : "Write something about me"}
                />
            </div>
        )
    }
}

class EditInfo extends Component{
    render() {
        return(
            <div className={this.props.sonShow ? "edit-info none" : "edit-info"}>
                <div className="input-box">
                    <input type="text" placeholder={this.props.info}/>
                </div>
                <p>{this.props.brief}</p>
            </div>
        )
    }
}

const mapStateToProps = (state,props) => {
    console.log(state)
    return state;
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        AuthCheck
    },dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
