import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from '../components/User'
import { requestUser } from '../actions'

class UserContainer extends Component {

  componentDidMount () {
    const { id } = this.props.params
    this.props.getUser(id)
  }

  render () {
    const { user } = this.props
    return (
      <div>
        <User user={user}/>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getUser: (id) => {
      if (typeof id === 'string') {
        dispatch(requestUser(id))
      }
    }
  } 
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)