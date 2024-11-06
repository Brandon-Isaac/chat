import { connect } from 'react-redux'
import SidebarComponent from '../Components/SideBar'

export const Sidebar = connect(state => ({
  users: state.users
}), {})(SidebarComponent)