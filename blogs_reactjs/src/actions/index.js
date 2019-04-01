import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  // const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // userIds.forEach(userId => dispatch(fetchUser(userId)));
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(userId => dispatch(fetchUser(userId)))
    .value();
}

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
}

export const fetchUser = userId => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${userId}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
}

/*
// this action used to overfetching user
export const fetchUser = userId => dispatch => _fetchUser(userId, dispatch);

const _fetchUser = _.memoize(async (userId, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${userId}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
})

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: response });
  }
}
*/