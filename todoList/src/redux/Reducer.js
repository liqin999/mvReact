/*reducer就是实现
      (state, action) => newState的纯函数，
       也就是真正处理state的地方
*/
export default function counter(state={count:0},action){
	const count = state.count;
	switch(action.type){
		case 'increase':
		  return {
		  	count:count+1
		  }
		case 'decrease':
		  return {
		  	count: (count-1) < 0 ? 0 :(count-1)
		  }
		default:
		  return state;
	}
}
