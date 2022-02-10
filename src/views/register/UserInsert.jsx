import React from "react";


export default (props) =>{
    return( <>
           <tr>
                            <td>{props.name}</td>
                            <td>{props.id}</td>
                            <td>{props.email}</td>
                            <td>{props.birth}</td>
                            <td>{props.zip}</td>
                            <td>{props.state}</td>
                            <td>{props.city}</td>
                            <td>{props.district}</td>
                            <td>{props.street}</td>
                            
            </tr>
         </> 
    )
}