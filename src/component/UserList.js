import React from 'react';
import User from './User';
const UserList = ({ users }) => {
 return ( <div className="list-container">
    {
      users.map((user)=>(
         <User user={user}/>
      ))
    }
  </div> 
 )
}

export default UserList;