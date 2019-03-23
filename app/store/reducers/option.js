import * as types from '../actions/actionTypes';
import Font from '../../components/Options/Font/Font';
import Language from '../../components/Options/Language/Language';
import Editor from '../../components/Options/Editor/Editor';
import Background from '../../components/Options/Background/Background';

import fontLogo from '../../assets/font.svg';
import paletteLogo from '../../assets/pallete.svg';
import dotsLogo from '../../assets/dots.svg';
import languageLogo from '../../assets/language.svg';

const initialState = {
	activeOption: 'Font',
	options: {
		Font: {
			cmp: Font,
			src: fontLogo
		},
		Language: {
			cmp: Language,
			src: languageLogo
		},
		Bkground: {
			cmp: Background,
			src: paletteLogo
		},
		Editor: {
			cmp: Editor,
			src: dotsLogo
		}
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
