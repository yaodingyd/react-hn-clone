This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This is a Hack News clone using React, Redux and React-router with Firebase API.

run `npm install&&npm start` to see local demo. 

Demo page is [here](https://hackernews-react.herokuapp.com/). 

### Actions

The app's action is simple enough: there is request and receive for each story, user and comment.

### State

There is three reducers: newslist, user and comment.

### How to dispatch actions on page load

Since I'm using React-router to do routing, on each tab click I would dispatch a story request.

### Thanks:

1. https://github.com/cattla/hacker-news-clone
2. https://github.com/insin/react-hn

