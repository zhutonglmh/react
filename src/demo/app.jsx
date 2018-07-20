import React,{Component} from 'react'
import List from './list'
import Add from './add'
import Update from "./upd";


export default class App extends Component {

    //构造方法
    constructor(props){
        super(props);
        this.state = {
            status:0, // 1 新增状态  2 修改状态  3 列表状态
            users : [],
            user:{
                id:'',
                name: '',
                age: '',
                sex:'',
                iphone: '',
                address: '',
                email: '',
            }
        }
        //自定义方法必须绑定this
        this.save = this.save.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.toUpdate = this.toUpdate.bind(this);
        this.cancelSave = this.cancelSave.bind(this);
        this.toSearch = this.toSearch.bind(this);
    }

    //组件挂载完成时触发 请求后台用户数据
    componentDidMount(){

        let users = [];
        const user = {};
        const url = 'http://localhost:8082/study/demo/findData';
        var _this = this;

        //使用fetch 发送请求
        fetch(url,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(user),
            dataType: "application/json",
        }).then(
            function(response){
                if(response.status!==200){
                    console.log("存在一个问题，状态码为："+response.status);
                    return;
                }
                //检查响应文本
                response.json().then(function(data){
                    users = data;
                    _this.setState({users})
                });
            }
        ).catch(function(err){
            console.log("Fetch错误:"+err);
        });
    }

    //搜索用户
    toSearch = (name) => {

        let user = {
            name : name
        };
        let users = [];
        const url = 'http://localhost:8082/study/demo/findData';
        const _this = this;
        fetch(url,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(user),
            dataType: "application/json",
        }).then(
            function(response){
                if(response.status!==200){
                    console.log("存在一个问题，状态码为："+response.status);
                    return;
                }
                //检查响应文本
                response.json().then(function(data){
                    users = data;
                    const status = 0;
                    _this.setState({users,status});
                });
            }
        ).catch(function(err){
            console.log("Fetch错误:"+err);
        });
    }
    //取消保存  取消修改操作
    cancelSave = () => {
        const status = 0;
        this.setState({status});
    }
    //查看  弹出修改用户界面
    toUpdate = (status,id) =>{

        if (status !== 2 ){
          this.setState({status});
          return;
        }
        let user = {
            id : id
        };
        const url = 'http://localhost:8082/study/demo/findData';
        const _this = this;
        fetch(url,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(user),
            dataType: "application/json",
        }).then(
            function(response){
                if(response.status!==200){
                    console.log("存在一个问题，状态码为："+response.status);
                    return;
                }
                //检查响应文本
                response.json().then(function(data){
                    user = data[0];
                    _this.setState({user,status});
                });
            }
        ).catch(function(err){
            console.log("Fetch错误:"+err);
        });
    }
    //删除用户操作
    deleteUser = (id) => {

        let user = {
            id : id
        };
        const url = 'http://localhost:8082/study/demo/deleteUser';
        var _this = this;
        fetch(url,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(user),
            dataType: "application/json",
        }).then(
            function(response){
                if(response.status!==200){
                    console.log("存在一个问题，状态码为："+response.status);
                    return;
                }
                //检查响应文本
                response.json().then(function(data){
                   alert("删除成功！");

                   //删除成功重新查询用户数据
                    let users = [];
                    user = {};
                    const url = 'http://localhost:8082/study/demo/findData';
                    fetch(url,{
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body:JSON.stringify(user),
                        dataType: "application/json",
                    }).then(
                        function(response){
                            if(response.status!==200){
                                console.log("存在一个问题，状态码为："+response.status);
                                return;
                            }
                            //检查响应文本
                            response.json().then(function(data){
                                users = data;
                                const status = 0;
                                _this.setState({users,status})
                            });
                        }
                    ).catch(function(err){
                        console.log("Fetch错误:"+err);
                    });
                });
            }
        ).catch(function(err){
            console.log("Fetch错误:"+err);
        });
    }
    //修改用户信息
    update = (user) =>{
        var _this = this;
        const url = 'http://localhost:8082/study/demo/updateUser';
        fetch(url,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(user),
            dataType: "application/json",
        }).then(
            function(response){
                if(response.status!==200){
                    console.log("存在一个问题，状态码为："+response.status);
                    return;
                }
                //检查响应文本
                response.json().then(function(data){
                    if(data > 0){
                        alert("修改成功！");
                        let users = [];
                        const user = {};
                        const url = 'http://localhost:8082/study/demo/findData';
                        //修改完成之后重新调查询接口
                        fetch(url,{
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body:JSON.stringify(user),
                            dataType: "application/json",
                        }).then(
                            function(response){
                                if(response.status!==200){
                                    console.log("存在一个问题，状态码为："+response.status);
                                    return;
                                }
                                //检查响应文本
                                response.json().then(function(data){
                                    users = data;
                                    const status = 0;
                                    _this.setState({status,users})
                                });
                            }
                        ).catch(function(err){
                            console.log("Fetch错误:"+err);
                        });
                    }else {
                        alert("修改失败！");
                    }
                });
            }
        ).catch(function(err){
            console.log("Fetch错误:"+err);
        });
    }
    //保存用户信息操作
    save = (user) =>{
        var _this = this;
        const url = 'http://localhost:8082/study/demo/addUser';
        fetch(url,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(user),
            dataType: "application/json",
        }).then(
            function(response){
                if(response.status!==200){
                    console.log("存在一个问题，状态码为："+response.status);
                    return;
                }
                //检查响应文本
                response.json().then(function(data){
                alert("添加成功！");
                    let users = [];
                    const user = {};
                    const url = 'http://localhost:8082/study/demo/findData';
                    //添加成功调用查询接口
                    fetch(url,{
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body:JSON.stringify(user),
                        dataType: "application/json",
                    }).then(
                        function(response){
                            if(response.status!==200){
                                console.log("存在一个问题，状态码为："+response.status);
                                return;
                            }
                            //检查响应文本
                            response.json().then(function(data){
                                users = data;
                                const status = 0;
                                _this.setState({users,status});
                            });
                        }
                    ).catch(function(err){
                        console.log("Fetch错误:"+err);
                    });
                });
            }
        ).catch(function(err){
            console.log("Fetch错误:"+err);
        });
    }
    //渲染界面操作
    render(){
        return(
            <div>
                <h2 className='zt-title'>React 简单练习Demo</h2>
                {/*添加组件*/}
                <Add  save={this.save} status={this.state.status} cancelSave={this.cancelSave}/>
                {/*修改组件*/}
                <Update save={this.update} status={this.state.status} user={this.state.user} cancelSave={this.cancelSave}/>
                {/*列表用户信息组件*/}
                <List users={this.state.users} deleteUser={this.deleteUser} toUpdate={this.toUpdate} toSearch={this.toSearch}/>
            </div>
        )
    }
}

