import React,{Component} from 'react'
import Item from "./item";
import PropTypes from "prop-types";
import Query from "./query"

export default class List extends Component {

    static propTypes = {
        users: PropTypes.array.isRequired,
        deleteUser: PropTypes.func.isRequired,
        toUpdate: PropTypes.func.isRequired,
        toSearch: PropTypes.func.isRequired
    }
    render(){
        const users = this.props.users;
        return(
            <div style={{marginTop : 30}}>
                <hr className='zt-hr'/>
                <Query toSearch={this.props.toSearch}/>
                <table className="table table-striped" style={{width:'80%' ,marginLeft:'10%'}}>
                    <caption>用户信息列表</caption>
                    <thead>
                    <tr>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>性别</th>
                        <th>手机号码</th>
                        <th>地址</th>
                        <th>邮箱</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user,index) =>{
                            return(
                                <Item user={user} index={index} key={index} deleteUser={this.props.deleteUser} toUpdate={this.props.toUpdate}/>
                                )
                         })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

