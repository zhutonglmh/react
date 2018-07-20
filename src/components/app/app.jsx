import React,{Component} from 'react'
import Add from '../comment-add/add'
import List from '../commend-list/list'

export default class App extends Component {

   constructor(props){
       super(props);
       this.state = {
           comments:[
               {
                   username:'Tom',
                   content:'React 挺好的！'
               },
               {
                   username:'Jack',
                   content:'React 一点都不好玩！'
               },
               {
                   username:'Mick',
                   content:'React 哈哈哈哈哈！'
               }
           ]
       }
       this.add = this.add.bind(this);
       this.deleteComments = this.deleteComments.bind(this);
   }

   add(comment){

       const comments = this.state.comments;
       comments.unshift(comment);
       this.setState({comments});
   }
    deleteComments = (index) => {
       const {comments} = this.state;

       //增删改 三个操作都可以交给splice来做
       comments.splice(index,1);//index 要操作数组的角标 1 删除几个 0 新增一个
       this.setState({comments});
   }
    render(){

       const comments = this.state.comments;
        return(
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <Add add={this.add}/>
                    <List comments={comments} deleteComments={this.deleteComments}/>
                </div>
            </div>
        )
    }
}

