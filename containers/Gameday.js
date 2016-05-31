import { connect } from 'react-redux'
import gameday from '../components/games'

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

const Gameday = connect(mapStateToProps, mapDispatchToProps)(gameday)

export default Gameday