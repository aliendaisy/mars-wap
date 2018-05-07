import moment from 'moment';

const Reducer = (state={},action) => {
    switch (action.type) {
        case "LOADING":
            return {...state,loading: true};
        case "SELECT_DATE_TYPE":
            delete state.loading;
            return {...state, goodsList: action.payload.value};
    }
    return state;
};

export default Reducer;