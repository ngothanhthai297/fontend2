import * as types from './../Constants/ActionType';

var data = JSON.parse(localStorage.getItem('task'));
var initialState = data ? data : [];
var s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};
var findIndex = (tasks, id) => {
    var result = -1;
    tasks.forEach((task, index) => {
        if (task.id === id) {
            result = index;
        }
    });
    return result;
};
var generyId = () => {
    return s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4();
};
var myReducer = (state = initialState, action) => {
    var index = -1;

    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.SAVE_TASK:
            var task = {
                id: action.task.id,
                name: action.task.name,
                status: action.task.status
            }
            if (task.id === "") {
                task.id = generyId();
                state.push(task);
            } else {
                index = findIndex(state, task.id);
                state[index] = task;
            }
            localStorage.setItem('task', JSON.stringify(state));
            return [...state];
        case types.UPDATE_STATUS:
            //var index = this.findIndex(id);
            index = findIndex(state, action.id);
            if (index !== -1) {
                state[index] = {
                    ...state[index],//copy 1 phần tử
                    status: !state[index].status
                }
                localStorage.setItem('task', JSON.stringify(state));
            }
            return [...state];
        case types.DELETE_ITEM:
            var id = action.id;
            index = findIndex(state, id);
            state.splice(index, 1);
            localStorage.setItem('task', JSON.stringify(state));
            return [...state];
        default: return state;
    }
};

export default myReducer;