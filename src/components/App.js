import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

// Helpers?
import * as auth from '../api/auth'
import * as token from '../localStorage/local-storage'

// Components
import Header from './shared/Header'
import Navigation from './shared/Navigation/Navigation'
import Login from './auth/Login.Form'
import Signup from './auth/Signup.Form'
import UsersContainer from './users/Container'


class App extends React.Component {
  constructor () {
    super()
    this.state = {
      currentUserId: null,
      loading: true,
      isAdmin: false
    }

    this.loginUser = this.loginUser.bind(this)
    this.signupUser = this.signupUser.bind(this)
    this.logoutUser = this.logoutUser.bind(this)
  }

  // Sets User logged in and sets state
  async componentDidMount(){
    // const token = window.localStorage.getItem('assignment-tracker-app')
    if(token.getToken()) {
      const user = await auth.profile()
      this.setState({ currentUserId: user._id, loading: false })
    } else {
      this.setState({ loading: false })
    } 
  }

  async loginUser (user) {
    // Code imports login and profile from FrontEnd/src/api/auth.js exported functions
    const response = await auth.login(user)
    await token.setToken(response)

    const profile = await auth.profile()
    this.setState({ currentUserId: profile.user._id, isAdmin: profile.user.admin })
  }

  logoutUser () {
    // window.localStorage.removeItem('assignment-tracker-app')
    token.clearToken()
    this.setState({ currentUserId: null })
  }

  async signupUser (user) {
    console.log('Signing Up User:', user)
      const response = await auth.signup(user)
      await token.setToken(response)

      const profile = await auth.profile()
      this.setState({ currentUserId: profile.user_id })
  }

  render () {
    const { currentUserId, loading, isAdmin } = this.state
    if (loading) return <span />
    return (
      <Router>
        <Header />
        <Navigation 
        currentUserId={currentUserId}
        isAdmin={isAdmin}
        logoutUser={this.logoutUser} />
        <Switch>
          <Route path='/login' exact component={() => {
            return currentUserId ? <Redirect to='/users' /> : <Login onSubmit={this.loginUser} />
          }} />
          <Route path='/signup' exact component={() => {
            return currentUserId ? <Redirect to='/users' /> : <Signup onSubmit={this.signupUser} />
          }} />
          <Route path='/users' render={() => {
            return currentUserId 
              ? <UsersContainer  currentUserId={currentUserId}/> 
              : <Redirect to='/login' />
          }} />

          <Redirect to='/login' />
        </Switch>
      </Router>
    )
  }
}

export default App
