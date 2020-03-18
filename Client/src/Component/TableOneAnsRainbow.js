import React from 'react';

const TableFunctionRainbow = (props) => {
    const { ans } = props.items;
    
    return (
        <tr className="myfontstye3">
            <td>{ans}</td>
        </tr>
    )
}

export default TableFunctionRainbow;