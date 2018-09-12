import { combineReducers } from 'redux';
import AuthReducer from './auth/reducer';
import AppReducer from './app/reducer';

const rootReducer = combineReducers({
    auth: AuthReducer,
    app: AppReducer,
});

export default rootReducer;
