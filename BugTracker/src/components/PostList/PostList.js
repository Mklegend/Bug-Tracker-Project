import React from 'react'

// Renders a List of Posts
// Accepts Posts as props from PostMaker
export default function PostList(props) {
  return (
    <div className='container justify-content-center py-3'>
        {
            props.posts.map((post)=>{
                 return post
            })
        }
    </div>
  )
}
