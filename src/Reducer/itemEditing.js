import * as types from './../Constants/ActionType';
var initialState = {
    id: '',
    name: '',
    status: false
};//close form

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_ITEM:
            return action.task;

        default: return state;
    }
};

export default myReducer;