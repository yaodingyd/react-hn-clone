import React, { PropTypes } from 'react'
import url from 'url'
import { Link } from 'react-router'

const NewsItem = ({item, rank}) => {

  const getDomain = () => {
    const domain =  url.parse(item.url || '').hostname
    if (domain) {
      return '(' + url.parse(item.url || '').hostname + ')'
    } else {
      return ''
    }
  }

  const getComment = () => {
    let commentText = 'discuss'
    if (item.kids && item.kids.length) {
      commentText = item.kids.length + ' comments'
    }
    return (
      <Link to={`/comment/${item.id}`}>{commentText}</Link>
      )
  }

  const getSubtext = () => {
    return (
      <div className="news-item_subtext">
        {item.score} points by <Link to={`/user/${item.by}`}>{item.by}</Link> | {getComment()}
      </div>
    )
  }

  const getTitle = () => {
    return (
      <div>
        <a className="news-item_title-link" href={item.url}>
          {item.title}
        </a>
        <span className="news-item_domain">
          {getDomain()}
        </span>
      </div>
    )
  }

  const getRank = () => {
    return (
      <div className="news-item_rank">
        {rank}
      </div>
    )
  }

  const getVote = () => {
    return (
      <div className="news-item_vote">
        <a href="#">
          <span className="gray-arrow"></span>
        </a>
      </div>
    )
  }

  return (
    <div className="news-item">
      {getRank()}
      {getVote()}
      <div className="news-item_text">
        {getTitle()}
        {getSubtext()}
      </div>
    </div>
    )
}

NewsItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    score: PropTypes.number,
    by: PropTypes.string,
    kids: PropTypes.array
  })
} 

export default NewsItem