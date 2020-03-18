import React from 'react';


const TableFunctionRainbow = (props) => {
    const { n, xL,xM,xR,fxL,fxR,fxM, acc ,fn} = props.items;
    
    return (
        <tr className="myfontstye3">
            <td>{n}</td>
            <td>{xM}</td>
            <td>{fxM}</td>
            <td>{acc}</td>
        </tr>
    )
}

export default TableFunctionRainbow;