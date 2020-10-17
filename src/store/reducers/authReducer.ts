import { LOG_IN, LOG_OUT } from 'store/actions/types';

// initial state
let initialState = {
    is_logged_in: false,
    logged_in_user_email: null,
    auth_token: null,
};

// auth reducer switch case
const authReducer = (state=initialState, action: any) => {

    switch (action.type) {
        
        // LOG_IN CASE
        case LOG_IN:
            // change logged in user info status
            state.is_logged_in = true;
            state.logged_in_user_email = action.payload.email;
            state.auth_token = action.payload.token;

            return Object.assign({}, state);

        // LOG_OUT CASE
        case LOG_OUT:
            // remove logged out user info status
            if(action.payload.status === true) {
                state.is_logged_in = false;
                state.logged_in_user_email = null;
                state.auth_token = null;
            }

            return Object.assign({}, state);
        
        // DEFAULT CASE
        default:
            return state;
    }
}

export default authReducer;
