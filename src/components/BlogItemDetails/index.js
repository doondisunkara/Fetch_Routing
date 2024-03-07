import {Component} from 'react'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      author: data.author,
      id: data.id,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      title: data.title,
      content: data.content,
      topic: data.topic,
    }
    console.log(updatedData)
    this.setState({blogData: updatedData})
  }

  render() {
    const {blogData} = this.state
    const {id, author, content, topic, title, avatarUrl, imageUrl} = blogData
    return (
      <div className="blog">
        <h1 className="blog-title">{title}</h1>
        <div className="blog-book-container">
          <div className="blog-author-container">
            <img src={avatarUrl} alt={id} className="blog-author-avatar" />
            <h1>{author}</h1>
          </div>
          <img src={imageUrl} alt={title} className="blog-image" />
          <p className="blog-content">{content}</p>
        </div>
      </div>
    )
  }
}

export default BlogItemDetails
