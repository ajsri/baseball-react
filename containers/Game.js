import { connect } from 'react-redux'
import singleGame from '../components/singleGame'

import { getGameday } from '../actions/gameday'

const mapDispatchToProps = (dispatch) => {
  return {
    getGameday: () => {
      dispatch(getGameday());
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    gameday: state.gameday
  }
}

const Game = connect(mapStateToProps, mapDispatchToProps)(singleGame)

export default Game