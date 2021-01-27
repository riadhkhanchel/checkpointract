//import logo from './logo.svg';

import {
  Button,
  Label,
  FormGroup,
  Form,
  Alert,
  Breadcrumb,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";

import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

import "./App.css";

function App() {
  return (
    //<div class="progress">
    // <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
    //</div>
    <div class="signInform">
      <h1> Registration Form </h1>
      <Form class="formGlobal">
        <Form.Group controlId="formBasicRange">
          <Form.Label>Range</Form.Label>
          <Form.Control type="range" />
        </Form.Group>
        <Row>
          <Col>
            <FormGroup>
              <Form.Label>First Name </Form.Label>
              <Form.Control type="Text" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="Text" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="email@email.com" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="password" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Form.Label>Country </Form.Label>
              <Form.Control type="Text" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Form.Label>City</Form.Label>
              <Form.Control type="Text" />
            </FormGroup>
          </Col>
        </Row>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button> Register </Button>
        <Form.Group>
          <Form.File id="exampleFormControlFile1" label="upload your file" />
        </Form.Group>
        <Form.Group>
          Your can login with your Facebook Account or Gmail Account
        </Form.Group>
        <Form.Group>
          <div class="socialButtons">
            <FacebookLoginButton
              iconSize="26px"
              //ClassName="div.fb-login-button"
              onClick={() => alert("Login with FaceBook")}
            />
            <GoogleLoginButton
              // ClassName="mt-10 mb-30"
              onClick={() => alert("Login with google")}
            />
          </div>
        </Form.Group>
      </Form>
    </div>
  );
}

export default App;
