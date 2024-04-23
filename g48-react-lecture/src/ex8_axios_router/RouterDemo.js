import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Navigate,
  useParams,
} from "react-router-dom";
import Header from "./Header";
import AxiosDemo from "./AxiosDemo";

const RouterDemo = () => {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<AxiosDemo />} />
          <Route path="/cancel"  element={<CancelBooking/>}/>
          <Route path="/details/:id"  element={<DetailsBooking/>}/>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

const Home = () => {
    const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Home component</h1>
      <a href='#' className='btn btn-outline-danger'onClick={() => navigate(-1)}>Back</a>
      <a className="btn btn-outline-info mx-1" onClick={() => navigate('/about')}>About</a>
    </div>
  );
};
const About = () => <h1>About component</h1>;
const CancelBooking = () => <h1>Cancel Booking component</h1>;

const DetailsBooking = () => {
    const param = useParams();
    
    //TODO : using useEffect you can get booking details by the id(param.id) and the set the reponseData form a API call into the booking details component diplayed as a card.

    return(
        <div className="container">
            <h3>Details</h3>
            <p>ID: {param.id}</p>
        </div>
    )

};
const NotFound = () => <h1>404 - Page Not Found</h1>;

export default RouterDemo;
