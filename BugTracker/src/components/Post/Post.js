import React from 'react'

//  Renders a Post
//  Accepts Post data as props from PostList
export const Post = (props) => {
  return (
    <div className='container-fluid border border-1 rounded-2 d-flex'>
        <h5>{props.postText}</h5>
    </div>
  )
}
