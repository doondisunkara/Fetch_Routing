import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {author, topic, title, avatarUrl, imageUrl} = blogDetails
  return (
    <div className="blog-item">
      <img src={imageUrl} alt="i" className="book-img" />
      <div className="book-details">
        <p className="book-topic">{topic}</p>
        <h1 className="book-title">{title}</h1>
        <div className="author-container">
          <img src={avatarUrl} alt="avatar" className="author-avatar" />
          <p className="author-name">{author}</p>
        </div>
      </div>
    </div>
  )
}

export default BlogItem
