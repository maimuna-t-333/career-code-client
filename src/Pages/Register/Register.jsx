import Lottie from 'lottie-react';
import React, { use } from 'react';
import lottie from '../../assets/Animation - 1748286291853.json'
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import SocialLogin from '../Shared/SocialLogin';

const Register = () => {

    const {createUser}=use(AuthContext)

    const handleRegister=(e)=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)

        //create user
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
       
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-20">
            
            <div className="card-body">
                 <Lottie animationData={lottie} style={{width:'200px'}} loop={true}></Lottie>
                <form onSubmit={handleRegister}>
                    <fieldset className="fieldset">
                    <h2 className='text-4xl text-center font-semibold'>Register now!!</h2>
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
                </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;