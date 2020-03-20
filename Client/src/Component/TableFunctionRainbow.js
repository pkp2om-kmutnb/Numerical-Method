import React from '../../node_modules/react';


const TableFunctionRainbow = (props) => {
    const { n, xL,xM,xR,fxL,fxR,fxM, acc ,fn} = props.items;
    return (
        <tr className="myfontstye3">
            <td>{n}</td>
            <td>{xL}</td>
            <td>{xM}</td>
            <td>{xR}</td>
            <td>{fxL}</td>
            <td>{fxM}</td>
            <td>{fxR}</td>
            <td>{acc}</td>
          
        </tr>
    )
}

export default TableFunctionRainbow;