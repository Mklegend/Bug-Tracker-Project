import React from 'react'
import { Component } from 'react'
import DataTable from '../DataTable/DataTable'

function DataSection(props) {
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
              { props.isTicket ? (props.data.map((row)=>{return <DataTable projectName={row.ticket} tableEntries={[row.status, row.priority]}></DataTable>})) 

:
               (props.data.map((row)=>{return <DataTable projectName={row.name} tableEntries={[row.description, row.lead]}></DataTable>}))
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

export default DataSection;
