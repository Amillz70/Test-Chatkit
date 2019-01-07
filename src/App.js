import React, { Component } from 'react'
import UsernameForm from './components/UsernameForm'
import ChatScreen from './components/ChatScreen'
import apiUrls from './apiUrls'

class App extends Component {
  constructor() {
    super()

    this.state = {
      currentUsername: '',
      currentScreen: 'WhatIsYourUsernameScreen'
    }
    this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this)
  }

  onUsernameSubmitted(username) {
    fetch(apiUrls + '/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    })
    .then(response => {
      this.setState({
        currentUsername: username,
        currentScreen: 'ChatScreen'
      })
    })
    .catch(error => console.error('error', error))
  }

  render() {
    if (this.state.currentScreen === 'WhatIsYourUsernameScreen') {
    return <UsernameForm onSubmit={this.onUsernameSubmitted} />
  }
  if (this.state.currentScreen === 'ChatScreen') {
    return <ChatScreen currentUsername={this.state.currentUsername} />
    }
  }
}

export default App
