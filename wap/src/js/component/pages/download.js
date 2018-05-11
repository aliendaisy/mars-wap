import React,{Component} from 'react';

class Download extends Component{
    componentWillMount() {
        document.body.style.background = '#fff';
    }
    //下载app或打开app
    handleClick() {
        let applink = (success,fail) => {
            let clickedAt = +new Date;
            // During tests on 3g/3gs this timeout fires immediately if less than 500ms.
            window.location.href = success;
            setTimeout(function(){
                // To avoid failing on return to MobileSafari, ensure freshness!
                if(+new Date - clickedAt < 3000) {
                    window.location.href = fail;
                }else{
                    window.close();
                }
            }, 500);
        };
        var appstore,appUrl;
        let ua = navigator.userAgent;
        //安卓
        // if(ua.match(/android/i)){
        //     if(ua.toLowerCase().indexOf("micromessenger") > -1) {
        //         appstore = '';
        //     }else{
        //         appstore = '';
        //     }
        //     appUrl = "";
        // }
        if(ua.match(/(iphone|ipod|ipad);?/i)){
            appstore = "https://itunes.apple.com/cn/app/Marstail/id1383629643?mt=8";
            appUrl = "Marstail://";
        }
        applink(appUrl,appstore);
    }
    render() {
        return(
            <div className="load">
                <div>
                    <h3>Marstail</h3>
                    <p>Stay connected in your community!</p>

                    <div className="btn" onClick={this.handleClick.bind(this)}>Download the App</div>
                    <img src={require('../../../images/loading.gif')} alt="" className="loading"/>
                </div>
            </div>
        )
    }
}

export default Download;