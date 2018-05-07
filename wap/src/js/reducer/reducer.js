import moment from 'moment';

const Reducer = (state={},action) => {
    switch (action.type) {
        case "LOADING":
            return {...state,loading: true};
        case "SELECT_DATE_TYPE":
            delete state.loading;
            return {...state, goodsList: action.payload.value};
        case "AUTH_CHECK":
            console.log(action.payload.value)
            return {...state.user, token: action.payload.value}
    }
    return state;
};

export default Reducer;