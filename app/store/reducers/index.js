import loading from './loading';
import option from './option';
import editor from './editor';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	loading,
	option,
	editor
});

export default rootReducer;
