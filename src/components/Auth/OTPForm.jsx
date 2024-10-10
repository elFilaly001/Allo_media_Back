import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { useState, useContext, useRef, useEffect } from "react";
import axios from "axios"; // Import axios
import { Button } from "@/components/ui/button";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";



export default function OTPForm() {

    const navigate = useNavigate()
    const inputRef = useRef(null)
    const { user, setUser } = useContext(AuthContext)
    // const [value, setValue] = useState("");


     useEffect( () => {
        async function stor (){
            const storedUser = localStorage.getItem('user');
            await setUser(JSON.parse(storedUser))
        }
        stor();
    }, []);   

        
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        // onsole.log("Value from state:", value);
        console.log("Value from ref:", inputRef.current.value);
        try {
             const response = await axios.post(`http://localhost:3000/api/Auth/OTPcheck?token=${user.token}`, {code:inputRef.current.value});
            if (response.status === 200) {
                console.log("sent");
                toast.success("code verified successfully");
                navigate("/Register")
            }
            console.log(response);
            
        } catch (error) {
                toast.error(error);
            
        }

    }
    const handleResend = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:3000/api/Auth/resendOTP', {id: user.id});
            if (response.status === 200) {
                console.log("sent");
                toast.success("code sent successfully");
            }
            console.log(response);
            
        } catch (error) {
                toast.error("An error occurred. Please try again.");
            
        }


    }
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            {/* <ToastContainer /> */}
            <h2 className="text-2xl mb-6">Enter the OTP Code</h2>
            <p className="mb-6">Enter the code you received in your email</p>
            <form onSubmit={handleSubmit} >
                <InputOTP maxLength={6} ref={inputRef}>
                    <div className="flex space-x-2">
                        <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                        </InputOTPGroup>
                    </div>
                </InputOTP>
            </form>
            <div className="flex justify-between items-center mt-2 w-full max-w-md">
                <form onSubmit={handleResend} className="inline">
                    <button type="submit" className="text-primary hover:underline">
                        Resend Email
                    </button>
                </form>
                <Button onClick={handleSubmit} type="button" className="ml-auto">
                    Submit
                </Button>
            </div>
        </div>)
}
