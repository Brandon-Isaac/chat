import React from 'react'
import './App.css'
import { Sidebar } from './Containers/Sidebar'
import { MessagesList } from './Containers/MessageList'
import { AddMessage } from './Containers/AddMessage'

const App = () => (
  <div id="container">
    <Sidebar />
    <section id="main">
      <MessagesList />
      <AddMessage />
    </section>
  </div>
)

export default App