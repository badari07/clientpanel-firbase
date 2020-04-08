export default (state = {}, action) => {
  if (action.type === "NOTIFY_USER") {
    return {
      ...state,
      message: action.payload.message,
      messageType: action.payload.messageType,
    };
  }
  return state;
};
