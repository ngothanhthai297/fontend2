import { createStore } from 'redux';
import { status, sort } from './actions/index';
import myReducer from './reducers/index';
const store = createStore(myReducer);
//console.log(store.getState());
//thuc hien event
store.dispatch(status());
//console.log(store.getState());
//thuc hien cong vien sap xep sort name tu Z-A
store.dispatch(sort({
    by: 'name',
    value: -1
}));
//console.log(store.getState());

