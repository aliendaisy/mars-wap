import {fetchJson} from "../component/functional/common";


export const selectDateType = (fetchPost) => async(dispatch, getState) => {
    let value = await Promise.resolve(fetchPost);

    dispatch({
        type: 'SELECT_DATE_TYPE',
        payload: {
            value
        }
    });
};