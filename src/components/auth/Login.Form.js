import React from 'react'
import LogInForm from './LogInForm'

export default ({ onSubmit }) => (
  <main className='container'>
    <section className='row justify-content-md-center'>
      <div className='col col-lg-5'>
        <h1>Login</h1>
        <LogInForm onSubmit={onSubmit} />
      </div>
    </section>
  </main>
)
