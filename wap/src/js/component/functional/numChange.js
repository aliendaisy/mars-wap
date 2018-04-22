import React,{Component} from 'react';


class NumChange extends Component{
    minus() {
        if(this.refs.num.value == 1) {
            return;
        }
        this.refs.num.value = parseInt(this.refs.num.value) - 1;
        this.props.handleChange(this.refs.num.value);
    }
    plus() {
        this.refs.num.value = parseInt(this.refs.num.value) + 1;
        this.props.handleChange(this.refs.num.value);
    }
    render() {
        return(
            <div className="numChange">
                <span className="iconfont icon-minus" onClick={this.minus.bind(this)}/>
                <input
                    type="number"
                    ref="num"
                    value={1}
                    disabled
                    readOnly
                />
                <span className="iconfont icon-plus" onClick={this.plus.bind(this)}/>
            </div>
        )
    }
}

export default NumChange;