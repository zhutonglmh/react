import React,{Component} from 'react'
import PropTypes from "prop-types";

export default class Update extends Component {

    static propTypes = {
        save: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired,
        status: PropTypes.number.isRequired,
        cancelSave: PropTypes.func.isRequired
    }
    constructor(props){
        super(props);
        this.saveUser = this.saveUser.bind(this);
        this.state = this.props.user;
        this.addressChange = this.addressChange.bind(this);
        this.iphoneChange = this.iphoneChange.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.ageChange = this.ageChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.cancelSave = this.cancelSave.bind(this);
    }
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
    saveUser = (event) => {
        const {save} = this.props;
        let id = this.state.id;
        let name = this.state.name;
        let age = this.state.age;
        let address = this.state.address;
        let sex = this.state.sex;
        let iphone = this.state.iphone;
        let email = this.state.email;
        debugger
        if(name === ''){
            name = this.props.user.name;
        }
        if(id === '' || id=== null || id === undefined){
            id = this.props.user.id;
        }
        if(age === ''){
            age = this.props.user.age;
        }
        if(iphone === ''){
            iphone = this.props.user.iphone;
        }
        if(address === ''){
            address = this.props.user.address;
        }
        if(email === ''){
            email = this.props.user.email;
        }
        if(sex === ''){
            sex = this.props.user.sex;
        }
        const user = {
            id:id,
            name: name,
            age: age,
            sex: sex,
            address: address,
            iphone: iphone,
            email:email
        }
        save(user);
        //阻止默认提交
        event.preventDefault();
    }
    cancelSave = (event) => {
       const cancelSave = this.props;
        cancelSave();
    }
    render(){
        let {id,name,age,iphone,address,email,sex} = this.state;
        if(id === ''){
            id = this.props.user.id;
        }
        if(name === ''){
            name = this.props.user.name;
        }
        if(age === ''){
            age = this.props.user.age;
        }
        if(iphone === ''){
            iphone = this.props.user.iphone;
        }
        if(address === ''){
            address = this.props.user.address;
        }
        if(email === ''){
            email = this.props.user.email;
        }
        if(sex === ''){
            sex = this.props.user.sex;
        }
        const status = this.props.status;
        let className = 'hideMoudle';
        if(status === 2){
            className='showMouudle';
        }
        return(
            <div id='upd' className={className}>
                <hr className='zt-hr'/>
                <form className="form-horizontal">
                    <div className="form-group">
                        <label className="col-sm-2 control-label">名字</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="firstname" placeholder="请输入名字" value={name} onChange={this.nameChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label  className="col-sm-2 control-label">年龄</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="lastname" placeholder="请输入年龄" value={age} onChange={this.ageChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">手机号码</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="firstname" placeholder="请输入手机号码" value={iphone} onChange={this.iphoneChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">地址</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="firstname" placeholder="请输入地址" value={address} onChange={this.addressChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">邮箱</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="firstname" placeholder="请输入邮箱" value={email} onChange={this.emailChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">性别</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="firstname" placeholder="请输入性别" value={sex} onChange={this.sexChange}/>
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

