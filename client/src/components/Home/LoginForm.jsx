import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import "./LoginFormStyle.css";
import Logo from "../../assets/pipiLogo.png";

const LoginForm = props => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [withEmail, setEmail] = useState(false);

  console.log(enteredEmail, enteredPassword);

  const [emailHandler] = useMutation(POST_MUTATION, {
    variables: {
      input: { mail: enteredEmail }
    },
    errorPolicy: "all"
  });

  const [checkHandler] = useMutation(POST_MUTATION, {
    variables: {
      input: { mail: enteredEmail }
    },
    errorPolicy: "all"
  });

  const submitHandler = event => {
    event.preventDefault();
    /*  */
  };
  return (
    <div className="pantalla">
      <img src={Logo} style={{ borderRadius: "50%", height: "40vh" }} alt="" />

      <div className="LoginForm">
        <p className="LogoTitle">PIPI CHAT ™</p>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={enteredEmail}
              onChange={event => {
                setEnteredEmail(event.target.value);
              }}
            />
          </Form.Group>

          {withEmail === false ? (
            <>
              <div className="btn" onClick={() =>{ emailHandler(); setEmail(!withEmail);}}>
                <p>Send Me Code</p>
              </div>
            </>
          ) : (
            <>
              {" "}
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Security Code</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Insert Security Code"
                  value={enteredPassword}
                  onChange={event => {
                    setEnteredPassword(event.target.value);
                  }}
                />
              </Form.Group>
              <Link to={"/chat"}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p>Log In</p>
                </div>
              </Link>
            </>
          )}
        </Form>
      </div>
    </div>
  );
};

LoginForm.propTypes = {};

export default LoginForm;

const POST_MUTATION = gql`
  mutation validationCode($input: RegisterInput) {
    validationCode(input: $input) {
      message
    }
  }
`;

const POST_MUTATION_VALIDATION = gql`
mutation signUp ( $input: RegisterInput){
  signUp(input: $input){
    message
  }
}
`