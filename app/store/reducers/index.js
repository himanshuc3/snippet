import loading from './loading';
import option from './option';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	loading,
	option
});

export default rootReducer;
