import {tokenLogin} from '../component/functional/common';

//请求获取事件列表接口
export const selectDateType = ({isRefresh = false,fetchPost}) => async(dispatch, getState) => {
    if(!isRefresh) {
        await dispatch({
            type: 'LOADING'
        });
    }
    let value = await Promise.resolve(fetchPost);
    await dispatch({
        type: 'SELECT_DATE_TYPE',
        payload: {
            value
        }
    });
};

//注册接口
export const SignUp = (fetchPost) => async(dispatch, getState) => {
    let value = await Promise.resolve(fetchPost);

    await dispatch({
        type: 'SIGN_UP',
        payload: {
            value
        }
    });
};

//登录接口
export const Login = (fetchPost) => async(dispatch, getState) => {
    let value = await Promise.resolve(fetchPost);

    await dispatch({
        type: 'LOGIN',
        payload: {
            value
        }
    });
};

//Token登录接口
export const AuthCheck = () => async(dispatch, getState) => {
    let value = await Promise.resolve(tokenLogin());

    await dispatch({
        type: 'AUTH_CHECK',
        payload: {
            value
        }
    });
};

//获取事件详情
export const GetEventDetail = (fetchJson) => async(dispatch, getState) => {
    let value = await Promise.resolve(fetchJson);

    await dispatch({
        type: 'GET_EVENT_DETAIL',
        payload: {
            value
        }
    });
};

//点赞事件
export const ThumbUp = (fetchJson) => async(dispatch, getState) => {
    let value = await Promise.resolve(fetchJson);

    await dispatch({
        type: 'THUMB_UP',
        payload: {
            value
        }
    });
};

//加入事件
export const JoinEvent = (fetchJson) => async(dispatch, getState) => {
    let value = await Promise.resolve(fetchJson);

    await dispatch({
        type: 'JOIN_EVENT',
        payload: {
            value
        }
    });
};

//获取购物车列表(todo(useless))
export const QueryCartList = (fetchJson) => async(dispatch, getState) => {
    await dispatch({
        type: 'LOADING'
    });
    let value = await Promise.resolve(fetchJson);

    await dispatch({
        type: 'QUERY_CART_LIST',
        payload: {
            value
        }
    });
};

//修改昵称、签名
export const UpdateInfo = (fetchJson) => async(dispatch, getState) => {
    let value = await Promise.resolve(fetchJson);

    await dispatch({
        type: 'UPDATE_INFO',
        payload: {
            value
        }
    });
};

//显示详情页(同步action）
export const ShowDetail = (ei,ci) => ({
    type: 'SHOW_DETAIL',
    ei: ei,
    ci: ci
});

