import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../Action/index'
class Seach extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        };
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }
    onSeach = () => {
        this.props.onSearch(this.state.keyword);
    }
    render() {
        var { keyword } = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" >
                <div className="input-group">
                    <input type="text" className="form-control" name="keyword" placeholder="Nhập từ khóa..." value={keyword} onChange={this.onChange} />
                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="submit" onClick={this.onSeach}>
                            <span className="fa fa-search mr-5"></span>Tìm
                            </button>
                    </span>
                </div>
            </div >
        );
    }

}
const mapStateToPropts = (state) => {
    return {
    };
}
const mapDispathToProps = (dispath, props) => {
    return {
        onSearch: (keyword) => {
            dispath(actions.searchTask(keyword));
        }
    }
}
//connect(,ham xu ly action)
export default connect(mapStateToPropts, mapDispathToProps)(Seach);