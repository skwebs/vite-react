import "./scss/main.scss";
//import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import { BrowserRouter } from "react-router-dom";
import RouteComponent from "./components/RouteComponent";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';


// axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.baseURL = "https://anshumemorial.in/lv8_api/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
//axios.defaults.withCredentials = true;

// axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`;

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <RouteComponent />
      </BrowserRouter>
    </>
  )
}

export default App;
