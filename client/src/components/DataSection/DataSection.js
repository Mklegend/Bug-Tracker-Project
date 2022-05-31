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
      <div className='container-fluid'>
          <div className='row mt-4'>
            <DataTable prj={this.props.prj} tableHeadings={this.props.tableHeadings} projectName={this.props.projectName}
            tableEntries={this.props.tableEntries}  />
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
