/**
 * Created by Administrator on 2018/4/13.
 */
import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }
    toDownload() {
        this.setState({redirect: true});
    }
    render() {
        if(this.state.redirect) {
            return <Redirect push to="/download"/>
        }
        return(
            <div className="header">
                <p className="logo">Marstail</p>
                <div>
                    <p
                        className="download"
                        onClick={this.toDownload.bind(this)}
                    >Download or Open in App</p>
                    <span className="iconfont icon-user"></span>
                </div>
            </div>
        )
    }
}

export default Header;