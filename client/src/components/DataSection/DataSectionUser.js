import React from 'react'
import { Component } from 'react'
import DataTable from '../DataTable/DataTable'

function DataSectionUser(props) {
  return (
    <div className='container-fluid'>
      <div className='row mt-4'>
        <table className='table table-lg table-borderless'>
          <thead>
            <tr className='table-light'>
              {
                props.tableHeadings ? props.tableHeadings.map((heading) => {
                  return <th style={{ color: 'gray' }}>{heading}</th>
                }) : ''
              }
            </tr>
          </thead>

          <tbody>
            {
            props.data.map((row) => { return <DataTable projectName={row.username} tableEntries={[row.email, row._id]}></DataTable> })
            }
          </tbody>
        </table>
      </div>
      {/* <div>
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
        </div> */}
    </div >
  );
}

export default DataSectionUser;
