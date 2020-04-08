export default () => {
  const settings = JSON.parse(localStorage.getItem("settings"));

  // Toggle
  settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd;

  // Set back to localStorage
  localStorage.setItem("settings", JSON.stringify(settings));
  return {
    type: "DISABLE_BALANCE_ON_ADD",
    payload: settings.disableBalanceOnAdd,
  };
};
