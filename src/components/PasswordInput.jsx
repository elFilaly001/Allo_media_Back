import React, { useState } from "react";
import { Button } from "./ui/button"; // Assuming you're using a button component from your UI library
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const checkPasswordStrength = (pass) => {
    let strength = 0
    if (pass.length > 8) strength += 20
    if (pass.match(/[a-z]+/)) strength += 20
    if (pass.match(/[A-Z]+/)) strength += 20
    if (pass.match(/[0-9]+/)) strength += 20
    if (pass.match(/[$@#&!]+/)) strength += 20
    setPasswordStrength(strength)
    setUser({...user, password: pass})
}

  return (
    
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Enter your password"
          // onChange={(e) => checkPasswordStrength(e.target.value)}
        />
        <Button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 px-4"
        >
          {showPassword ? <i class="fa-regular fa-eye-slash"></i> : <i class="fa-regular fa-eye"></i>}
        </Button>
      </div>
  );
}
