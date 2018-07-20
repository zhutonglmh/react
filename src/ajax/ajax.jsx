import React,{Component} from 'react'

export default class Ajax extends Component {

    componentDidMount(){
        const formData = {

        }
        const url = 'http://localhost:8082/study/demo/demo';
        fetch(url,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(formData),
            dataType: "application/json",
        }).then(
            function(response){
                if(response.status!==200){
                    console.log("存在一个问题，状态码为："+response.status);
                    return;
                }
                //检查响应文本
                response.json().then(function(data){
                   console.log(data);
                });
            }
        ).catch(function(err){
            console.log("Fetch错误:"+err);
        });
    }
    render(){
        return(
            <h2>哈哈哈哈哈</h2>
        )
    }
}

