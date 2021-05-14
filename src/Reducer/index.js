import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import itemEditing from './itemEditing';
import filterTable from './filterTable';
import search from './search';
import sort from './sort';
const myReducer = combineReducers({//lien ket 2 Reducer 
    tasks,//tasks : tasks trỏ tới file Reducers/tasks.js để lấy dữ liệu từ initialState(state)
    isDisplayForm,
    itemEditing,
    filterTable,
    search,
    sort
})

export default myReducer;