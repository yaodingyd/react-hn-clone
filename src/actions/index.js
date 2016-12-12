import { MAX_THREAD_NUMBER } from '../constants'
import { storiesRef, fetchItem, fetchItems, userRef } from '../api'

export const REQUEST_ITEM_LIST = 'REQUEST_ITEM_LIST'

export const RECEIVE_NEWS = 'RECEIVE_NEWS'
export const RECEIVE_NEWEST = 'RECEIVE_NEWEST'
export const RECEIVE_SHOW = 'RECEIVE_SHOW'
export const RECEIVE_ASK = 'RECEIVE_ASK'
export const RECEIVE_JOBS = 'RECEIVE_JOBS'

export const RECEIVE_USER = 'RECEIVE_USER'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'

//type constants
export const ASK = 'ASK'
export const SHOW = 'SHOW'
export const JOBS = 'JOBS'
export const NEWEST = 'NEWEST'
export const NEWS = 'NEWS'

function getApiUrlByItemType (type) {
  switch (type) {
    case ASK:
      return 'askstories'
    case SHOW:
      return 'showstories'
    case JOBS:
      return 'jobstories'
    case NEWEST:
      return 'newstories'
    case NEWS:
    default:
      return 'topstories'
  }
}

function getReceiveTypeByItemType (type) {
  switch (type) {
    case ASK:
      return RECEIVE_ASK
    case SHOW:
      return RECEIVE_SHOW
    case JOBS:
      return RECEIVE_JOBS
    case NEWEST:
      return RECEIVE_NEWEST
    case NEWS:
      return RECEIVE_NEWS
    default:
      return RECEIVE_NEWS
  }
}

export const requestItemList = () => {
  return {
    type: REQUEST_ITEM_LIST
  }
}

export const receiveStories = (items, type) => {
  return {
    type: getReceiveTypeByItemType(type), 
    items,
    receiveDate: Date.now()
  }
}

export const requestStories = type => dispatch => {
  dispatch(requestItemList())
  return storiesRef(getApiUrlByItemType(type))
    .once('value', (snapshot) => {
      let ids = snapshot.val().slice(0, MAX_THREAD_NUMBER)
      fetchItems(ids, (items)=>{
        dispatch(receiveStories(items, type))
      })
    })
}

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user: user
  }
}

export const requestUser = id => dispatch => {
  return userRef(id)
    .once('value', (snapshot)=>{
      dispatch(receiveUser(snapshot.val()))
    })
}

export const receiveComments = (comments) => {
  return {
    type: RECEIVE_COMMENTS,
    comments: comments
  }
}

const getMoreComments = (kids, parent) => {
  return new Promise( (resolve) => {
    fetchItems(kids, (comments) => {
      parent.kids = comments
      Promise.all(
        comments.map((comment) => {
          if (comment.kids !== undefined && comment.kids.length >= 1 ) {
            return getMoreComments(comment.kids, comment)
          }
          return 1 
        })
      ).then( () => {
        resolve()
      })
    })
  })
}

export const requestComments = (id) => dispatch => {
  return fetchItem(id, (comment) => {
    if (comment.kids) {
      getMoreComments(comment.kids, comment).then(() => {
        dispatch(receiveComments(comment))
      })
    } else {
      dispatch(receiveComments(comment))
    }
  })
}




