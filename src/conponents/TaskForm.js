import { Component } from "react";
import { connect } from 'react-redux';
import * as actions from './../Action/index'
class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false
        }
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === 'status') {
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name]: value
        });
    }
    onSaveTask = (event) => {
        event.preventDefault();
        if (this.state.name !== "") {
            this.props.onSaveTask(this.state);
        }

        this.closeForm();
        this.onClear();
    }
    closeForm = () => {
        this.props.onCloseForm();
    }
    onClear = () => {
        this.setState({
            name: '',
            status: false
        });
    }

    // componentWillMount() {
    //     if (this.props.task) {
    //         this.setState({
    //             id: this.props.task.id,
    //             name: this.props.task.name,
    //             status: this.props.task.status,
    //         })
    //     } else {
    //         this.onClear();
    //     }
    // }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            this.setState({
                id: nextProps.itemEditing.id,
                name: nextProps.itemEditing.name,
                status: nextProps.itemEditing.status
            });
        }
        if (nextProps && nextProps.itemEditing === null) {
            this.setState({
                id: '',
                name: '',
                status: false
            })
        }
    }
    render() {
        if (!this.props.isDisplayForm) return null;
        var { id } = this.state;
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">{id === '' ? "Th??m C??ng Vi???c" : "S???a C??ng Vi???c"}
                        <span className="fa fa-times-circle text-right" onClick={this.closeForm}></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSaveTask}>
                        <div className="form-group">
                            <label>T??n :</label>
                            <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChange} placeholder="Nh???p t??? kh??a..." />
                        </div>
                        <label>Tr???ng Th??i :</label>
                        <select className="form-control" required="required" name="status" value={this.state.status} onChange={this.onChange}>
                            <option value={true}>K??ch Ho???t</option>
                            <option value={false}>???n</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">L??u</button>&nbsp;
                            <button type="submit" className="btn btn-danger" onClick={this.onClear}>H???y B???</button>
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}
const mapStateToPropts = (state) => {
    return {
        isDisplayForm: state.isDisplayForm,
        itemEditing: state.itemEditing
    }
}
const mapDispathToProps = (dispath, props) => {
    return {
        onSaveTask: (task) => {
            dispath(actions.saveTask(task));
        },
        onCloseForm: () => {
            dispath(actions.closeForm());
        }
    }
}
//connect(,ham xu ly action)
export default connect(mapStateToPropts, mapDispathToProps)(TaskForm);
