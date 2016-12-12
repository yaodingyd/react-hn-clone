import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { Link } from 'react-router'


class Comment extends Component {
  constructor(props) {
    super(props)
  }

  onClick = () => {
    this.refs.child.style.display = 'none'
  }

  getComment = (comment) => {
    return (
      <div key={comment.id} className="comment">
        <div className="news-item_subtext">
          <Link to={`/user/${comment.by}`}>{comment.by}</Link>
          <span onClick={() => this.onClick(comment) }>+</span>
        </div>
        <div ref="child">
          <div className="comment-content" dangerouslySetInnerHTML={{__html:comment.text}}></div>
          { comment.kids !== undefined && comment.kids.map( kid => {
            return this.getComment(kid)
          })}
        </div>
      </div>
    )
  }

  render() {
    const { comments } = this.props
    return (
      <div className="news-list">
      <NewsItem key={comments.id} item={comments} />
      <div className="comment-gap">
        { comments.kids.map( kid => {
          return this.getComment(kid)
        })}
      </div>
    </div>
    )
  }
}

export default Comment