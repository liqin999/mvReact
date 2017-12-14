import React ,{Component} from 'react';
export default class Nav extends Component{
	render(){
		return(
			<div className="ui three item menu">
			  <a className="active item">社论1</a>
			  <a className="item">Reviews</a>
			  <a className="item">即将举办的活动</a>
			</div>
		)
	}
}