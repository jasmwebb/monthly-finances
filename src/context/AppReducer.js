export default (state, action) => {
  switch(action.type) {
    case "INPUT_HISTORY":
      return { transactions: action.payload };
    default:
      return state;
  }
};
