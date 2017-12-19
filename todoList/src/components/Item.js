export default class Item extends React.Component{
  constructor(props) {
    super(props);
 }
	render(){
		return (
			
				<li>

				<div className='view'>
					<input type='checkbox' className='toggle'/>	
						<label>content</label>
						<button className="destriy"></button>
				</div>
				<input type="text" className="edit" />
				</li>

			)
	}
}

