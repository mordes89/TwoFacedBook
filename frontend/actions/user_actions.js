import * as APIUtil from '../util/user_util';


export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUsers = users => ({
   type: RECEIVE_ALL_USERS,
   users
 });

 const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

 export const fetchUsers = () => dispatch => (
   APIUtil.fetchUsers()
   .then(users => (dispatch(receiveUsers(users))), 
   )
 );

 export const updateUser = user => dispatch => (
  APIUtil.updateUser(user)
  .then(user => (dispatch(receiveUser(user))), 
  // err => (dispatch(receiveErrors(err.responseJSON)))
  )
);