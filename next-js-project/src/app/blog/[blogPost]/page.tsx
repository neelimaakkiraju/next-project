import React from 'react'

const blogPost = ({params}:{params: {blogPost:string}}) => {
  return (
    <div>blogPost{params.blogPost}</div>
  )
}

export default blogPost