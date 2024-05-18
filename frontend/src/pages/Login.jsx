import React from 'react'
import '../global.css'
import Button from '../components/Button'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <>
    <section className='login_section d-flex align-items-center justify-content-center'>
        <div className="login_main px-3 py-5 rounded bg-light">
            <h2 className='text-primary'>Login</h2>
            <div className='mt-4'>
                <input className='form-control' type="text" placeholder='Email'/>
            </div>
            <div className='mt-4'>
                <input className='form-control' type="text" placeholder='Password'/>
            </div>
            <p className='text-start my-2'>Don’t you have an account? <Link to="/signup" className="fw-bold">Sign up</Link></p>
            <Button name="Login" className="btn btn-primary mt-3 d-block"/>
        </div>
    </section>
    </>
  )
}

export default Login