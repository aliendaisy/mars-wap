import 'whatwg-fetch';

//fetch通信  POST通信
export function fetchJson(url,params,cb){
    let myHeaders = new Headers({"Content-Type": "application/json"});
    let headerUrl = 'http://www.marstail.com:20000/v1';
    let allUrl = headerUrl + url;
    fetch(allUrl,{
        method: 'post',
        headers: myHeaders,
        mode: 'cors',
        // credentials: 'include',
        body: JSON.stringify({params})
    }).then(res => {
        res.json().then(function(data){
            return cb(data);
        });
    }).catch(err => {
        console.log(err);
    });
}