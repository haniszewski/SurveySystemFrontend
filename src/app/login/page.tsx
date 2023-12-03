"use client";
import React from 'react';
import TextFormField from '@/components/atoms/form/fields/text-form-field';
import Form from '@/components/atoms/form/form';
import Button from "@mui/material/Button";
import Link from 'next/link';

const LoginPage = () => {
  const handleLogin = (values: any) => {
    console.log(values);
  };

  return (
    <Form onSubmit={handleLogin}>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
          <h2 className="text-4xl font-extrabold mb-8 text-center text-blue-500">Login</h2>
          <TextFormField
            name="email"
            label="Email"
            type="text"
          />
          <div className="mb-4"></div>
          <TextFormField
            name="password"
            label="Password"
            type="text"
          />
          <div className="w-full">
            <Button type="submit" variant="contained" className="bg-blue-500 text-white hover:bg-blue-700 w-full">
              Login
            </Button>
          </div>
          <div className="mt-4 text-center">
            <Link href="/register">
              <a className="text-blue-500 hover:underline">Register</a>
            </Link>
          </div>
        </div>
      </div>
    </Form>
  );
}

export default LoginPage;

