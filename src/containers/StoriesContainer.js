import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewsList from '../components/NewsList'
import { requestStories } from '../actions'

class StoriesContainer extends Component {
  componentDidMount () {
    const type = location.pathname.substring(1).toUpperCase()
    this.props.getStories(type)
  }

  render () {
    const { items, isLoading } = this.props
    return (
      <div>
        <NewsList items={items} isLoading={isLoading} />
        { this.props.children }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    items: state.newsList.items,
    isLoading: state.newsList.isLoading,
    receiveDate: state.newsList.receiveDate
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getStories: (type) => {
      if (typeof type === 'string')
        dispatch(requestStories(type.toUpperCase()))
    }
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(StoriesContainer)