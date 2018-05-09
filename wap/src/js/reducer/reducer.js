import moment from 'moment';
export const commonPath = "http://www.marstail.com:20000";

const Reducer = (state={},action) => {
    switch (action.type) {
        //加载动画
        case "LOADING":
            return {...state,loading: true};
        //选择日期与事件
        case "SELECT_DATE_TYPE":
            delete state.loading;
            return {...state, goodsList: action.payload.value};
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

        case "THUMB_UP":


        case "SHOW_DETAIL":

            delete(action.detail.goodsList);
            delete(action.detail.isProduct);

            let json = JSON.stringify(action.detail);
            localStorage.setItem('detail', json);

            return {...state, goods: json};
    }
    return state;
};

export default Reducer;