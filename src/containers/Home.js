import React from 'react'
import NewsHeader from '../components/NewsHeader'
import { connect } from 'react-redux'
import { requestStories } from '../actions'

const Home = ({children, updateView}) => {
  return (
    <div>
    <NewsHeader updateView={updateView}/>
      {children}
    </div>
  )
}

const  mapDispatchToProp = (dispatch) => {
  return {
    updateView: (e) => {
      const type = e.target.href.split('/').slice(-1)[0].toUpperCase()
      dispatch(requestStories(type.toUpperCase()))
    }
  }
}

export default connect(null, mapDispatchToProp)(Home)