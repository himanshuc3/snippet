import { SET_EDITOR_CONFIG } from '../actions/actionTypes';

const initialState = {
	fontSize: '12px',
	language: 'Javascript',
	theme: 'default',
	background: 'yellow'
};

const editor = (state = initialState, action) => {
	switch (action.type) {
		case SET_EDITOR_CONFIG:
			return {
				...state,
				[action.payload.key]: action.payload.value
			};
		default:
			return state;
	}
};

export default editor;
