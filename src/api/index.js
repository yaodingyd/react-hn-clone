import firebase from 'firebase'
//import { MAX_THREAD_NUMBER, BASE_API_URL } from '../constants'

const config = {
  databaseURL: 'https://hacker-news.firebaseio.com'
}
const version = '/v0'

firebase.initializeApp(config)
const api = firebase.database().ref(version)

export function fetchItem(id, cb) {
  itemRef(id).once('value', (snapshot)=>{
    cb(snapshot.val())
  })
}

export function fetchItems(ids, cb) {
  let items = []
  ids.forEach((id) => {
    fetchItem(id, (item) => {
      items.push(item)
      // use callback to accomplish what should be Promise.all()
      if (items.length >= ids.length) {
        cb(items)
      }
    })
  })
}

export function storiesRef(path) {
  return api.child(path)
}

export function itemRef(id) {
  return api.child('item/' + id)
}

export function userRef(id) {
  return api.child('user/' + id)
}

export function updatesRef() {
  return api.child('updates/items')
}