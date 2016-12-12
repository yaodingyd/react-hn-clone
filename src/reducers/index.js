import * as actions from '../actions'
import { combineReducers } from 'redux'

const initialState = {
  items: []
}

const newsList = (state = initialState, action) => {
  switch (action.type) {
    case actions.REQUEST_ITEM_LIST:
      return {
        ...state,
        items: [],
        isLoading: true
      }
    case actions.RECEIVE_NEWS:
    case actions.RECEIVE_NEWEST:
    case actions.RECEIVE_SHOW:
    case actions.RECEIVE_JOBS:
    case actions.RECEIVE_ASK:
      return {
        ...state,
        items: action.items,
        isLoading: false,
        receiveDate: action.receiveDate
      }
    default:
      return state
  }
}

const user = (state = {}, action) => {
  switch (action.type) {
    case actions.RECEIVE_USER:
      return action.user
    default:
      return state
  }
}

const comments = (state = {
  kids: []
}, action) => {
  switch (action.type) {
    case actions.RECEIVE_COMMENTS:
      return action.comments
    default: 
      return state
  }
}

export default combineReducers({
  newsList,
  user,
  comments
})



