import * as types from './actionTypes';
export const changeOption = newOption => {
	return {
		type: types.CHANGE_OPTION,
		payload: {
			newOption
		}
	};
};
