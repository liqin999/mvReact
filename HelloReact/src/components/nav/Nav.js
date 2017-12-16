import React ,{Component} from 'react';
export default class Nav extends Component{
	render(){
		//子组件接收父组件的属性或者事件 props 
		let {changeView} = this.props;
		return(
			<div className="ui three item menu">
			  <a className="active item">Nodes</a>
			  <a 
			  className="item"
			  onClick = {()=>{//箭头函数的this代指定义箭头函数的上下文环境
			  	changeView("home")
			  }}
			  >Home</a>
			  <a 
			  className="item"
			  onClick={()=>{
			  	changeView("list")
			  }}
			  >List</a>
			</div>
		)
	}
}