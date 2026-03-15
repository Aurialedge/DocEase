
import React, { useState } from 'react'

const Login = () => {

    const [state,setState] = useState('Sign Up')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')

    const onSubmitHandler = async (event) =>{
        event.preventDefault()
    }

    return (
        <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center justify-center bg-gray-50 px-4'>

            <div className='w-full max-w-md bg-white rounded-2xl shadow-lg px-8 py-10'>

                {/* Title */}
                <p className='text-2xl font-semibold text-gray-800 text-center'>
                    {state === 'Sign Up' ? "Create Account" : "Login"}
                </p>

                <p className='text-sm text-gray-500 text-center mt-2'>
                    Please {state === 'Sign Up' ? "sign up" : "log in"} to book an appointment
                </p>
                {/* Form Fields */}
                <div className='mt-6 flex flex-col gap-5'>

                    {state === "Sign Up" && (
                        <div className='flex flex-col gap-1'>
                            <p className='text-sm text-gray-600'>Full Name</p>
                            <input
                                type='text'
                                onChange={(e)=>setName(e.target.value)}
                                value={name}
                                required
                                className='border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary'
                            />
                        </div>
                    )}

                    <div className='flex flex-col gap-1'>
                        <p className='text-sm text-gray-600'>Email</p>
                        <input
                            type='email'
                            onChange={(e)=>setEmail(e.target.value)}
                            value={email}
                            required
                            className='border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary'
                        />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <p className='text-sm text-gray-600'>Password</p>
                        <input
                            type='password'
                            onChange={(e)=>setPassword(e.target.value)}
                            value={password}
                            required
                            className='border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary'
                        />
                    </div>

                </div>

                {/* Button */}
                <button className='w-full mt-6 bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300'>
                    {state === 'Sign Up' ? "Create Account" : "Login"}
                </button>
                {/* Toggle */}
                <p className='text-sm text-gray-500 text-center mt-5'>
                    {state === "Sign Up"
                        ? "Already have an account?"
                        : "Don't have an account?"
                    }

                    <span
                        onClick={()=>setState(state === "Sign Up" ? "Login" : "Sign Up")}
                        className='text-primary cursor-pointer ml-1 font-medium hover:underline'
                    >
                        {state === "Sign Up" ? "Login here" : "Sign up here"}
                    </span>
                </p>

            </div>

        </form>
    )
}

export default Login

