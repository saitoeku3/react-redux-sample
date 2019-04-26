import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../components/counter'
import { decrement, increment, setCount } from '../modules/counter'

const mapStateToProps = state => ({
  count: state.counter.count
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ decrement, increment, setCount }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
