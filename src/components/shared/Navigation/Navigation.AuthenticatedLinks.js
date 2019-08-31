import React from 'react'
// History comes from withRouter
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

// Props component class/const smart/ stateful
const AuthenticatedLinks = ({ currentUserId, isAdmin, logoutUser, history }) => {
  const logout = () => {
    logoutUser()
    history.push('/login')
  }
  if(isAdmin) {
    return (
      <div>
      <ul className='nav justify-content-end'>
        <li className='nav-item'>
          <Link className='nav-link' to='/users'>All Students</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to={`/users/:userId/assignments/:assignmentId`}>
            Ungraded Assignments
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to={`/users/${currentUserId}/assignments/new`}>
            Graded Assignments
          </Link>
        </li>
        <li className='nav-item'>
          <button
            className='btn btn-link'
            onClick={logout}>
              Logout
          </button>
      </li>
    </ul>
      <div>Welcome, Admin!</div>
    </div>
    )
  }
  return (
    <ul className='nav justify-content-end'>
      <li className='nav-item'>
        <Link className='nav-link' to={`/users/${currentUserId}/assignments`}>Home</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/users'>All Students</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to={`/users/${currentUserId}/assignments/new`}>
          Create a New Assignment
        </Link>
      </li>
      <li className='nav-item'>
        <button
          className='btn btn-link'
          onClick={logout}>
            Logout
        </button>
      </li>
    </ul>
  )
}

export default withRouter(AuthenticatedLinks)
