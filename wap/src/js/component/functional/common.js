import 'whatwg-fetch';

//fetch通信  POST通信
export function fetchJson(url,params,cb){
    let myHeaders = new Headers({"Content-Type": "application/json"});
    let headerUrl = "http://www.marstail.com:20000";
    let allUrl = headerUrl + url;
    fetch(allUrl,{
        method: 'post',
        headers: myHeaders,
        mode: 'cors',
        //credentials: 'include',
        body: JSON.stringify(params)
    }).then(res => {
        console.log('params: ', params);
        return res.json();
    }).then((json) =>{
        if(json.result === "success" || json.message === "success") {
            return cb(json.data);
        }else{
            return cb(json.msg);
        }
    }).catch(err => {
        console.log(err);
    });
}

//获取事件类型
export function getEventType() {
    return new Promise(resolve => {
        fetchJson('/v1/user/getEventType',{}, doc => {
            resolve(doc);
        });
    })
}

//获取事件列表
export function getEventList(date, event) {
    return new Promise(resolve => {
        fetchJson('/v1/user/getEventList', {date: date, event_type: event}, doc => {
            resolve(doc);
        });
    });
}


//登录
export function login(email, pwd) {
    return new Promise(resolve => {
        fetchJson('/mobile/owner/login', {email: email, password: pwd}, doc => {
            resolve(doc);
        })
    })
}

