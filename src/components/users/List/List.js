import React from 'react'

export default ({ users }) => {
  const lis = users.map(user => (
    <div key={user._id}>
      {/* <Link to={`/users/${user._id}/assignments`}>
        {user.firstName} {user.lastName}: {user.email}
      </Link> */}
       <p>
        <strong>{user.firstName} {user.lastName}</strong> - {user.email}
      </p>
    </div>
  ))

  return (
    <>
      <ul>
        { lis }
      </ul>
    </>
  )
}
