import React from 'react';
import TableFunctionRainbow from './TableFunctionRainbow2';
import Menubar from './Menubar';

const TableFunction = (props) => {

    return (

        <table className="NavBodyImg3 table card2">
            <thead>

                <tr className="myfontstye3">
                    <th scope="col"> iteration </th>
                    <th scope="col"> x </th>
                    <th scope="col"> f(x) </th>
                    <th scope="col"> Error</th>
                </tr>

            </thead>
            <tbody>
                {props.items.map(items => {
                    return <TableFunctionRainbow items={items} />
                })}

            </tbody>

        </table>

    )
}

export default TableFunction;