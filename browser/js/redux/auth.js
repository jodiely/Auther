import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const LOGIN = 'LOGIN_USER';
const SIGNUP = 'SIGNUP_USER';
const LOGOUT = 'LOGOUT_USER'

/* ------------   ACTION CREATORS     ------------------ */

const login = user => ({ type: LOGIN, user });
const signup = user => ({ type: SIGNUP, user });
const logout = () => ({ type: LOGOUT });


/* ------------       REDUCER     ------------------ */

export default function reducer(user = {}, action) {
  switch (action.type) {

    case LOGIN:
      return action.user;

    case SIGNUP:
      return action.user;

    case LOGOUT:
      return action;

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

export const logoutUser = () => dispatch => {
  axios.get(`/api/logout` )
    .then(res => dispatch(logout()));
};
