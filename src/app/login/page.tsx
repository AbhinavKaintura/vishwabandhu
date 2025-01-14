'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bg from '../../../public/background.jpg';
import google_icon from '../../../public/login-register/google.png';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login attempt with:', email, password);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-emerald-100 p-8 flex flex-col items-center justify-center relative">
        <div className="max-w-md w-full text-center">
          <div className="relative w-64 h-64 mx-auto mb-8">
            <Image
              src={bg}
              alt="Decorative bird illustration"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            LOGIN TO VISHWABANDHU FOUNDATION 
          </h2>
          <p className="text-gray-600">
            Login to your account.
          </p>
          <div className="flex justify-center mt-8 space-x-2">
            <div className="w-2 h-2 rounded-full bg-gray-800"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 bg-white p-8 flex items-center justify-center">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-script text-gray-800">Vishwabandhu Foundation</h1>
            <p className="text-gray-600 mt-2">Login to Existing account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm text-gray-600">
                User's name or Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
            </div>

            <div className="text-right">
              <a href="#" className="text-sm text-gray-600 hover:text-emerald-500">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Sign in
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm text-gray-700 hover:bg-gray-50"
            >
              <Image
                src={google_icon}
                alt="Google logo"
                width={20}
                height={20}
                className="mr-2"
              />
              Sign in with Google
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            New Member?{' '}
            <Link
              href="/register"
              className="font-medium text-emerald-600 hover:text-emerald-500"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;