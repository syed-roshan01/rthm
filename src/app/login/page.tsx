'use client';

import { useState } from 'react';
import { FaGoogle, FaApple } from 'react-icons/fa';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic here (e.g., authenticate with a backend service)
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 py-15 px-6">
      <div className="max-w-sm w-full bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-center mb-6">Sign In</h3>
        
        {/* Login Form */}
        <form onSubmit={handleLogin}>
          {/* Email Field */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-900"
          >
            Login
          </button>
        </form>

        {/* Forgot Password Link */}
        <div className="mt-4 text-center">
          <Link href="/forgot-password" className="text-blue-600 hover:text-blue-800">Forgot Password?</Link>
        </div>

        <div className="mt-6 text-center">
          <span className="text-gray-500">Or sign in with</span>
        </div>

        {/* Social Media Login Buttons */}
        <div className="flex justify-center gap-4 mt-4">
          {/* Google Login */}
          <button className="flex items-center justify-center w-28 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            <FaGoogle className="mr-2" />
            Google
          </button>

          {/* Apple Login */}
          <button className="flex items-center justify-center w-28 py-2 bg-black text-white rounded-md hover:bg-gray-800">
            <FaApple className="mr-2" />
            Apple
          </button>
        </div>

        {/* Register Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-500">Don't have an account?</p>
          <Link href="/register" className="text-blue-600 hover:text-blue-800">Sign up</Link>
        </div>
      </div>
    </div>
  );
}
