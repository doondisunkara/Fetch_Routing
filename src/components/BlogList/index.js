import Loader from 'react-loader-spinner'
import {Component} from 'react'
import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    // console.log(data)
    const updatedData = data.map(each => ({
      author: each.author,
      id: each.id,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      title: each.title,
      topic: each.topic,
    }))
    console.log(updatedData)

    this.setState({blogList: updatedData, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state
    return (
      <div className="blog-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogList.map(blog => <BlogItem blogDetails={blog} key={blog.id} />)
        )}
      </div>
    )
  }
}

export default BlogList
