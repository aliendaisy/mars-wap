import React,{Component} from 'react';


class NumChange extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        }
    }
    minus() {
        if(this.refs.num.value == 1) {
            return;
        }
        this.setState({
            value: this.state.value - 1
        });
    }
    plus() {
        this.setState({
            value: this.state.value + 1
        });
    }
    render() {
        this.props.handleChange(this.state.value);
        return(
            <div className="numChange">
                <span className="iconfont icon-minus" onClick={this.minus.bind(this)}/>
                <input
                    type="number"
                    ref="num"
                    value={this.state.value}
                    disabled
                    readOnly
                />
                <span className="iconfont icon-plus" onClick={this.plus.bind(this)}/>
            </div>
        )
    }
}

export default NumChange;