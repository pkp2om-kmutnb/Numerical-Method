import React from '../../node_modules/react';

const UserinfoTableRow = (props) => {
    const { id, username, email, password, _id } = props.Userinfo;
    return (
        <tr className="myfontstye1">
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{password}</td>
            <td >
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" onClick={props.showEditForm.bind(this, props.Userinfo)} className="btn btn-secondary">Edit</button>
                    <button type="button" onClick={props.deleteHandler.bind(this, _id)} className="btn btn-danger">Delete</button>
                </div>
            </td>
        </tr>
    )
}

export default UserinfoTableRow;