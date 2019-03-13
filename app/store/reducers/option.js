import * as types from '../actions/actionTypes';
import Font from '../../components/Options/Font/Font';
import Language from '../../components/Options/Language/Language';
import Editor from '../../components/Options/Editor/Editor';
import Background from '../../components/Options/Background/Background';

const initialState = {
	activeOption: 'font',
	options: {
		font: Font,
		language: Language,
		editor: Editor,
		background: Background
	}
};

const option = (state = initialState, action) => {
	switch (action.type) {
		case types.CHANGE_OPTION:
			return {
				...state,
				activeOption: action.payload.newOption
			};
		default:
			return state;
	}
};

export default option;
