import React from 'react'
import { useNavigate } from 'react-router-dom'
import './css/Login.css'
const Login = () => {
    const navigate = useNavigate()
    const goToProduct = () => {
        navigate("/product")
    }
    return (
        <>
            <div className='mainDiv'>
                <h2 className='title'>BondsIndia Demo</h2>
                <h3 className='title'>Login Page</h3>
                <br />
                <input type="email" placeholder='Enter Your Email' />
                <input type="password" placeholder="Enter Your Password" />
                <br />
                <button onClick={() => goToProduct()}>Login</button>
            </div>
        </>
    )
}

export default Login