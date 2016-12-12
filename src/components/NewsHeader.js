import React from 'react'
import { Link } from 'react-router'

const NewsHeader = ({updateView}) => {

  const getNav = () => {
    const navLinks = [
      {
        name: 'new',
        url: '/newest'
      },
      {
        name: 'show',
        url: '/show'
      },
      {
        name: 'ask',
        url: '/ask'
      },
      {
        name: 'jobs',
        url: '/jobs'
      }
    ]

    return (
      <div className="news-header_nav">
        {navLinks.map(navLink => {
          return (
            <Link key={navLink.url} className="news-header_link" to={navLink.url}  onClick={updateView}>
              {navLink.name}
            </Link>
          )
        })}
      </div>
    )
  }


  return (
    <div className="news-header">
      <div className="news-header_logo">
        <a href="https://yaodingyd.github.io">YD</a>
      </div>
      <div className="news-header_title">
        <Link to="/news"  onClick={updateView}>HN Clone</Link>
      </div>
      {getNav()}
    </div>
  )
}

export default NewsHeader