import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Home from './containers/Home'
import StoriesContainer from './containers/StoriesContainer'
import UserContainer from './containers/UserContainer'
import CommentContainer from './containers/CommentContainer'

const routes = (
  <Route path="/" component={Home}>
    <IndexRoute component={StoriesContainer}/>
    <Route path="user/:id" component={UserContainer} />
    <Route path="news" component={StoriesContainer} />
    <Route path="newest" component={StoriesContainer} />
    <Route path="show" component={StoriesContainer} />
    <Route path="ask" component={StoriesContainer} />
    <Route path="jobs" component={StoriesContainer} />
    <Route path="comment/:id" component={CommentContainer} />
  </Route>
)

export default routes