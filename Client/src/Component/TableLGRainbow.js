import React from '../../node_modules/react';

const TableLGRainbow = (props) => {
    const { x1,x2,x3,x4} = props.items;
    return (
        <tr className="myfontstye3">
            <td>{x1}</td>
            <td>{x2}</td>
            <td>{x3}</td>
            <td>{x4}</td>
        </tr>
    )
}

export default TableLGRainbow;