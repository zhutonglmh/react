import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Item from '../comment-item/item'
import './index.css'

export default class List extends Component {

    static propTypes = {
        comments: PropTypes.array.isRequired,
        deleteComments: PropTypes.func.isRequired
    }
    render(){

        let comments = this.props.comments;
        return(
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display: 'none'}}>暂无评论，点击左侧添加评论！！！</h2>
                <Item comments = {comments} deleteComments ={this.props.deleteComments}/>
            </div>
        )
    }
}

// List.propTypes = {
//     comments: PropTypes.array.isRequired,
//     deleteComments: PropTypes.func.isRequired
// }

