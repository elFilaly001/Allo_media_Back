import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from '../components/Auth/RegisterForm.jsx'
// import LoginForm from '../components/Auth/LoginForm.jsx'

function Routers() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/Register" element={<RegisterForm />} />
          {/* <Route path="/Login" element={<LoginForm />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default Routers;
