import * as types from './../Constants/ActionType';

var initialState = {
    by: 'name',
    value: 1
};//close form

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SORT:
            return {
                by: action.sort.by,
                value: action.sort.value
            };

        default: return state;
    }
};

export default myReducer;