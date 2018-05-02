/**
 * Created by Administrator on 2018/5/2.
 */
import { createStore } from 'redux'
import Reducer from '../reducer/reducer';

const store = createStore(Reducer);

export default store;