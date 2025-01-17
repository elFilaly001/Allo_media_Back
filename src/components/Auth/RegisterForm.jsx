import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PasswordInput from "../PasswordInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';


export default function RegisterForm() {
  const [data, setData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirm_password: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };


  const validateForm = () => {
    // Basic validation rules
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/; // Adjust this regex based on your phone number format

    if (data.username.length < 3) {
      toast.error("Username must be at least 3 characters long.");
      return false;
    }

    if (!emailRegex.test(data.email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    if (!phoneRegex.test(data.phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return false;
    }

    if (data.password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return false;
    }

    if (data.password !== data.confirm_password) {
      toast.error("Passwords do not match!");
      return false;
    }

    return true;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {

      setLoading(true);

      if (data.password === data.confirm_password) {

        // Delete the confirm_password
        data.role = 'Client';
        console.log(data);
        const response = await axios.post('http://localhost:3000/api/Auth/Register', { username: data.username, email: data.email, phone: data.phone, password: data.password, role: data.role });
        // console.log("test ",response);
        toast.success("Registration successful! Please check your email for verification.");
      } else {

        toast.error("Passwords do not match!");

      }

    } catch (error) {
      console.log(error);
      
      if (error) {
        toast.error("test");

      } else {

        toast.error("An error occurred. Please try again.");

      }

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <ToastContainer />
      <Card className="w-[500px]">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>Be a member of our community</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  placeholder="Enter your Username"
                  value={data.username}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="Enter your Email"
                  value={data.email}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={data.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <PasswordInput
                  id="password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="confirm_password">Confirm Password</Label>
                <PasswordInput
                  id="confirm_password"
                  name="confirm_password"
                  value={data.confirm_password}
                  onChange={handleChange} />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link to="/Login">
              Log in
            </Link>
            <Button type="submit" disabled={loading}>
              Register
            </Button>
          </CardFooter>
        </form>
        {loading && (
          <div className="loader-overlay">
            <span className="loader"></span>
          </div>
        )}
      </Card>
      <style>{`
        .loader-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999; /* Ensure it's on top */
        }
        .loader {
          width: 4.8px;
          height: 4.8px;
          display: block;
          position: relative;
          border-radius: 4px;
          color: #FFF;
          background: currentColor;
          box-sizing: border-box;
          animation: animloader 0.3s 0.3s linear infinite alternate;
        }
        .loader::after,
        .loader::before {
          content: '';  
          box-sizing: border-box;
          width: 4.8px;
          height: 4.8px;
          border-radius: 4px;
          background: currentColor;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 15px;
          animation: animloader 0.3s 0.45s linear infinite alternate;
        }
        .loader::after {
          top: -15px;
          animation-delay: 0s;
        }
        @keyframes animloader {
          0% { width: 4.8px }
          100% { width: 48px }
        }
      `}</style>
    </div>
  );
}
