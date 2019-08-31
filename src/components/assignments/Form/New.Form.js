import React from 'react'
import Form from './Form'

export default ({ onSubmit }) => (
  <section className='container'>
    <h2>Create New Assignment</h2>
    <hr />
    <Form onSubmit={onSubmit} />
  </section>
)
