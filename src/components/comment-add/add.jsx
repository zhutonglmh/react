import React,{Component} from 'react'
import PropTypes from 'prop-types'

export default class Add extends Component {

    constructor(props){
        super(props);
        this.state = {
            content:''
        }
        this.submit = this.submit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
    }

    //受控组件
    handleNameChange(event){
       let username = event.target.value;
        this.setState({username});
    }
    handleContentChange(event) {
        let content = event.target.value;
        this.setState({content});
    }
    submit(){

        debugger
        const name = this.state.username;
        const content = this.state.content;
        const comment = {
            username : name,
            content : content
        }
        this.props.add(comment);

    }
    render(){
        debugger

        console.log(this.state);
        const username = this.state.username;
        const content = this.state.content;
        debugger
        return(

            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text"  className="form-control"  value={username} onChange={this.handleNameChange}/>
                    </div>
                    <div className="form-group">
                        <label >评论内容</label>
                        <textarea   className="form-control" rows="6" value={content} onChange={this.handleContentChange}></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.submit}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
Add.propTypes = {
    add: PropTypes.func.isRequired
}

