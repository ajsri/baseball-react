export const main = (state = null, action) => {
  switch(action.type) {
    case "SAMPLE_ACTION":
      return Object.assign({}, state, {
        action_sent: true
      })
    default:
      return state;
  }
}