import React from 'react'

const blogPosts = ({params}:{params: {blogPost:string}}) => {
  return (
    <div>blogPosts{params.blogPost}</div>
  )
}

export default blogPosts