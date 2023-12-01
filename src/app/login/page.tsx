"use client";
import React from 'react';
import TextFormField from '@/components/atoms/form/fields/text-form-field';
import Form from '@/components/atoms/form/form';
import Button from "@mui/material/Button";

export default function LoginPage() {
  return (
    <Form onSubmit={() => {}}>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
          <h2 className="text-4xl font-extrabold mb-8 text-center text-blue-500">Login</h2>
          <TextFormField
            name="email"
            label="Email"
            type="text"
          />
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
        </div>
      </div>
      <div className="absolute top-4 right-4">
        <Button variant="outlined" className="text-white font-semibold border-white hover:border-gray-200">
          Register
        </Button>
      </div>
    </Form>
  );
}
