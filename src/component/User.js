import React from 'react';

 class User extends React.Component{ 
   
  constructor(props){
    super(props)
    this.setPosition=this.setPosition.bind(this)
  }
  componentDidMount(){
    var element=document.getElementById(this.props.user.id)
    element.parentElement.addEventListener("mouseover",this.setPosition )
  }
  componentWillUnmount(){
    document.getElementById(this.props.user.id).removeEventListener("mouseover",this.setPosition)
  }

  setPosition= () => {
    var element=document.getElementById(this.props.user.id)
    var listContainer=document.getElementById("list-container")
    element.style.top=element.parentElement.offsetTop+20-listContainer.scrollTop;
    element.style.left=element.parentElement.offsetWidth+element.parentElement.offsetLeft
  }
  
  render(){
  var { user } =this.props;
  return(
  <div className="container">
    <div className="tooltip-container">
      <p className="name">{user.name}</p>
  
        <div className="tooltip" id={user.id}>
          <p><b>Street:</b> {user.address.street}</p>
          <p><b>Suite:</b> {user.address.suite}</p>
          <p><b>city:</b> {user.address.city}</p>
          <p><b>zipcode:</b> {user.address.zipcode}</p>
        </div>
    </div>
      
    <div className="userName">
      <p >({user.username})</p>
    </div>
  </div>
)
 }
}
export default User;