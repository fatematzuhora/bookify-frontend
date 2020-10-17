import { LOG_IN, LOG_OUT } from 'store/actions/types';

// auth actions
export const logIn = (email: string, token: string) => {
    return {
        type: LOG_IN,
        payload: {
            email,
            token
        }
    }
};


export const logOut = (status: boolean) => {
    return {
        type: LOG_OUT,
        payload: {
            status
        }
    }
};


