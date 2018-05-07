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

export const authCheck = (fetchPost) => async(dispatch, getState) => {
    let value = await Promise.resolve(fetchPost);

    await dispatch({
        type: 'AUTH_CHECK',
        payload: {
            value
        }
    })
};