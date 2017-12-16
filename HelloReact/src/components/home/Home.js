import React,{Component} from 'react';
export default class Home extends Component{
	constructor(props){
		super(props)
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
