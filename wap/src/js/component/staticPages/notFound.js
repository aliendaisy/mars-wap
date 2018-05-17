import React,{Component} from 'react';

class NotFound extends Component{
    componentWillMount() {
        document.body.style.background = '#fff';
    }
    render() {
        return(
            <div>
                <img src={require("../../../images/404.png")} alt="" className="notFound"/>
            </div>
        )
    }
}

export default NotFound;