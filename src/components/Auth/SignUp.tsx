import React, { FC, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { registerUser,  } from '../../redux/actions/user.actions';
import { RootState } from '../../redux/store'


const Signup: FC = () => {

  const isAuthenticated = useSelector((state: RootState) => state.userReducer.isAuthenticated);
  const dispatch = useDispatch();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });


  if(isAuthenticated) {
    return <Redirect to="/todos" />;
  }

  const { email, password } = user;
  const onChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    setUser({...user, [e.currentTarget.name]: e.currentTarget.value })
  }
  
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(registerUser(user));

  }

  return (
    <div className='container'>
      <div className='card mb-3 p-5'>
      <h4 className='mb-4'>Register</h4>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="email">email</label>
            <input className="form-control" type="email" name="email" placeholder="Enter email" value={email} onChange={(e) =>onChangeHandler(e)}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input className="form-control" type="password" name="password" placeholder="Enter password" value={password} onChange={(e) =>onChangeHandler(e)}/>
          </div>
          <button className="btn btn-primary btn-block" type="submit">Register</button>
          </form>
      </div>
    </div>
  )
}

export default Signup;