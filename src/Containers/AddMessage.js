import { connect } from 'react-redux'
import AddMessageComponent from '../Components/AddMessage'
import { addMessage } from '../Actions'

const mapDispatchToProps = dispatch => ({
  dispatch: (message, author) => {
    dispatch(addMessage(message, author))
  }
})

export const AddMessage = connect(() => ({}), mapDispatchToProps)(AddMessageComponent)