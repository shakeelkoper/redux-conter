import * as actionTypes from "../actions";
const initialState = {
	counter: 0,
	results: [],
};
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.INCREMENT:
			// let newState = Object.assign({}, state);
			// newState.counter = state.counter + 1;
			// return newState;
			return {
				...state,
				counter: state.counter + 1,
			};
		case actionTypes.DECREMENT:
			return {
				...state,
				counter: state.counter - 1,
			};
		case actionTypes.ADD:
			return {
				...state,
				counter: state.counter + action.val,
			};
		case actionTypes.SUBRACT:
			return {
				...state,
				counter: state.counter - action.val,
			};
	}
	return state;
};
export default reducer;
