import status from './status';
import sort from './sort';
import { combineReducers } from 'redux';

const myReducer = combineReducers({//lien ket 2 Reducer nho lai 
    status,//status : status
    sort//sort : sort
})

export default myReducer;