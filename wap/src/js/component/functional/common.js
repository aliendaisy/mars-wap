import 'whatwg-fetch';

import {Toast} from "antd-mobile";
import 'antd-mobile/lib/toast/style/css.js'; //获取样式

const email = localStorage.getItem('email');

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
            console.log('success')
            return cb(json.data);
        }else{
            console.log('fail')
            Toast.info(json.message, 1.5);
            return cb(json.message);
        }
    }).catch(err => {
        Toast.info(err, 1.5);
    });
}

//注册
export function signUp(email, pwd) {
    return new Promise(resolve => {
        fetchJson('/mobile/owner/register', {email: email, password: pwd, zipCode: 123}, doc => {
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
export function getEventDetail(event_id, commodity_id) {
    return new Promise(resolve => {
        fetchJson('/v1/user/getEventDetail', {email: email, event_id: event_id, commodity_id: commodity_id}, doc => {
            resolve(doc);
        });
    });
}

//点赞事件
export function thumbUp(commodity_id) {
    return new Promise(resolve => {
        fetchJson('/v1/user/thumbUp', {email: email, commodity_id: commodity_id}, doc => {
            resolve(doc);
        });
    });
}

//加入事件
export function joinEvent(event_id, commodity_id) {
    return new Promise(resolve => {
        fetchJson('/v1/user/jionEvent', {email: email, event_id: event_id, commodity_id: commodity_id}, doc => {
            resolve(doc);
        });
    });
}

//获取购物车列表
export function queryCart() {
    return new Promise(resolve => {
        fetchJson('/v1/user/queryCart', {email: email}, doc => {
            resolve(doc);
        });
    });
}

//修改昵称
export function updateName(name) {
    return new Promise(resolve => {
        fetchJson('/v1/user/update', {email: email, user_name: name}, doc => {
            resolve(doc);
        });
    });
}

//修改签名
export function updateSignature(signature) {
    return new Promise(resolve => {
        fetchJson('/v1/user/update', {email: email, signature: signature}, doc => {
            resolve(doc);
        });
    });
}