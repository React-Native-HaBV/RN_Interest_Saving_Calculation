import {MONEY_CHANGED, TERM_CHANGED, INTEREST_CHANGED, CALCULATOR} from '../actions/types';

const INITIAL_STATE = {
	money: '',
	term: '',
	interest: '',
	result: ''
};

export default (state = INITIAL_STATE, action) => {
	console.log(action);
	switch (action.type) {
		case MONEY_CHANGED:
			return {...state, money: action.payload};
		case INTEREST_CHANGED:
			return {...state, interest: action.payload};
		case TERM_CHANGED:
			return {...state, term: action.payload};
		case CALCULATOR:
			return {...state, ...INITIAL_STATE, result: action.payload};
		default:
			return state;
	}
}
