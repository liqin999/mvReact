let propTypes = {

	leftComplated:PT.number,
	onClearCompleted:PT.func,
	isShowBtn:PT.bool,
	view:PT.oneOf(['all','completed','active']),
	changeView:PT.func,
	
}
	
export default class Footer extends React.Component{
 constructor(props) {
    super(props);
 }
	render(){
    let {leftComplated,isShowBtn,onClearCompleted,view,changeView} = this.props;

    let showBtnComponent = null;

    if(isShowBtn){
    	showBtnComponent = (//f父子组件之间的事件的
    			<button className='clear-completed' onClick={
    				onClearCompleted
    			}>
					clear all Completed
				</button>

    		)
    }

		return (
			<footer className='footer'>
				<span className="todo-count">
					<strong>{leftComplated}</strong>
					<span>item left</span>
				</span>
				<ul className="filters">
					  <li>
						<a 
						href="#/all"
						className={view == 'all' ? 'selected' :''}
						onClick={()=>{
							changeView('all')
						}}
						>All</a>
					 </li>
				     <li>
						<a 
						href="#/active"
						className={view == 'active' ? 'selected' :''}
						onClick={()=>{
							changeView('active')
						}}
						>Active</a>
					 </li>
					 <li>
						<a 
						href="#/completed"
						className={view == 'completed' ? 'selected' :''}
						onClick={()=>{
						changeView('completed')
						}}
						>Completed</a>
					 </li>
				</ul>
				{showBtnComponent}
			</footer>


			)
	}

}


Footer.protoTypes  = propTypes
