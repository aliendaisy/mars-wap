import moment from 'moment';
const goodsDefault = {
    date: moment(new Date()).format('dddd').substring(0,3)
};

const Reducer = (state={goods: goodsDefault,user: {}},action) => {
    switch (action.type) {
        case "PENDING":
            console.log("i'm pending...");
            break;
        case "SELECT_DATE":
            let date = action.date;
            return {...state.goods,date: date};
    }
};

export default Reducer;