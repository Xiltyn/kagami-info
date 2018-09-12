import LocalStorageManager from 'utils/LocalStorageManager';
import AuthActions from './actions';
import { logger } from '../../utils/logger';

export default class AuthMiddleware {

    // Signin Functions Starts
    static signin(credentials) {
        logger('==> AuthMiddleware |> signing started with :: ', 'INFO', credentials);
        return dispatch => {
            dispatch(AuthActions.signin());
            AuthMiddleware.signinWithUserCredentials(dispatch, credentials);
        };
    }

    static signinWithUserCredentials(dispatch, credentials) {
    // fake login
        if (credentials) {
            setTimeout(() => {
                logger('==> AuthMiddleware |> signin successfull | RES :: ', 'SUCCESS', credentials);
                LocalStorageManager.setUserToken('fake token');
                dispatch(AuthActions.signinSuccessful());
            }, 500);
        } else {
            logger('==> AuthMiddleware |> signin failed | ERR :: ', 'FAILURE', 'error no credentials');
            dispatch(AuthActions.signinRejected('error no credentials'));
        }
    }
    // Signin Functions Ends

    // Logout Functions Starts
    static logout() {
        return dispatch => {
            dispatch(AuthActions.logout());
            AuthMiddleware.logoutFromAPI(dispatch);
        };
    }

    static logoutFromAPI(dispatch) {
        LocalStorageManager.removeUserToken();
        LocalStorageManager.clearLocalStorage();
        dispatch(AuthActions.logoutSuccessful());
    }
    // Logout Functions Ends

    // isLoggedIn
    static isLoggedIn() {
        return dispatch => {
            const token = LocalStorageManager.getUserToken();
            if (token) {
                AuthMiddleware.ensureAuthenticated(dispatch, token);
            } else {
                logger('==> AuthMiddleware |> isLoggedIn failed | ERR :: ', 'ERROR', 'not Authenticated');
                dispatch(AuthActions.isLoggedInFailure());
            }
        };
    }

    // ensureAuthenticated
    static ensureAuthenticated(dispatch, token) {
        if (token) {
            logger('==> AuthMiddleware |> Authenticated | TOKEN :: ', 'SUCCESS', token);
            dispatch(AuthActions.isLoggedInSuccess());
        } else {
            // never gonna happen
            logger('==> AuthMiddleware |> Not Authenticated | ERR :: ', 'FAILURE', 'error no token');
            dispatch(AuthActions.signinRejected('no token'));
        }
    }
}
