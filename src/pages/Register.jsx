import { useState } from "react";
import axios from "axios";
import { Container, Card } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import Loading from "../components/Loading";
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2';


const Register = () => {
  const [isLoding, setIsLoading] = useState(false);
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    error_list: []
  });

  const handleInputChange = e => {
    // e.preventDefault();
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
    console.log(inputData);
  };

  const sAlert = (htmlMsg, type = "success") => {
    Swal.fire({
      // title: 'Auto close alert!',
      html: htmlMsg,
      timer: 2000,
      width: 'auto',
      timerProgressBar: true,
      showConfirmButton: false,
      icon: type
    })
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    const { name, email, password, confirmPassword } = inputData;

    if (name === "") {
      setInputData({ ...inputData, error_list: { name: "Name is required" } });
      setIsLoading(false);
      sAlert("Name is required", "warning");
      return;
    } else if (name.length < 3) {
      setInputData({ ...inputData, error_list: { name: "Name must be at least 3 characters" } });
      sAlert("Name must be at least 3 characters", "error");
      setIsLoading(false);
      return;
    } else if (email === "") {
      setInputData({ ...inputData, error_list: { email: "Email is required" } });
      sAlert("Email is required", "error");
      setIsLoading(false);
      return;
    } else if (email.indexOf("@") === -1) {
      setInputData({ ...inputData, error_list: { email: "Email is invalid" } });
      sAlert("Email is invalid", "error");
      setIsLoading(false);
      return;
    } else if (email.indexOf(".") === -1) {
      setInputData({ ...inputData, error_list: { email: "Email is invalid" } });
      sAlert("Email is invalid", "error");
      setIsLoading(false);
      return;
      // } else if (email.toLowerCase().match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      //   setInputData({ ...inputData, error_list: { email: "Email is invalid" } });
      //   setIsLoading(false);
      //   return;
    } else if (password === "") {
      setInputData({ ...inputData, error_list: { password: "Password is required" } });
      sAlert("Password is required", "error");
      setIsLoading(false);
      return;
    } else if (password.indexOf(" ") !== -1) {
      setInputData({ ...inputData, error_list: { password: "Password cannot contain spaces" } });
      sAlert("Password cannot contain spaces", "error");
      setIsLoading(false);
      return;
    } else if (password.search(/[a-z]/) === -1) {
      setInputData({ ...inputData, error_list: { password: "Password must contain at least one lowercase letter" } });
      sAlert("Password must contain at least one lowercase letter", "error");
      setIsLoading(false);
      return;
    } else if (password.search(/[A-Z]/) === -1) {
      setInputData({ ...inputData, error_list: { password: "Password must contain at least one uppercase letter" } });
      sAlert("Password must contain at least one uppercase letter", "error");
      setIsLoading(false);
      return;
    } else if (password.search(/[0-9]/) === -1) {
      setInputData({ ...inputData, error_list: { password: "Password must contain at least one number" } });
      sAlert("Password must contain at least one number", "error");
      setIsLoading(false);
      return;
    } else if (password.search(/[!@#$%^&*()_+\-=;,.]/) === -1) {
      setInputData({ ...inputData, error_list: { password: "Password must contain at least one special character" } });
      sAlert("Password must contain at least one special character", "error");
      setIsLoading(false);
      return;
    } else if (password.length < 8) {
      setInputData({ ...inputData, error_list: { password: "Password must be at least 8 characters" } });
      sAlert("Password must be at least 8 characters", "error");
      setIsLoading(false);
      return;
    } else if (password.length > 20) {
      setInputData({ ...inputData, error_list: { password: "Password must be less than 20 characters" } });
      sAlert("Password must be less than 20 characters", "error");
      setIsLoading(false);
      return;
    } else if (confirmPassword === "") {
      setInputData({ ...inputData, error_list: { confirmPassword: "Confirm Password is required" } });
      sAlert("Confirm Password is required", "error");
      setIsLoading(false);
      return;
    } else if (password !== confirmPassword) {
      setInputData({ ...inputData, error_list: { confirmPassword: "Password and Confirm Password doesn't match" } });
      sAlert("Password and Confirm Password doesn't match", "error");
      setIsLoading(false);
      return;
    }
/*let headers =  {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    };*/
    try {
      /*await axios.get('/sanctum/csrf-cookie');
      const res = await axios.post("/api/register", {
        name,
        email,
        password,
        confirmPassword
      }
    );*/
     let url = "https://anshumemorial.in/lv8_api/api/users";
    const res = await axios.post(url, {name, email, password,password_confirmation:confirmPassword
    })
    /*.then(function (response) {
        console.log(response)
        alert(JSON.stringify(response.data.token));
        // do whatever you want if console is [object object] then stringify the response
    })*/
    alert(JSON.stringify(res.data));


      if (res.data.error) {
        setInputData({ ...inputData, error_list: res.data.validation_errors });
        setIsLoading(false);
        toast.error(JSON.stringify(res.data.validation_errors));
        sAlert(JSON.stringify(res.data.validation_errors));
        for (let msg in res.data.validation_errors) {
          sAlert(`${msg}: ${res.data.validation_errors[msg]}`, "error");
          console.log(`${msg}: ${res.data.validation_errors[msg]}`);
        }

        return;
      } else {
        toast.success(JSON.stringify(res.data));
        sAlert(JSON.stringify(res.data));
        setIsLoading(false);
      }

      setInputData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        error_list: []
      });
      setIsLoading(false);
      toast.success("Register Successfully");
      sAlert("Register Successfully");
    } catch (error) {
      console.table(error);
    }

  };


  // const handleSubmit = e => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   console.log(inputData);
  //   const data = {
  //     name: inputData.name,
  //     email: inputData.email,
  //     password: inputData.password,
  //     confirmPassword: inputData.confirmPassword
  //   }
  //   console.log(data);
  //   axios.get('/sanctum/csrf-cookie').then(response => {
  //     axios.post(`api/register`, data).then(res => {
  //       setIsLoading(false);
  //       if (res.data.status === 200) {
  //         toast.success(res.data.message);
  //         setInputData({ name: "", email: "", password: "", confirmPassword: "", error_list: [] });
  //       } else {
  //         setInputData({ ...inputData, error_list: res.data.validation_errors });
  //         toast.error(inputData.error_list.email);
  //       }
  //     })
  //   });
  // };

  return (
    <div id="login">
      <Loading show={isLoding} text={`Processing...`} />
      <ToastContainer />
      <Container>
        <Card className="mx-auto mt-3 mt-md-5" style={{ maxWidth: 400 }}>
          <Card.Body>
            <Card.Title className="text-center">Registration Form</Card.Title>
            <form autoComplete="off" onSubmit={handleSubmit}>

              <div className="form-group mb-2">
                <label htmlFor="name">Name</label>
                <input onChange={handleInputChange} value={inputData.name} name="name" type="text" id="name" className="form-control" autoComplete="name" />
                {/*<small className="text-danger">{inputData.error_list.name}</small>*/}
              </div>

              <div className="form-group mb-2">
                <label htmlFor="name">Email</label>
                <input onChange={handleInputChange} value={inputData.email} name="email" type="email" id="email" className="form-control" autoComplete="email"/>
                <small className="text-danger">{inputData.error_list.email}</small>
              </div>

              <div className="form-group mb-2">
                <label htmlFor="password">Password</label>
                <input onChange={handleInputChange} value={inputData.password} name="password" type="password" id="password" className="form-control" autoComplete="new-password" />
                <small className="text-danger">{inputData.error_list.password}</small>
              </div>

              <div className="form-group mb-2">
                <label htmlFor="cPassword">Confirm Password</label>
                <input onChange={handleInputChange} value={inputData.confirmPassword} name="confirmPassword" type="password" id="cPassword" className="form-control" autoComplete="new-password" />
                <small className="text-danger">{inputData.error_list.confirmPassword}</small>
              </div>

              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">Register</button>
              </div>

            </form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default Register
