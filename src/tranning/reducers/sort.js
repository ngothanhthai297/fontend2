import * as types from './../constants/actionType';
var initialState = {
    by: 'name',
    value: 1
}

var myReducer = (state = initialState, action) => {

    if (action.type === types.sort) {

        //gan lai het tat ca cac state

        // state.sort = {
        //     by: action.sort.by,
        //     value: action.sort.value
        // }

        //thuc hien hanh dong roi moi gan lai state

        var { by, value } = action.sort;
        return {
            //cach 1
            // sort: {//state moi
            //     by: by,
            //     value: value
            // }
            //cach 2
            by, value
        }
    }
    return state;
}
export default myReducer;