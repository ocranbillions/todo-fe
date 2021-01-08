import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store'

const Header = () => {

  const isAuthenticated = useSelector((state: RootState) => state.userReducer.isAuthenticated);


  return (
    <div className="header container-fluid bg-dark text-light text-center">
      <h1>Welcome to Todoist</h1>
      <h4>Create some todo items with the form below</h4>
    </div>
  )
}

export default Header;