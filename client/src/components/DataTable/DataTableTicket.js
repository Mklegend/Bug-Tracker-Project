import React from 'react'
import { Link } from 'react-router-dom'

export default function DataTableTicket(props) {
    const newTo = {
        pathname: "/projectInfo/" + props.projectName,
    };

    return (
        <>
            <tr>
                <td style={{ color: 'navy' }}>{props.projectName}</td>
                {
                    props.tableEntries.map((entries) => {
                        return <td style={{ color: 'gray' }}>{entries}</td>
                    })
                }
            <button onClick={() => {props.callback(props.projectName)}}> Info </button>
            </tr>
        </>
    );
}
