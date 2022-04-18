import React from 'react'
import {RadialChart} from 'react-vis'
import './TicketsStats.css'

export default function TicketsStats(props) {
    const myData = [{angle: 1,color:'white',label:'Tickets'}, {angle: 5}, {angle: 2}]

    return (
    <div className='container'>
    <div className='container mt-2'>
        <h3>Tickets by {props.stat} </h3>
        <hr/>
    </div>
    <div className='container d-flex mt-5'>
        <div className='container'>
            <RadialChart data={myData} width={130} height={130} />
        </div>
        <div className='container'>
            <ul className='nav flex-column'>
                {
                    props.options.map((option)=>{
                        return (
                            <li className='nav-item d-flex align-items-center'>
                                <span class="dot"></span>
                                <a style={{fontSize:'8px'}} className='nav-link'>{option}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </div>

    </div>
  )
}
