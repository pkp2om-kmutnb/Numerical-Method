import React from '../../node_modules/react';
import TableLGRainbow from './TableLGRainbow';
import Menubar from './Menubar';

const TableFunction = (props) => {
    return (
        <table className="NavBodyImg3 table card2">
            <thead>
                {props.n == 4 ? 
                <tr className="myfontstye3">
                    <th scope="col"> x1 </th>
                    <th scope="col"> x2 </th>
                    <th scope="col"> x3 </th>
                    <th scope="col"> x4 </th>
                </tr>
                : props.n == 3 ? 
                <tr className="myfontstye3">
                    <th scope="col"> x1 </th>
                    <th scope="col"> x2 </th>
                    <th scope="col"> x3 </th>
                </tr>
                : 
                <tr className="myfontstye3">
                    <th scope="col"> x1 </th>
                    <th scope="col"> x2 </th>
                </tr>
                }
                
            </thead>
            <tbody>
                {props.items.map(items => {
                    return <TableLGRainbow items={items} />
                })}
            </tbody>
        </table>
    )
}

export default TableFunction;