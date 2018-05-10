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

//注册接口 todo
export const Signup = (fetchPost) => async(dispatch, getState) => {
    let value = await Promise.resolve(fetchPost);

    await dispatch({
        type: 'SIGN_UP',
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


//显示详情页(同步action）
export const ShowDetail = (ei,ci) => ({
    type: 'SHOW_DETAIL',
    ei: ei,
    ci: ci
});

