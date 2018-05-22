import moment from 'moment';
export const commonPath = "http://www.marstail.com:20000";

const defaultSignature = 'Something about me.';
const defaultAvatar = 'Something about me.';

const Reducer = (state={}, action) => {
    let goods = state.goodsList ? state.goodsList : JSON.parse(localStorage.getItem('goodsList'));
    let user = state.user ? state.user : JSON.parse(localStorage.getItem('user'));
    let output = {};
    let outputGoods = {};
    let outputDetail = {};
    switch (action.type) {
        //加载动画
        case "LOADING":
            return {...state, loading: true};
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
                output = {
                    user_name: action.payload.value.ownerInfo.user_name,
                    signature: action.payload.value.ownerInfo.signature,
                    avatar: `${commonPath}${action.payload.value.ownerInfo.header}`
                };
                localStorage.setItem('user', JSON.stringify(output));
                localStorage.setItem('token', token); //index.js校验登录用

                return {...state, user: output};
            }
            break;
        //注册
        case "SIGN_UP":
            if(action.payload.value.ownerInfo) {
                let tokenInit = action.payload.value.ownerInfo.token;

                output = {
                    user_name: action.payload.value.ownerInfo.user_name,
                    signature: defaultSignature,
                    avatar: defaultAvatar
                };

                localStorage.setItem('user', JSON.stringify(output));
                localStorage.setItem('token', tokenInit);

                return {...state, user: output};
            }
            break;
        //登录验证 todo(authcheck 没有用到)
        case "AUTH_CHECK":
            if(action.payload.value.ownerInfo) {

                let token = action.payload.value.ownerInfo.token;
                output = {
                    user_name: action.payload.value.ownerInfo.user_name,
                    signature: action.payload.value.ownerInfo.signature,
                    avatar: `${commonPath}${action.payload.value.ownerInfo.header}`
                };

                localStorage.setItem('user', JSON.stringify(output));

                return {...state, user: output};
            }
            break;
        //获取事件详情信息
        case "GET_EVENT_DETAIL":

            output = {...state.detail};
            output.provider = action.payload.value.name;
            output.provider_avatar = `${commonPath}${action.payload.value.header}`;
            output.describe = action.payload.value.commodity.description;
            output.join_list = action.payload.value.join_list;
            console.log(output.join_list)

            localStorage.setItem('detail', JSON.stringify(output));
            return {...state, detail: output};

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
        //加入事件
        case "JOIN_EVENT":
            outputGoods = {...goods};
            for(let i in goods) {
                if(goods[i].commodity_id === action.payload.value.commodity_id) {
                    //在接口请求resolve之后才会进reducer处理action，因此可以写为true
                    outputGoods[i].join_in = true;
                }
            }

            outputDetail = {...JSON.parse(localStorage.getItem('detail'))};
            outputDetail.join_in = true;

            localStorage.setItem('goodsList', JSON.stringify(outputGoods));
            localStorage.setItem('detail', JSON.stringify(outputDetail));

            return {...state, detail: outputDetail};
        //更新个人信息
        case "UPDATE_INFO":

            output = {...user};
            if(action.payload.value.user_name) {
                output.user_name = action.payload.value.user_name;
            }
            if(action.payload.value.signature) {
                output.signature = action.payload.value.signature;
            }

            localStorage.setItem('user', JSON.stringify(output));

            return {...state, user: output};
        case "QUERY_CART_LIST":

            delete state.loading;
            console.log(action.payload.value)
            if(action.payload.value.list) {
                output = action.payload.value.list;
            }

            return {...state, cartList: output}


    }
    return state;
};

export default Reducer;