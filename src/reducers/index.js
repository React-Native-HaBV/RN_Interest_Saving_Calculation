import {combineReducer} from 'redux';
import NormalReducer from "./NormalReducer";
export default combineReducer({
	normal: NormalReducer,
});
