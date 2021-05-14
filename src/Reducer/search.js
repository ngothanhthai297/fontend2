import * as types from './../Constants/ActionType';
var initialState = "";//close form

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH:
            return action.keyword;
        default: return state;
    }
};

export default myReducer;