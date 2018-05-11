import React,{Component} from 'react';

class TopBar extends Component{
    render() {
        return(
            <div className="topBar">
                <p className="caption">Marstail</p>
                <div>
                    <span className="iconfont icon-left" onClick={this.props.goBack}></span>
                    <p className={this.props.isShow ? "show" : "hide"} onClick={this.props.onClick}>Save</p>
                </div>
            </div>
        )
    }
}

export default TopBar;