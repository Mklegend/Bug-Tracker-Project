import React from 'react'
import { PersonFill } from 'react-bootstrap-icons'
import { HandThumbsUp } from 'react-bootstrap-icons'
import { HandThumbsDown } from 'react-bootstrap-icons'
import { useState } from 'react'

//BsFillHandThumbsUpFill
//BsFillHandThumbsDownFill
//  Renders a Post
//  Accepts Post data as props from PostList



export const Post = (props) => {
  
  const [upVote,setupVote] = useState(0)
  const [downVote,setdownVote] = useState(0)
  
  const doupVote = () =>{
    setupVote(upVote+1)
  }
  const dodownVote = () =>{
    setdownVote(downVote+1)
  }
  
  return (
    <>
      <div className='border border-1'>
        <div className='container-fluid rounded-2 d-flex my-1'>
          <PersonFill size={20} className='me-2' />
          <h5>{props.postText}</h5>
        </div>
        <div className='container'>
          <span>{upVote}</span>
          <button onClick={doupVote}>
            <HandThumbsUp size={12} className='me-2' />
          </button>
          <span>{downVote}</span>
          <button onClick={dodownVote}>
            <HandThumbsDown size={12} className='me-2' />
          </button>
        </div>
      </div>
    </>
  )
}
