import React, {Component} from 'react';

class Loading extends Component{
    render() {
        return(
            <div style={this.props.style}>
                <img
                    className="fetchLoading"
                    src={require("../../../images/loading.gif")}
                    alt=""
                />
            </div>
        )
    }
}

export default Loading;