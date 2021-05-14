
import './App.css';
import { Component } from 'react';
import TaskForm from './conponents/TaskForm';
import Control from './conponents/Control';
import TaskList from './conponents/TaskList';

import { connect } from 'react-redux';
import * as actions from './Action/index';
class App extends Component {
  toggleWork = () => {
    var { itemEditing } = this.props;
    if (itemEditing && itemEditing.id !== '') {
      this.props.onOpenForm();
      this.props.onClearTask({
        id: '',
        name: '',
        status: false
      });
    } else {
      this.props.onToggleForm();
    }
    this.props.onClearTask({
      id: '',
      name: '',
      status: false
    });
  }

  onSort = (sortBy, sortValue) => {
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue
    });
  }
  render() {

    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className={this.props.isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
            <TaskForm />
          </div>
          <div className={this.props.isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <button type="button" className="btn btn-primary" onClick={this.toggleWork}>
              <span className="fa fa-plus mr-5"></span>Thêm Công Việc
            </button>
            <Control />
            <TaskList />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
    itemEditing: state.itemEditing
  }
};
const mapDispathToProps = (dispath, props) => {
  return {
    onClearTask: (task) => {
      dispath(actions.editItem(task));
    },
    onToggleForm: () => {
      dispath(actions.toggleForm());
    },
    onOpenForm: () => {
      dispath(actions.openForm());
    }
  }
}
export default connect(mapStateToProps, mapDispathToProps)(App);
