import moment from 'moment';
export const commonPath = "http://www.marstail.com:20000";


const Reducer = (state={},action) => {
    let goods = state.goodsList ? state.goodsList : JSON.parse(localStorage.getItem('goodsList'));
    let output = {};
    let outputGoods = {};
    let outputDetail = {};
    switch (action.type) {
        //加载动画
        case "LOADING":
            return {...state,loading: true};
        //选择日期与事件
        case "SELECT_DATE_TYPE":
            delete state.loading;
            let goodsList = [];
            action.payload.value.map((res) => {
                let needs = {
                    address: res.address,
                    name: res.context.name,
                    price: res.context.price,
                    thumb_up_num: res.context.thumb_up_num,
                    imgUrl: `${commonPath}${res.context.url}`,
                    time: `${res.start_time}-${res.end_time}`,
                    event_id: res.event_id,
                    commodity_id: res.context.commodity_id,
                    thumb_up: res.context.thumb_up,
                    join_in: res.context.jion_in
                };
                goodsList.push(needs);
            });
            //改变状态时本地存储一份，store保存一份
            localStorage.setItem('goodsList', JSON.stringify(goodsList));
            return {...state, goodsList: goodsList};
        //登录
        case "LOGIN":
            if(action.payload.value.ownerInfo) {
                let token = action.payload.value.ownerInfo.token;
                localStorage.setItem('token', token);
                return {...state, user: action.payload.value.ownerInfo};
            }else{
                return {...state, errMsg: action.payload.value};
            }
        //注册 todo
        case "SIGN_UP":

            return {...state};
        //登录验证
        case "AUTH_CHECK":

            return {...state, user: action.payload.value.ownerInfo};
        case "GET_EVENT_DETAIL":

            output = {...state.detail};
            output.provider = action.payload.value.name;
            output.provider_avatar = `${commonPath}${action.payload.value.header}`;
            output.describe = action.payload.value.commodity.description;

            localStorage.setItem('detail', JSON.stringify(output));
            return {...state, detail: output}

        //跳转详情页
        case "SHOW_DETAIL":

            output = {...state.detail};

            goods.map((res) => {
                if(res.event_id === action.ei && res.commodity_id === action.ci) {
                    output = res;
                }
            });

            localStorage.setItem('detail', JSON.stringify(output));
            return {...state, detail: output};
        //点赞 todo(这里逻辑还是需要优化)
        case "THUMB_UP":
            //更新goodsList中点赞值
            outputGoods = {...goods};
            for(let i in goods) {
                if(goods[i].commodity_id === action.payload.value._id) {
                    outputGoods[i].thumb_up_num = action.payload.value.thumb_up_num;
                }
            }

            //更新detail中的点赞值
            outputDetail = {...JSON.parse(localStorage.getItem('detail'))};
            outputDetail.thumb_up_num = action.payload.value.thumb_up_num;


            localStorage.setItem('goodsList', JSON.stringify(outputGoods));
            localStorage.setItem('detail', JSON.stringify(outputDetail));

            return {...state, detail: outputDetail};
    }
    return state;
};

export default Reducer;