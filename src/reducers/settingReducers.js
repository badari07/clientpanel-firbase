export default (state = {}, action) => {
  if (action.type === "ALLOW_REGISTRATION") {
    return {
      ...state,
      allowRegistration: action.payload,
    };
  }
  if (action.type === "DISABLE_BALANCE_ON_ADD") {
    return { ...state, disableBalanceOnAdd: action.payload };
  } else if (action.type === "DISABLE_BALANCE_ON_EDIT") {
    return {
      ...state,
      disableBalanceOnEdit: action.payload,
    };
  }
  return state;
};
