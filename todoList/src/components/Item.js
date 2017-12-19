
let propTypes = {
	onDestory:PT.func,
	todo:PT.object
}
	

export default class Item extends React.Component{
  constructor(props) {
    super(props);
 }
	render(){
		let {onDestory,todo} = this.props;// 实现父子组件数据的传递的形式
		return (
				<li>
					<div className='view'>
						<input type='checkbox' className='toggle'/>	
						<label>{todo.value}</label>
						<button className="destroy" onClick={()=>{
							onDestory(todo)
						}}></button>
					</div>
					<input type="text" className="edit" />
				</li>

			)
	}
}


Item.protoTypes  = propTypes