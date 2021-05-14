import { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../Action/index";
class TaskItem extends Component {
    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }
    onDelete = () => {
        this.props.onDeleteItem(this.props.task.id);
        this.props.onCloseForm();
    }
    onUpdate = () => {
        this.props.onOpenForm();
        this.props.onEditItem(this.props.task);
    }
    render() {
        var { task, index } = this.props;
        return (
            <tr>
                <td>{index}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span className={task.status === true ? "label label-success cuscursor-pointer" : "label label-danger cuscursor-pointer"} onClick={this.onUpdateStatus}>
                        {task.status === true ? "Kích Hoạt" : "An"}
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={this.onUpdate}>
                        <span className="fa fa-pencil mr-5"></span>Sửa
                </button>
                &nbsp;
                <button type="button" className="btn btn-danger" onClick={this.onDelete}>
                        <span className="fa fa-trash mr-5" ></span>Xóa
                </button>
                </td>
            </tr>
        );
    }

}
const mapStateToProps = (state) => {
    return {

    }
};
const mapDispathToProps = (dispath, props) => {
    return {
        onUpdateStatus: (id) => {
            dispath(actions.updateStatus(id));
        },
        onDeleteItem: (id) => {
            dispath(actions.deleteItem(id));
        },
        onCloseForm: () => {
            dispath(actions.closeForm());
        },
        onOpenForm: () => {
            dispath(actions.openForm());
        },
        onEditItem: (task) => {
            dispath(actions.editItem(task));
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(TaskItem);
