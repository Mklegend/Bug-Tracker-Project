import React from 'react'
import { PersonFill } from 'react-bootstrap-icons'
//  Renders a Post
//  Accepts Post data as props from PostList
export const Post = (props) => {
  return (
    <div className='container-fluid border border-1 rounded-2 d-flex my-1'>
        <PersonFill size={20} className='me-2'/>
        <h5>{props.postText}</h5>
    </div>
  )
}
