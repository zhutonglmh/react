import React,{Component} from 'react'
import logo from '../logo.svg'
export default class App extends Component {

    render(){
        return(
            <div>
                <img src={logo} className='logo' alt='logo'></img>
                <p className='title'>这是一个React 项目</p>
            </div>
        )
    }
}

