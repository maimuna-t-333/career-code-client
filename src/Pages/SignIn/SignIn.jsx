import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import signIn from '../../assets/Animation - 1748344867010.json'
import Lottie from 'lottie-react';
import SocialLogin from '../Shared/SocialLogin';
import { useLocation, useNavigate } from 'react-router';

const SignIn = () => {


        const {SignInUser}=use(AuthContext)
        const location=useLocation()
        console.log('location is signIn page',location)
        const navigate=useNavigate()
        const from= location.state || '/'
    
        const handleSignIn=(e)=>{
            e.preventDefault();
            const form=e.target;
            const email=form.email.value;
            const password=form.password.value;
            console.log(email,password)
    
            //sign in user
            SignInUser(email,password)
            .then(result=>{
                console.log(result.user)
                navigate(from)
            })
            .catch(error=>{
                console.log(error)
            })
        }
    return (
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-20">
            
            <div className="card-body">
                 <Lottie animationData={signIn} style={{width:'200px'}} loop={true}></Lottie>
                <form onSubmit={handleSignIn}>
                    <fieldset className="fieldset">
                    <h2 className='text-4xl text-center font-semibold'>Sign In</h2>
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">SignIn</button>
                </fieldset>
                </form>
                <SocialLogin  from={from}></SocialLogin>
            </div>
        </div>
    );
}

export default SignIn;