import React from 'react';

const TableFunctionRainbow = (props) => {
    const { ans,acc } = props.items;
    
    return (
        <tr className="myfontstye3">
            <td>{ans}</td>
            <td>{acc}</td>
        </tr>
    )
}

export default TableFunctionRainbow;