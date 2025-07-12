import React from 'react'

const Login = () => {
  return (
    <div className="bg-black flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-sm p-8 space-y-6">
        <h1 className="text-3xl font-extrabold text-center">ReWear</h1>
        <div className="border-b-2 w-12 mx-auto border-black mb-2"></div>
        <h2 className="text-center text-sm font-medium text-gray-600">Welcome Back</h2>
        <p className="text-center text-xs text-gray-400">Log in to continue your shopping journey</p>

        <form className="space-y-4">
          <input type="email" placeholder="Email address" className="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black" />
          <input type="password" placeholder="Password" className="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black" />

          <button type="submit" className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900">
            Sign In
          </button>
        </form>

        <div className="flex items-center gap-2">
          <hr className="flex-1 border-gray-300" />
          <span className="text-xs text-gray-400">Don't have an account?</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        <a href="/register" className="w-full block text-center border border-black text-black py-3 rounded-lg font-semibold hover:bg-gray-100">
          Create Account
        </a>
      </div>
    </div>
  )
}

export default Login
