import {FC} from 'react'
import { ArrowPathIcon } from '@heroicons/react/24/solid'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import { useProcessAuth } from '../hooks/useProcessAuth'


export const Auth: FC = () => {
    const {
        pw,
        setPw,
        email,
        setEmail,
        isLogin,
        setIsLogin,
        registerMutation,
        loginMutation,
        processAuth,
    } = useProcessAuth()

    if (registerMutation.isLoading || loginMutation.isLoading) {
        return(
            <div className='flex justify-center items-center flex-col min-h-screen'>
                <h1 className='text-xl text-gray-600 font-mono'>Loading...</h1>
            </div>
        )
    }
  return (
    <div className='flex justify-center items-center flex-col min-h-screen text-gray-600 font-mono'>
      <div className='flex items-center'>
        <CheckBadgeIcon className='h-8 w-8 mr-2 text-blue-500' />
        <span className='text-center text-3xl font-extrabold'>
            FARM Stack web app
        </span>
      </div>
      <h2 className='my-6'>{isLogin ? 'Login' : 'Create a new account'}</h2>
      <form onSubmit={processAuth}>
        <div>
            <input
              className='mb-3 px-3 text-sm py-2 border border-gray-300'
              name='email'
              type='email'
              autoFocus
              placeholder='Email address'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              />
        </div>
        <div>
            <input
                className='mb-3 px-3 text-sm py-2 border border-gray-300'
                name='password'
                type='password'
                placeholder='Password'
                onChange={(e) => setPw(e.target.value)}
                value={pw}
                />
        </div>
        <div className='flex justify-center my-2'>
            <button
                className='disabled:opacity-40 py-2 px-4 rounded text-white bg-indigo-600'
                disabled={!email || !pw}
                type='submit'
                >
                    {isLogin ? 'Login' : 'Sign up'}
                </button>
        </div>
      </form>
      <ArrowPathIcon
        onClick={() => setIsLogin(!isLogin)} 
        className='h-8 w-8 my-2 text-blue-500 cursor-pointer'
        />
    </div>
  )
}

export default Auth
