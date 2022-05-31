import React, { Component } from 'react'
import { CommentMaker } from '../CommentMaker/CommentMaker'
import Ticket from '../Ticket/Ticket'

export default class TicketInfo extends Component {
  render() {
    return (
      <div className='container-fluid px-5 pt-2 pb-5 my-5 rounded-3' style={{boxShadow:'0 3px 10px rgb(0 0 0 / 0.2)'}}>
        <div className='container-fluid px-0 my-5'>
            <h2 className='fw-bold border-bottom border-bottom-2 pb-5' style={{color:'navy'}}>Selected Ticket Info</h2>
        </div>
        <div className='row'>
            <div className='col-12 col-md-6'>
                <Ticket />
            </div>
            <div className='col-12 col-md-6'>
                <CommentMaker />
            </div>
        </div>
      </div>
    )
  }
}
