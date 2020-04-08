export default (message, messageType) => ({
  type: "NOTIFY_USER",
  payload: {
    message,
    messageType,
  },
});
