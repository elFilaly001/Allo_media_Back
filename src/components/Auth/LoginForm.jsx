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
import { Link, useNavigate } from 'react-router-dom';
import AuthContextProvider from "../../context/AuthContext";
import { AuthContext } from "../../context/AuthContext";



export default function RegisterForm() {
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const validateForm = () => {
        // Basic validation rules
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(data.email)) {
            toast.error("Please enter a valid email address.");
            return false;
        }

        if (data.password.length < 6) {
            toast.error("Password must be at least 6 characters long.");
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

    const { user, setUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            if (validateForm === false) {
                log
                return false
            }
            const response = await axios.post('http://localhost:3000/api/Auth/Login', data);
            if (response.status === 200) {
                // console.log(response.data.id);
                setUser(response.data.id)
                localStorage.setItem("user", JSON.stringify({ id: response.data.id, token: response.data.token }))
                console.log(response.data.token);
                toast.success("Logged in successfully , You will be redirected to enter OTP code");
                setTimeout(() => {
                    navigate("/OTP")
                }, 6000);
            }
        } catch (error) {
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
                        <CardTitle>Login</CardTitle>
                        <CardDescription>Welcome back!</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    placeholder="Enter your Email"
                                    value={data.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">Password</Label>
                                <PasswordInput
                                    id="password"
                                    name="password"
                                    value={data.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Forgot Password Link */}
                            <div className="flex justify-end">
                                <Link to="/ForgetPassword" className="text-sm hover:underline">
                                    Forgot Password?
                                </Link>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Link to="/register">Register</Link>
                        <Button type="submit" disabled={loading}>
                            Log in
                        </Button>
                    </CardFooter>
                </form>

                {/* Loader */}
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
