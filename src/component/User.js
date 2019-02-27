import React from 'react';

 const User = ({ user }) => (
  <div className="container">
    <div className="tooltip-container">
      <p className="name">{user.name}</p>
  
        <div className="tooltip">
          <p><b>Street:</b> {user.address.street}</p>
          <p><b>Suite:</b> {user.address.suite}</p>
          <p><b>city:</b> {user.address.city}</p>
          <p><b>zipcode:</b> {user.address.zipcode}</p>
        </div>
    </div>
      
    <div>
      <p className="userName">({user.username})</p>
    </div>
  </div>
)
export default User;