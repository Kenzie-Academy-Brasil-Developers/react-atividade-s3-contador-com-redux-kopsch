const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return (state += action.count);
    case "DECREMENT_COUNTER":
      return (state -= action.count);
    default:
      return state;
  }
};

export default counterReducer;
