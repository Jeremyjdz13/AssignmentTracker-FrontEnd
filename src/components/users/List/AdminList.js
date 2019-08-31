import React from 'react'

export default ({ users }) => {
  const lis = users.map(user => (
    <div key={user._id}>
       <p>
        <strong>{user.firstName} {user.lastName}</strong> - {user.email} <div>Grade goes here</div>
      </p>
    </div>
  ))

  return (
    <>
     <div>
        <form>
            <label>Score is Above:</label><input></input><label>Score is Below</label><input></input><button>Filter</button>
        </form>
        <ul>
            { lis }
        </ul>
      </div>
    </>
  )
}
