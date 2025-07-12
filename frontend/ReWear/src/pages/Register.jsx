import React from 'react'

const Register = () => {
  return (
     <div className="bg-black flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-sm p-8 space-y-6">
        <h1 className="text-3xl font-extrabold text-center">ReWear</h1>
        <div className="border-b-2 w-12 mx-auto border-black mb-2"></div>
        <h2 className="text-center text-sm font-medium text-gray-600">Create Account</h2>
        <p className="text-center text-xs text-gray-400">Join us and start your shopping journey</p>

        <form className="space-y-4">
          <input type="text" placeholder="Full name" className="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black" />
          <input type="email" placeholder="Email address" className="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black" />
          <input type="password" placeholder="Password" className="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black" />
          <input type="password" placeholder="Confirm password" className="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black" />

          <p className="text-xs text-gray-400 text-center">
            By creating an account, you agree to our{' '}
            <a href="#" className="text-blue-600 font-medium">Terms of Service</a> and{' '}
            <a href="#" className="text-blue-600 font-medium">Privacy Policy</a>
          </p>

          <button type="submit" className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900">
            Create Account
          </button>
        </form>

        <div className="flex items-center gap-2">
          <hr className="flex-1 border-gray-300" />
          <span className="text-xs text-gray-400">Already have an account?</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        <a href="/login" className="w-full block text-center border border-black text-black py-3 rounded-lg font-semibold hover:bg-gray-100">
          Sign In
        </a>
      </div>
    </div>
  )
}

export default Register
