import { SET_EDITOR_CONFIG } from './actionTypes';

export const setEditorConfig = (key, value) => {
	return {
		type: SET_EDITOR_CONFIG,
		payload: {
			key,
			value
		}
	};
};
