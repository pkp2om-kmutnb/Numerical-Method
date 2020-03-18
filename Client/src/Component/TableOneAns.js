import React from 'react';
import TableOneAnsRainbow from './TableOneAnsRainbow';
import Menubar from './Menubar';

const TableFunction = (props) => {

    return (

        <table className="NavBodyImg3 table card2">
            <thead>

                <tr className="myfontstye3">
                    <th scope="col"> Answer </th>
                    <th scope="col"> Accuracy </th>
                </tr>

            </thead>
            <tbody>
                {props.items.map(items => {
                    return <TableOneAnsRainbow items={items} />
                })}

            </tbody>

        </table>

    )
}

export default TableFunction;