import React from 'react'

import AuthenticatedLinks from './Navigation.AuthenticatedLinks'
import UnauthenticatedLinks from './Navigation.UnauthenticatedLinks'

export default ({ currentUserId, logoutUser, isAdmin }) => (
  <section className='bg-light border-bottom mb-4'>
    <div className='container'>
      { 
        currentUserId
        ? (
         <AuthenticatedLinks 
          currentUserId={currentUserId}
          logoutUser={logoutUser}
          isAdmin={isAdmin} 
         />
        )
        : <UnauthenticatedLinks /> 
      }
    </div>
  </section>
)
