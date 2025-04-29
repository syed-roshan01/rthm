// src/app/admin-login/page.tsx

'use client';  // <-- Add this line at the top to mark this as a client component

import React, { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import Link from 'next/link';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        setError(error.message);
      } else {
        // window.location.href = '/admin-panel'; // Redirect on successful login
        window.location.href = '/dashboard';
      }
    } catch (error) {
      setError('Login failed');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Admin Login</h1>
        {error && <p className="error-message">{error}</p>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="login-input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
          className="login-input"
        />
        <button onClick={handleLogin} className="login-button">
          Login
        </button>
        <div className="footer">
          <Link href="/forgot-password">Forgot password?</Link>
        </div>
      </div>

      <style jsx>{`
        body {
          font-family: 'Arial', sans-serif;
          margin: 0;
          padding: 0;
          background: #f4f7fc;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .login-container {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .login-box {
          width: 400px;
          padding: 40px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        h1 {
          font-size: 24px;
          margin-bottom: 20px;
          color: #333;
        }

        .login-input {
          width: 100%;
          padding: 12px;
          margin: 10px 0;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 16px;
        }

        .login-button {
          width: 100%;
          padding: 12px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
        }

        .login-button:hover {
          background-color: #0056b3;
        }

        .footer {
          margin-top: 15px;
        }

        .error-message {
          color: red;
          margin-bottom: 10px;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
};

export default AdminLogin;
