import { connect } from 'react-redux'

import Pattern from '../components/pattern'

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return { }
}

const Patterns = connect(mapStateToProps, mapDispatchToProps)(Pattern)

export default Patterns;