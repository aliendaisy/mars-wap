import React, {Component} from 'react';

class Loading extends Component{
    render() {
        return(
            <div style={{
                width: '100%',
                height: '5.44rem',
                position: 'relative'
            }}>
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