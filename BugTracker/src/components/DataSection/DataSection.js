import React from 'react'
import { Component } from 'react'
import DataTable from '../DataTable/DataTable'

export default class DataSection extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }  
  render(){
    return (
      <div className='d-none d-sm-block container-fluid py-3 mt-5 border border-2 rounded-3'>
          <div className='row m-2 d-flex justify-content-between'>
            <div className='col-6'>
                <h3>{this.props.title}</h3>
            </div>
            <div className='col-4 d-flex justify-content-end'>
                <button style={{backgroundColor:'#6D6EDC',color:'white'}} className='btn'>New {this.props.item}</button>
            </div>
          </div>
          <div className='row mt-4'>
            <DataTable tableHeadings={this.props.tableHeadings} />
          </div>
          <div>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item">
                <a className="page-link" href="#/" aria-label="Previous" style={{borderRadius:'50%'}}>
                    <span aria-hidden="true">&laquo;</span>
                </a>
                </li>
                <li className="mx-2 page-item"><a className="page-link" href="#/" style={{borderRadius:'50%',backgroundColor:'#6D6EDC',color:'white'}}>1</a></li>
                <li className="page-item">
                <a className="page-link" style={{borderRadius:'50%'}} href="#/" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
                </li>
            </ul>
        </nav>
          </div>
      </div>
    )
  }
}
