/**
 * Created by Administrator on 2018/5/2.
 */
import { createStore,applyMiddleware } from 'redux';
import Reducer from '../reducer/reducer';
import thunk from 'redux-thunk';

const store = createStore(Reducer,applyMiddleware(thunk));

export default store;