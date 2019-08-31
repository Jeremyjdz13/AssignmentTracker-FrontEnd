import React from 'react'

import Actions from './List.Actions'

export default ({ destroyAssignment, user }) => {
  
  const assignments = user.assignments.map(assignment => (
    <div key={assignment._id} className='card'>
      <div className='card-body'>
        <h3>{assignment.title}</h3>
        <p className='card-text'>{ assignment.description }</p>
        <a href={assignment.link}>Project Link</a>
        <blockquote className='blockquote mb-0'>
          <footer className='blockquote-footer'>Grade: { assignment.grade }</footer>
        </blockquote>
      </div>
      <Actions destroyAssignment={destroyAssignment} assignment={assignment} user={user} />
    </div>
  ))
   
  return (
    <>
      { assignments }
    </>
  )
}
