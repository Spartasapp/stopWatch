import {createStore, combineReducers,applyMiddleware} from 'redux';
import CounterReducer from './counterReducer';
import thunkMiddleware from 'redux-thunk';

let reducer = combineReducers({
    counter: CounterReducer
});
let store = createStore(reducer,applyMiddleware(thunkMiddleware));

export default store;