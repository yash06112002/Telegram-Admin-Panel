import React from 'react'
import '../styles/Login.css'
import { auth, provider } from '../firebase'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'

function Login() {

    const [{ }, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => alert(error.message));
    }

    return (
        <div className='login'>
            <div className='login_container'>
                <div className='login_text'>
                    <h1>Sign In</h1>
                </div>
                <button onClick={signIn}>
                    Sign In With Google
                </button>
            </div>
        </div >
    )
}

export default Login