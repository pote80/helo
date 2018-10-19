import React from 'react';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const Nav = (props) => {
  const isOnAuth = props.location.pathname === '/';
  console.log(props)
  if (isOnAuth) {
    return (null)
  } else {
    return (
      <div>
      <img src={props.image} alt="profile" />
      <p>{props.username}</p>
      <div>
        <Link to='/dashboard'><button>Home</button></Link>
        <Link to='/new'><button>New Post</button></Link>
        <Link to='/'><button>Logout</button></Link>
      </div>
      </div>
      
    ); 
  }
}

function mapStateToProps( state ) {
  const { username, profile_pic } = state;

  return {
    profile_pic,
    username
  };
}

connect(mapStateToProps(Nav))


export default withRouter(Nav);
