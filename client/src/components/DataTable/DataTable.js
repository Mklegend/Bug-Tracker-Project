import React from 'react'
import { Link } from 'react-router-dom'

export default function DataTable(props) {
    const newTo = {
        pathname: "/projectInfo/" + props.projectName,
    };

    return (
        <>
            <tr>
                <Link to={newTo} ><td style={{ color: 'navy' }}>{props.projectName}</td></Link>
                {
                    props.tableEntries.map((entries) => {
                        return <td style={{ color: 'gray' }}>{entries}</td>
                    })
                }
            </tr>
        </>
    )
}
