/**
 * Created by Administrator on 2018/4/13.
 */
import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
    render() {
        return(
            <div className="header">
                <p className="logo">Marstail</p>
                <div>
                    <Link to="/download">
                        <p className="download">Download or Open in App</p>
                    </Link>
                    <Link to="/account">
                        <span className="iconfont icon-user"></span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Header;