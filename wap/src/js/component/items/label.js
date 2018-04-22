import React,{Component} from 'react';

class Label extends Component{
    render() {
        return(
            <div className={this.props.className}>
                <p>{this.props.leftText}</p>
                <span className="iconfont icon-right"></span>
            </div>
        )
    }
}

export default Label;