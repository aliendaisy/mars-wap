/**
 * Created by Administrator on 2018/4/13.
 */
import React,{Component} from 'react';

class Header extends Component{
    render() {
        return(
            <div className="header">
                <p className="logo">Marstail</p>
                <div>
                    <p className="download">Download or Open in App</p>
                    <span className="iconfont icon-user"></span>
                </div>
            </div>
        )
    }
}

export default Header;