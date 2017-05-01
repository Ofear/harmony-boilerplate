import { fromJS } from 'immutable';
import * as ActionTypes from '../../actions';
import { ROOT } from '../../routes';
import appMessages from '../../i18n';

const defaultLocale = 'en';

const INITIAL_STATE = fromJS({
    locale: defaultLocale,
    messages: appMessages[defaultLocale],
	appMessages: appMessages
});

export default function (state = INITIAL_STATE, action) {
	
    switch(action.type) {

        case ActionTypes.INITIAL_TRANSLATION:
            return INITIAL_STATE;

        case ActionTypes.CHANGE_LOCALE:
            return state.set('locale', action.payload.locale).set("messages", appMessages[action.payload.locale]);
        
        default:
            return state;

    }
}