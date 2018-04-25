import React,{Component} from 'react';

class Download extends Component{
    render() {
        return(
            <div className="download">
                <div>
                    <h3>Marstail</h3>
                    <p>Stay connected in your community!</p>

                    <div className="btn">Download the App</div>
                    <img src={require('../../../images/loading.gif')} alt="" className="loading"/>
                </div>
            </div>
        )
    }
}

export default Download;