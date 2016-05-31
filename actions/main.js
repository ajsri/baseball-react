export const sampleAction = () => {
  return {
    type: "SAMPLE_ACTION"
  }
}

export const sampleActionAsync = () => {
  return dispatch => {
    dispatch(sampleAction());
  }
}