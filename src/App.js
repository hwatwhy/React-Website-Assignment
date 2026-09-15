import NavBar from "./components/NavBar";
import "./App.css";
import Dogs from "./components/release_form";
import Cats from "./components/Cats";
import Home from "./components/Home";
import Contact_us from "./components/Contact_us";
import Services from "./components/Petcare_guides";
import Footer from "./components/Footer";
import Adopt_us from "./components/Adopt_us";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Forget_Password from "./components/Forget_Password";
import Adopt_form from "./components/Adopt_form";
import Feedback from "./components/Feedback";
import AnimalDetails from './components/AnimalDetails'
import Volunter_form from "./components/Volunter_form";
import Donation_form from "./components/Donation_form";
import Dashboard from "./components/Dashboard";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


// import "./style.css";

function App() {
  return (
    <>
    
      <Router>
        <NavBar />

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/funcat" element={<Cats />} />
            <Route path="/fundog" element={<Dogs />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/adopt_us" element={<Adopt_us />} />
            <Route path="/contact_us" element={<Contact_us />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/signup" element={< Signup />} />
            <Route path="/forget_password" element={< Forget_Password />} />
            <Route path="/adopt_form/:id" element={<Adopt_form />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/animal/:id" element={<AnimalDetails />} />
            <Route path="/volunter" element={<Volunter_form />} />
            <Route path="/donation" element={<Donation_form />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/:id" element={<Dashboard />} />
          </Routes>
        </div>

        <div className="Footer">
          <Footer />
        </div>
        
      </Router>
    </>
  );
}

export default App;
