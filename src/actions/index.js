import {
	MONEY_CHANGED,
	TERM_CHANGED,
	INTEREST_CHANGED,
	CALCULATOR,
} from '../actions/types';

export const moneyChanged = (money) => {
	return {
		type: MONEY_CHANGED,
		payload: money
	};
};

export const termChanged = (term) => {
	return {
		type: TERM_CHANGED,
		payload: term
	};
};

export const interestChanged = (interest) => {
	return {
		type: INTEREST_CHANGED,
		payload: interest
	};
};

export const calculator = ({ money, term, interest, result}) => {
	return (dispatch) => {
		result = money *( 1 + term * interest);
		dispatch({type: CALCULATOR, payload: result});
	};
};
