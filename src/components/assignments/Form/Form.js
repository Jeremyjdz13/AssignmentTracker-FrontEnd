import React from 'react'

export default class Form extends React.Component {
  constructor (props) {
    super(props)
    const { assignment = {} } = this.props
    const { title = '', description = '', link = '' } = assignment
    this.state = { title, description, link, _id: assignment._id  }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange ({ target: { name, value } }) {
    this.setState({ [name]: value })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.onSubmit(this.state)
    console.log(this.state)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='title'>Assignment Title</label>
          <input
            className='form-control'
            id='title'
            onChange={this.handleChange}
            name='title'
            type='text'
            value={this.state.title} />
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Project Description</label>
          <textarea
            className='form-control'
            id='description'
            onChange={this.handleChange}
            name='description'
            type='text'
            value={this.state.description} />
        </div>
        <div className='form-group'>
          <label htmlFor='link'>Project link</label>
          <textarea
            className='form-control'
            id='link'
            onChange={this.handleChange}
            name='link'
            type='text'
            value={this.state.link} />
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    )
  }
}
