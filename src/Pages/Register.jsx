
import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const Register = () => {
  const {createUser} = useContext(AuthContext);
  console.log(createUser)
  const [user, setUser] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target; 
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password)
    // 
    createUser(email, password)
    .then(result =>{
      console.log(result)
      setUser(result.user)
    })
    .catch(err=>{
      console.log('create user failed', err)
    })
   
  };
  return (
    <div>
      <div className="hero ">
        <h1>
        {user?.email}
        </h1>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input type="text" name="name" className="input" placeholder="Name" />
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
