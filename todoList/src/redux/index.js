
import {createStore} from 'redux'
import {Provider,connect} from 'react-redux'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Action from './Action.js';

//React componet 
class Counter extends Component{
	render(){
		const {value,onIncreaseClick,onDecreaseClick} = this.props;//将父组件传递的属性在组件中接收
		return(
			<div>
				<input type="button" value="Increase"  onClick={onIncreaseClick}/>
				<span>{value}</span>
				<input type="button" value="Decrease"  onClick={onDecreaseClick}/>
			</div>
			)
	}
}

Counter.propTypes ={
	value:PropTypes.number.isRequired,
	onIncreaseClick:PropTypes.func.isRequired,
	onDecreaseClick:PropTypes.func.isRequired,
}

//Action  增加的动作从另外的的一个文件文件导入
const increaseAction = Action.increaseAction;
const decreaseAction = Action.decreaseAction;


//Map Redux state to component props
function mapStateToProps(state){
	return {
		value:state.count
	}
}


//Map Redux actions to component props
function mapDispatchToProps(dispatch){
	return {
		onIncreaseClick:()=>dispatch(increaseAction),
		onDecreaseClick:()=>dispatch(decreaseAction)
	}
} 

// Connected Component
const ReduxCon = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)



export default ReduxCon;//默认导出一个对象