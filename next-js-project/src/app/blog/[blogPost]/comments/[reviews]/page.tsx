import React from 'react'

const reviews = ({params,}:{params: {blogPost:string;
    reviews:string;
}}) => {
  return (
    <div>comment{params.reviews} for blog {params.blogPost}</div>
  )
}

export default reviews