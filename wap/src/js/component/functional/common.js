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
        return res.json();
    }).then((json) =>{
        if(json.result === "success" || json.message === "success") {
            return cb(json.data);
        }else{
            return cb(json.message);
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
export function getEventList(week,event,weekIndex,eventIndex) {
    let year = new Date().getFullYear();
    let month = parseInt(week[weekIndex].date.split('.')[0]) - 1;
    let day = parseInt(week[weekIndex].date.split('.')[1]);

    let date = new Date(year,month,day);
    let event_type = event[eventIndex].title; //事件类型

    return new Promise(resolve => {
        fetchJson('/v1/user/getEventList', {date: date, event_type: event_type}, doc => {
            resolve(doc);
        });
    });
}

//获取事件详情
export function getEventDetail(email, event_id, commodity_id) {
    return new Promise(resolve => {
        fetchJson('/v1/user/getEventDetail', {email: email, event_id: event_id, commodity_id: commodity_id}, doc => {
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
    });
}

//token登录
export function tokenLogin() {
    let token = localStorage.getItem('token');
    if(token && token !== undefined && token !== null) {
        return new Promise(resolve => {
            fetchJson('/mobile/owner/tokenLogin', {token: token}, doc => {
                resolve(doc);
            })
        });
    }
}

