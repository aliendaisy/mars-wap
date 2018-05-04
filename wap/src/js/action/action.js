import {fetchJson} from "../component/functional/common";

export const SELECT_DATE = (date) => ({
    type: 'SELECT_DATE',
    date: date
});

const requestPosts = () => ({
    type: 'PENDING'
});

// const selectDate =
//     (dispatch) => new Promise(function (resolve, reject) {
//         dispatch(requestPosts());
//         return fetchJson('/user/getEventList', {date: new Date(), event_type: 'Food'}, res => (
//             {
//                 type: 'SELECT_DATE',
//                 data: res
//             }
//         ));
//     });
export const selectDate = () => (dispatch,getDate) => {
    dispatch(requestPosts());
    return fetchJson(`/user/getEventList`, {date: new Date(), event_type: 'Food'}, res => {
        dispatch({
            type: 'SELECT_DATE',
            date: getDate
        });
    });
};
// getEventList
