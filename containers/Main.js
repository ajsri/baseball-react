import { connect } from 'react-redux'
import Main from '../components/main'

import {sampleActionAsync} from '../actions/main'

const mapDispatchToProps = (dispatch) => {
  return {
    sampleActionAsync: () => {
      dispatch(sampleActionAsync());
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    main: state.main
  }
}

const MainApp = connect(mapStateToProps, mapDispatchToProps)(Main)

export default MainApp