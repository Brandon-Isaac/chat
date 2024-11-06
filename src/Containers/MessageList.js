import { connect } from 'react-redux'
import MessagesListComponent from '../Components/MessageList'

export const MessagesList = connect(state => ({
  messages: state.messages
}), {})(MessagesListComponent)