import React,{Component} from 'react'
import PropTypes from "prop-types";

export default class Query extends Component {

    static propTypes = {
        toSearch: PropTypes.func.isRequired
    }
    constructor(props){
        super(props);
        this.state = {
            name:''
        }
        this.toSearch = this.toSearch.bind(this);
    }
    search = (event) => {
        const name = event.target.value.trim();

        this.setState({name});
    }
    toSearch = (event) =>{
        const name = this.state.name;
        const {toSearch} = this.props;
        toSearch(name);
        event.preventDefault();
    }

    render(){
        return(
            <div className="container" >
                <div className="input-group my-search" >
                    <input type="text" className="form-control input-lg" value={this.state.name} onChange={this.search}/><span className="input-group-addon btn btn-primary" style={{width: '100px'}} onClick={this.toSearch}>搜索</span>
                </div>
            </div>
        )
    }
}

