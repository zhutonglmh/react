import React,{Component} from 'react'
import PropTypes from "prop-types";

export default class Add extends Component {

    //声明接收属性
    static propTypes = {
        save: PropTypes.func.isRequired,
        status: PropTypes.number.isRequired,
        cancelSave: PropTypes.func.isRequired
    }
    //构造方法
    constructor(props){
        super(props);
        this.state = {
               name: '',
               age: '',
               sex:'',
               iphone: '',
               address: '',
               email: ''
        }
        this.saveUser = this.saveUser.bind(this);
        this.addressChange = this.addressChange.bind(this);
        this.iphoneChange = this.iphoneChange.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.ageChange = this.ageChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.cancelSave = this.cancelSave.bind(this);
        this.toUpdate = this.toUpdate.bind(this);
    }

    //输入姓名触发
    //a.受控组件: 表单项输入数据能自动收集成状态(推荐使用  更加符合react思想)
    //b.非受控组件: 需要时才手动读取表单输入框中的数据
    nameChange = (event) => {
        const name = event.target.value.trim();
        this.setState({name});
    }
    ageChange = (event) => {
        const age = event.target.value.trim();
        this.setState({age});
    }
    iphoneChange = (event) => {
        const iphone = event.target.value.trim();
        this.setState({iphone});
    }
    addressChange = (event) => {
        const address = event.target.value.trim();
        this.setState({address});
    }
    emailChange = (event) => {
        const email = event.target.value.trim();
        this.setState({email});
    }
    sexChange = (event) => {
        const sex = event.target.value.trim();
        this.setState({sex});
    }

    //查看
    toUpdate = (id) => {

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
                     user = data;
                    _this.setState({user});
                });
            }
        ).catch(function(err){
            console.log("Fetch错误:"+err);
        });
    }
    saveUser = (event) => {
        const {save} = this.props;
        const name = this.state.name;
        const age = this.state.age;
        const address = this.state.address;
        const sex = this.state.sex;
        const iphone = this.state.iphone;
        const email = this.state.email;
        const user = {
            name: name,
            age: age,
            address: address,
            sex: sex,
            iphone: iphone,
            email:email
        }
        save(user);
        //阻止表单默认提交
        event.preventDefault();
        this.setState({
            name: '',
            age: '',
            sex:'',
            iphone: '',
            address: '',
            email: '',
        });
    }
    cancelSave = (event) => {
       const cancelSave = this.props;
        cancelSave();
    }
    render(){
        const status = this.props.status;
        let className = 'hideMoudle';
        // 1 新增状态  2 修改状态  3 列表状态
        if(status === 1){
            className = 'showMoudle';
        }
        return(
            <div id='add' className={className}>
                <hr className='zt-hr'/>
                <div className='add-user'>新增用户信息</div>
                <form className="form-horizontal" >
                    <div className="form-group">
                        <label className="col-sm-2 control-label">名字</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="firstname" placeholder="请输入名字" value={this.state.name} onChange={this.nameChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label  className="col-sm-2 control-label">年龄</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="lastname" placeholder="请输入年龄" value={this.state.age} onChange={this.ageChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">手机号码</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="firstname" placeholder="请输入手机号码" value={this.state.iphone} onChange={this.iphoneChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">地址</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="firstname" placeholder="请输入地址" value={this.state.address} onChange={this.addressChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">邮箱</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="firstname" placeholder="请输入邮箱" value={this.state.email} onChange={this.emailChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">性别</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="firstname" placeholder="请输入性别" value={this.state.sex} onChange={this.sexChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-8">
                            <button className="btn btn-info" onClick={this.saveUser}>保存</button>
                            {'    '}
                            <button className="btn btn-info" onClick={this.cancelSave}>取消</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

