import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from './UseAuth';

const Login = () => {
  const {logUser}=UseAuth()
  console.log(logUser);
    const handleSingIn=e=>{
        e.preventDefault()
        const form= new FormData(e.currentTarget)
        const email=form.get('email')
        const password=form.get('password')
        console.log(email,password);

        logUser(email,password)
        .then(result=>{
          const user={
            email,
            lastLoggedAt:result.user.metadata.lastSignInTime
          }
          fetch('https://coffee-store-server-fawn-mu.vercel.app/user',{
            method:'PATCH',
            headers:{'content-type':'application/JSON'},
            body:JSON.stringify(user)
          })
          .then(res=>res.json())
          .then(data=>{console.log(data);})
        })
        .catch((error)=>console.log(error))
    }
    return (
        <div>
           <h1>Please login</h1> 

           <div>
            <div className="card shrink-0 w-full mx-auto max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSingIn}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
        </div>
       
        <div className="form-control mt-6">
          <button className="btn btn-primary">SingIn</button>
        </div>
      </form>
    </div>
           
            </div>


            <h1>Don't have an account? please  <Link to='/singIn' > SignIn</Link>  </h1>
        </div>
    );
};

export default Login;