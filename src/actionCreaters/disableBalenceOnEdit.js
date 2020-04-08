export default () => {
  const settings = JSON.parse(localStorage.getItem("settings"));

  // Toggle
  settings.disableBalanceOnEdit = !settings.disableBalanceOnEdit;

  // Set back to localStorage
  localStorage.setItem("settings", JSON.stringify(settings));
  return {
    type: "DISABLE_BALANCE_ON_EDIT",
    payload: settings.disableBalanceOnEdit,
  };
};
