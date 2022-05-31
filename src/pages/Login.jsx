import { Container, Card } from "react-bootstrap";
// import bgImage from "../images/laptop-typing.jpg";
import "./login.scss";
const Login = () => {
const [isLoding, setIsLoading] = useState(false);
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    error_list: []
  });

  const handleInputChange = e => {
    // e.preventDefault();
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
    console.log(inputData);
  };
  
const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    const { email, password } = inputData;
}


  return (
    <div id="login">
      <Container >
        <Card className="mx-auto" style={{ maxWidth: 400 }}>
          <Card.Body>
            <Card.Title className="text-center">Login Page</Card.Title>
            <form onSubmit={handleSubmit} autoComplete="off">

              <div className="form-group mb-2">
                <label htmlFor="name">Email</label>
                <input type="email" id="email"    onChange={handleInputChange} value={inputData.email} className="form-control" />
              </div>

              <div className="form-group mb-2">
                <label htmlFor="password">Password</label>
                <input type="password" onChange={handleInputChange} value={inputData.password}  id="password" className="form-control" />
              </div>

              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary fw-bolder">Login</button>
              </div>
            </form>

          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default Login
