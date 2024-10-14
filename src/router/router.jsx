import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from '../components/Auth/RegisterForm.jsx'
import LoginForm from '../components/Auth/LoginForm.jsx'
import OTPForm from '../components/Auth/OTPForm.jsx'
import VerifyAcc from '../components/Auth/VerifyAcc.jsx';
import ForgetPassword from '../components/Auth/ForgetPassword.jsx'
import ResetPassword from '../components/Auth/ResetPassword.jsx'
function Routers() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/Register" element={<RegisterForm />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/OTP" element={<OTPForm />} />
          <Route path="/VerifyAcc" element={<VerifyAcc/>} />
          <Route path="/Resend" element={<VerifyAcc/>} />
          <Route path="/ForgetPassword" element={<ForgetPassword/>} />
          <Route path="/ResetPassword" element={<ResetPassword/>} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default Routers;
