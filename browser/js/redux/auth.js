import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const LOGIN     = 'LOGIN_USER';
const SIGNUP     = 'SIGNUP_USER';

/* ------------   ACTION CREATORS     ------------------ */

const login  = user => ({ type: LOGIN, user });
const signup  = user => ({ type: SIGNUP, user });


/* ------------       REDUCER     ------------------ */

export default function reducer (user = {}, action) {
  switch (action.type) {

    case LOGIN:
      return action.user;

    case SIGNUP:
      return action.user;

    default:
      return user;
  }
}


/* ------------       DISPATCHERS     ------------------ */


export const loginUser = (user) => dispatch => {
  axios.post(`/api/login`, user)
       .then(res => dispatch(login(res.data)));
};

export const signupUser = (user) => dispatch => {
  axios.post(`/api/signup`, user)
       .then(res => dispatch(signup(res.data)));
};
