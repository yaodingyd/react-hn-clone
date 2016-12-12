import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from '../components/Comment'
import { requestComments } from '../actions'

class CommentContainer extends Component {

  componentDidMount () {
    const { id } = this.props.params
    this.props.getComments(id)
  }

  render () {
    const { comments } = this.props
    return (
      <div>
        <Comment comments={comments}/>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getComments: (id) => {
      if (typeof id === 'string') {
        dispatch(requestComments(id))
      }
    }
  } 
}

function mapStateToProps(state) {
  return {
    comments: {
      ...state.comments,
      hidden:false
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer)