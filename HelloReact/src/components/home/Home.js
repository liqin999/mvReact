import React,{Component} from 'react';
export default class Home extends Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){//组件第一次渲染的时候调用
        console.log("Home组件渲染")
    }
    componentDidUpdate(){//组件更新完成，状态改变触发组件更新
         console.log("Home组件更新")
    }
    componentWillUnmount(){//组件移除的时候调用
       console.log("Home组件被移除")
    }
	render(){
		return(
			<img 
			 className="ui fluid image "
			 src={require('img/128H.jpg')}
			 alt=''
			/>

		)
	}
}
