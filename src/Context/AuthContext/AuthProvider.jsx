import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.config';


const googleProvider=new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState(null)

    const createUser=(email,password)=>{
        setLoading(true)
        return  createUserWithEmailAndPassword(auth,email,password)
    }
    const SignInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider)
    }

    const signOutUser=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged(currentUser=>{
            setUser(currentUser)
            setLoading(false)
            console.log('user in the auth state change', currentUser)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const authInfo={
        loading,
        user,
        createUser,
        SignInUser,
        signOutUser,
        signInWithGoogle

    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;