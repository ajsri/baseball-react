import axios from 'axios'

export const receiveGameday = (games, copyright) => {
  return {
    type: "RECEIVE_GAMEDAY",
    games,
    copyright
  }
}

export const errorGameday = (error) => {
  return {
    type: "ERROR_GAMEDAY",
    error
  }
}
export const getGameday = () => {
  return dispatch => {
    dispatch({
      type: "REQUEST_GAMEDAY"
    })
    let url = "http://gd2.mlb.com/components/game/mlb/year_2016/month_06/day_01/master_scoreboard.json"
    return axios.get(url)
      .then(games => {
        dispatch(receiveGameday(games.data.data.games.game, games.data.copyright))
      })
      .catch(error => {
        dispatch(errorGameday(error))
      })
  }
}