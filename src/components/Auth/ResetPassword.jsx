import React, { useContext, useState } from "react";
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
import { Link, useNavigate, useLocation } from 'react-router-dom';



export default function ResetPassword() {
  const [data, setData] = useState({
    password: '',
    confirm_password: '',
  });

  const validateForm = () => {
    // Basic validation rules
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (data.password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return false;
    }
    if (data.confirm_password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return false;
    }

    if (data.confirm_password != data.password) {
      toast.error("Passwords do not match.");
      return false;
    }

    return true;
  };
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();


    console.log(token);

    try {
      console.log(data)
      validateForm()
      setLoading(true);
      if (validateForm() == true) {
        const response = await axios.post(`http://localhost:3000/api/Auth/ChangePassword?token=${token}`, data);
        if (response.status === 200) {
          // navigate("/OTP")
          toast.success("Logged in successfully");
        }
      }

    }
    catch (error) {
      if (error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error("An error occurred. Please try again.");
      }
      console.log(error);

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
            <CardTitle>Reset Password</CardTitle>
            <CardDescription>Please enter your new password</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              {/* New Password Input */}
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
          <CardFooter className="flex justify-end">
            <Button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Reset Password"}
            </Button>
          </CardFooter>
        </form>

        {/* Loader for the form */}
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
