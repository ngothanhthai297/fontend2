import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../Action/index';
class Sort extends Component {

    onClick = (sortBy, sortValue) => {

        this.props.onSort({
            by: sortBy,
            value: sortValue
        });
    }
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={() => this.onClick('name', 1)}>
                            <a role="button" >
                                <span className="fa fa-sort-alpha-asc pr-5" className={this.props.sort.by === "name" && this.props.sort.value === 1 ? 'hightlingt' : ''} >
                                    Tên A-Z
                                        </span>
                            </a>
                        </li>
                        <li onClick={() => this.onClick('name', -1)}>
                            <a role="button" >
                                <span className="fa fa-sort-alpha-desc pr-5" className={this.props.sort.by === "name" && this.props.sort.value === -1 ? 'hightlingt' : ''}>
                                    Tên Z-A
                                        </span>
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li onClick={() => this.onClick('status', 1)}><a role="button" ><span className={this.props.sort.by === "status" && this.props.sort.value === 1 ? 'hightlingt' : ''}>Trạng Thái Kích Hoạt</span></a></li>
                        <li onClick={() => this.onClick('status', -1)}><a role="button" ><span className={this.props.sort.by === "status" && this.props.sort.value === -1 ? 'hightlingt' : ''}>Trạng Thái Ẩn</span></a></li>
                    </ul>
                </div>
            </div >
        );
    }

}

const mapStateToProps = (state) => {
    return {
        sort: state.sort
    }
};
const mapDispathToProps = (dispath, props) => {
    return {
        onSort: (sort) => {
            dispath(actions.sortTask(sort));
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Sort);
