import React from 'react'

const CommentDetail = (props) => {
    return (
        // Semantic UI Comment
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar alt text" src={props.avatar} />
            </a>
            <div className="content">
                <a href="/" className="author">{props.author || 'default'}</a>
            </div>
            <div className="metadata">
                <span className="date">{props.timeAgo || 'Today at 6:00PM'}</span>
            </div>
            <div className="text">{props.text || 'Nice blog post!'}</div>
        </div>
    )
}

export default CommentDetail