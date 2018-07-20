import React,{Component} from 'react'
import PropTypes from "prop-types";

export default class Item extends Component {

    static propTypes = {
        user: PropTypes.object.isRequired,
        deleteUser: PropTypes.func.isRequired,
        toUpdate: PropTypes.func.isRequired
    }

    constructor(props){
        super(props);
        this.deleteUser = this.deleteUser.bind(this);
        this.toInsert = this.toInsert.bind(this);
        this.toUpdate = this.toUpdate.bind(this);
    }
    //去修改操作
    toUpdate(){
        const {toUpdate} = this.props;
        const id = this.props.user.id;
        toUpdate(2,id);
    }
    //去新增操作
    toInsert(){
        const {toUpdate} = this.props;
        const id = this.props.user.id;
        toUpdate(1,id);
    }
    //删除用户操作
    deleteUser(){
        const id = this.props.user.id;
        const {deleteUser} = this.props;
        deleteUser(id);
    }
    render(){
        const user = this.props.user;
        const index = this.props.index;
        return(
                <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.sex}</td>
                    <td>{user.iphone}</td>
                    <td>{user.address}</td>
                    <td>{user.email}</td>
                    <td><button onClick={this.toInsert}>新增</button> <button onClick={this.toUpdate}>修改</button> <button onClick={this.deleteUser}>删除</button></td>
                </tr>
         )
    }
}

