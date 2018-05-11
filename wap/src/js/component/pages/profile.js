import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import TopBar from '../items/topBar';

import {updateName, updateSignature} from "../functional/common";
import {AuthCheck, UpdateInfo} from "../../action/action";
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
        var fetch;
        //修改昵称
        if(this.state.infoType === 'name') {
            fetch = updateName(this.state.name);
            this.props.UpdateInfo(fetch).then(() => {
                cb();
            });
        }
        //修改签名
        else{
            fetch = updateSignature(this.state.signature);
            this.props.UpdateInfo(fetch).then(() => {
                cb();
            });
        }

        //todo(更新接口信息)
        let cb = () => {
            this.setState({
                isShow: false,
                son: false
            });
        }
    }
    //获取子元素input的value值
    getValue(e) {
        console.log(e)

        // if(this.state.infoType === 'name') {
        //     this.setState({name: e});
        // }else{
        //     this.setState({signature: e});
        // }
    }
    goBack() {
        if(this.state.son) {
            this.setState({
                isShow: false,
                son: false
            });
        }else{
            this.context.router.history.goBack();
        }
    }
    render() {
        return(
            <div className="profile">
                <TopBar
                    goBack={this.goBack.bind(this)}
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
                    getValue={this.getValue.bind(this)}
                />
            </div>
        )
    }
}

class EditInfo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.info
        }
    }
    handleChange(e) {
        this.setState({value: e.target.value});
        this.props.getValue(e.target.value);
    }
    render() {
        console.log(this.props.info)
        return(
            <div className={this.props.sonShow ? "edit-info none" : "edit-info"}>
                <div className="input-box">
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange.bind(this)}
                    />
                </div>
                <p>{this.props.brief}</p>
            </div>
        )
    }
}

Profile.contextTypes = {
    router: PropTypes.object
};

const mapStateToProps = (state,props) => {
    console.log(state)
    return state;
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        AuthCheck, UpdateInfo
    },dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
