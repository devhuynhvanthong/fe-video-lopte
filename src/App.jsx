import "./App.css";

import LoginScreen from "./layout/Login/LoginScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./layout/dashboard/Dashboard";
import Phone from "./layout/phone/phone";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/:key" element={<Phone />} />
      </Routes>
    </Router>
    // <div className="">
    //   {/* <Default /> */}
    //   {/* <Langingpage />
    //    */}
    //   <LoginScreen />
    // </div>
  );
}

export default App;
