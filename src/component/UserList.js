import React from 'react';
import User from './User';
const UserList = ({ users }) => {
 return ( <div id="list-container">
    {
      users.map((user)=>(
         <User user={user} key={user.id}/>
      ))
    }
  </div> 
 )
}

export default UserList;