import React,{Component} from 'react';

class Download extends Component{
    componentWillMount() {
        document.body.style.background = '#fff';
    }
    render() {
        return(
            <div className="load">
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