import 'whatwg-fetch';

//fetch通信  POST通信
export function fetchJson(url,params,cb){
    let myHeaders = new Headers({"Content-Type": "application/json"});
    let headerUrl = "http://www.marstail.com:20000/v1";
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
        if(json.result === "success") {
            return cb(json.data);
        }else{
            return cb(json.msg);
        }
    }).catch(err => {
        console.log(err);
    });
}

// export function getEventList(date,event) {
//     return async(result) => {
//         await Promise.resolve(
//             fetchJson('/user/getEventList', {date: date, event_type: event}, doc => {
//                 result = doc;
//             })
//         );
//     }
//     fetchJson('/user/getEventList', {date: date, event_type: event}, doc => {
//         result = doc;
//     });
// }

function getEventList(date, event) {
    return new Promise(resolve => {
        // setTimeout(function() {
        //     r = 2;
        //     resolve(r);
        // }, 10);
        fetchJson('/user/getEventList', {date: date, event_type: event}, doc => {
            resolve(doc);
        })
    });
}

export async function compute(date,event) {
    let x = await getEventList(date,event);
    console.log(x);
}
