import * as types from './../constants/actionType';
var initialState = false;
var myReducer = (state = initialState, action) => {
    if (action.type === types.toggle_status) {
        state = !state;
    }
    return state;
}
export default myReducer;