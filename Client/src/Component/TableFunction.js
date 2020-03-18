import React from '../../node_modules/react';
import TableFunctionRainbow from './TableFunctionRainbow';
import Menubar from './Menubar';

const TableFunction = (props) => {

    return (

        <table className="NavBodyImg3 table card2">
            <thead>

                <tr className="myfontstye3">
                    <th scope="col"> iteration </th>
                    <th scope="col"> xL </th>
                    <th scope="col"> xM </th>
                    <th scope="col"> xR </th>
                    <th scope="col"> f(xL) </th>
                    <th scope="col"> f(xM) </th>
                    <th scope="col"> f(xR) </th>
                    <th scope="col"> accuracy</th>
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