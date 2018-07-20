import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Item extends Component {

    static propTypes={
        index: PropTypes.number.isRequired ,
        deleteComments : PropTypes.func.isRequired
    }
    constructor(props){
        super(props);
        this.deleteComments = this.deleteComments.bind(this);
    }
    deleteComments = (event) =>{
        const {deleteComments,index} = this.props;
        if(window.confirm("确认删除")){
           deleteComments(index);
        }
    }
    render() {
        let {comments} = this.props;
        debugger
        return (

            <ul className="list-group">

                {
                    comments.map((comment,index) => {
                        const deleteComments = this.props.deleteComments;
                        this.props = {
                            index : index,
                            deleteComments : deleteComments
                        };
                        return (
                        <li className="list-group-item" key={index}  >
                            <div className="handle">
                                <a  onClick={this.deleteComments}>删除</a>
                            </div>
                            <p className="user"><span>{comment.username}</span><span>说:</span></p>
                            <p className="centence">{comment.content}</p>
                        </li>
                        )
                        }
                    )
                }
            </ul>
        )
    }
}

