export default () => {
  const settings = JSON.parse(localStorage.getItem("settings"));

  // Toggle
  settings.allowRegistration = !settings.allowRegistration;

  // Set back to localStorage
  localStorage.setItem("settings", JSON.stringify(settings));
  return {
    type: "ALLOW_REGISTRATION",
    payload: settings.allowRegistration,
  };
};
