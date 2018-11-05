export default ({ dispatch }) => next => action => {
  // check to see if the action has a promise on its payload
  if (!action.payload || !action.payload.then) {
    return next(action);
  }
  // if it does, wait for it to resolve
  // else, send the action to the next middleware
  action.payload.then(function(response) {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  })
}