export const gameday = (state = null, action) => {
  switch(action.type) {
    case "REQUEST_GAMEDAY":
      return Object.assign({}, state, {
        loading: true
      })
    case "RECEIVE_GAMEDAY":
      return Object.assign({}, state, {
        loading: false,
        games: action.games,
        copyright: action.copyright
      })
    default:
      return state;
  }
}