import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import TopBar from '../items/topBar';

import {updateName, updateSignature} from "../functional/common";
import {AuthCheck, UpdateInfo} from "../../action/action";

import {Toast} from "antd-mobile";
import 'antd-mobile/lib/toast/style/css.js'; //获取样式

class Profile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,  //是否显示顶部save的标识
            son: false,  //是否显示编辑内容的标识
            tokenUse: true,
            infoType: 'name',
            name: '',
            signature: ''
        }
    }
    componentDidMount() {
        //初始化input里的值
        this.setState({
            name: this.user.user_name,
            signature: this.user.signature
        });
    }

    //显示编辑info部分
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

    //修改info
    changeName(e) {
        this.setState({name: e.target.value});
    }
    changeSignature(e) {
        this.setState({signature: e.target.value});
    }

    //保存
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

        let cb = () => {
            this.setState({
                isShow: false,
                son: false
            });
            Toast.info('Saved success!', 2);
        }
    }
    //返回
    goBack() {
        console.log(this.user)
        if(this.state.son) {
            this.setState({
                //返回时 初始化info编辑部分的值
                name: this.user.user_name,
                signature: this.user.signature,
                isShow: false,
                son: false
            });
        }else{
            this.context.router.history.goBack();
        }
    }
    render() {
        this.user = this.props.user ? this.props.user : JSON.parse(localStorage.getItem('user'));
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
                        <img src={this.user.avatar} alt="" className="img-box"/>
                    </div>
                    <div className="label-thin" onClick={this.editName.bind(this)}>
                        <p>Name</p>
                        <p>{this.user.user_name}</p>
                    </div>
                    <div className="label-thin" onClick={this.editSignature.bind(this)}>
                        <p>Signature</p>
                        <p className="signature">{this.user.signature}</p>
                    </div>
                </div>

                {/*显示修改昵称/签名*/}
                {(() => {
                    if(this.state.infoType === 'name') {
                        return(
                            <div className={!this.state.son ? "edit-info none" : "edit-info"}>
                                <div className="input-box">
                                    <input
                                        type="text"
                                        value={this.state.name}
                                        onChange={this.changeName.bind(this)}
                                    />
                                </div>
                                <p>{"Change your name"}</p>
                            </div>
                        )
                    }else{
                        return(
                            <div className={!this.state.son ? "edit-info none" : "edit-info"}>
                                <div className="input-box">
                                    <input
                                        type="text"
                                        value={this.state.signature}
                                        onChange={this.changeSignature.bind(this)}
                                    />
                                </div>
                                <p>{"Write something about me"}</p>
                            </div>
                        )
                    }
                })()}
            </div>
        )
    }
}


Profile.contextTypes = {
    router: PropTypes.object
};

const mapStateToProps = (state,props) => {
    return state;
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        AuthCheck, UpdateInfo
    },dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
