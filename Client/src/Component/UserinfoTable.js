import React from '../../node_modules/react';
import UserinfoTableRow from './UserinfoTableRow';
import Menubar from './Menubar';
const UserinfoTable = (props)=>{
    return(
        
        <table className="table">
            <thead>
                <tr className="myfontstye1">
                    <th scope="col">ID</th>
                    <th scope="col" >Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                </tr>
            </thead>
            <tbody>
               {props.Userinfos.map(Userinfo=>{
                   return <UserinfoTableRow key={Userinfo._id}
                                            Userinfo={Userinfo}
                                            deleteHandler={props.deleteHandler}
                                            showEditForm={props.showEditForm}/>
               })}

               
            </tbody>
        </table>
    )
}

export default UserinfoTable;