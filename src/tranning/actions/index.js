import * as types from './../constants/actionType';
export const status = () => {
    return {
        type: types.toggle_status
    }
}
export const sort = (sort) => {
    return {
        type: types.sort,
        sort
    }
}