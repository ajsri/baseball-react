const patterns = (state = null, action) => {
  switch(action.type) {
    case "SAMPLE_ACTION":
      return Object.assign({}, state, {
        sampleActionRun: true
      })
    default:
      return state
  }
}

export default patterns