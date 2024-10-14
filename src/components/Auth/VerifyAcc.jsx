import axios from "axios";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";


export default function VerifyAcc(){

    const location = useLocation(); 
    const queryParams = new URLSearchParams(location.search); 
    const token = queryParams.get("token");  
    const navigate = useNavigate();

    useEffect(() => { 
        async function verifyEmail() {
            try {
              const response = await axios.get(
                `http://localhost:3000/api/Auth/VerifyAcc?token=${token}`
              );
              
              if (response.status === 200) {
                console.log("Verification successful, navigating to /Login");
                navigate("/Login");
                
              } else {
                console.log("Unexpected response status:", response.status);
              }
            } catch (error) {
              console.error("Error during verification:", error);
            }
          }
        
        if (token) {
            verifyEmail();
        }
    }, [token]);
    
    return
}