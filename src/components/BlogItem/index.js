import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, author, topic, title, avatarUrl, imageUrl} = blogDetails
  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <div className="blog-item">
        <img src={imageUrl} alt={title} className="book-img" />
        <div className="book-details">
          <p className="book-topic">{topic}</p>
          <h1 className="book-title">{title}</h1>
          <div className="author-container">
            <img src={avatarUrl} alt="avatar" className="author-avatar" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
