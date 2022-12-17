import React, { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isAdding, setAdding] = useState(false);
  const [show, setShow] = useState(false);
  const [showErrorEmail, setShowErrorEmail] = useState(false);
  const { name, email, phone } = user;

  const onChangeHandle = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmitHandle = async (e) => {
    e.preventDefault();
    setAdding(true);
    let data = { name: user.name, email: user.email, phone: user.phone };
    console.log(data);

    await axios
      .post(
        "https://react-crud-backend.onrender.com/find",
        { email: email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
        // console.log(response.data.email)
        if (response.data !== "") {
          setShowErrorEmail(true);

          setAdding(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    // {showErrorEmail?(setAdding(false)):(setAdding(true))}

    await axios
      .post("https://react-crud-backend.onrender.com/add", user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setAdding(true);
        console.log(response);
        setShow(true);
        setAdding(false);
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log(user);

    // history.push("/");
  };

  return (
    <div className="container px-4">
      <div className="container py-3 border mt-2 ">
        <div>
          <Modal show={show}>
            <Modal.Header>Success</Modal.Header>
            <Modal.Body>Student Added Succesfully</Modal.Body>
            <Modal.Footer>
              <Link className="btn btn-primary" to="/">
                Ok
              </Link>
            </Modal.Footer>
          </Modal>
        </div>
        <div>
          <Modal show={showErrorEmail}>
            <Modal.Header>Email exists</Modal.Header>
            <Modal.Body>
              Please enter a different mail address , the above provided mail
              already exist
            </Modal.Body>
            <Modal.Footer>
              <Link
                className="btn btn-primary"
                onClick={() => {
                  setShowErrorEmail(false);
                }}
              >
                Ok
              </Link>
            </Modal.Footer>
          </Modal>
        </div>
        <h3 className="text-center mb-3 font-weight-light text-uppercase">
          Add A Student
        </h3>
        <form className="ml-5 mr-5" onSubmit={(e) => onSubmitHandle(e)}>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Enter you name"
              required
              name="name"
              value={name}
              onChange={(event) => onChangeHandle(event)}
            />
          </div>
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter you email : test@gmail.com "
              required
              name="email"
              value={email}
              onChange={(event) => onChangeHandle(event)}
            />
          </div>
          <div class="mb-3">
            <input
              type="tel"
              class="form-control"
              pattern="^\d{10}$"
              id="phone"
              placeholder="Enter your mobile number(10 digits) . Ex : 0123456789"
              required
              name="phone"
              value={phone}
              onChange={(event) => onChangeHandle(event)}
            />
          </div>

          <div class="text-center">
            <button type="submit" class="btn btn-primary btn-lg">
              {isAdding ? "Processing ..." : "Add Student"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
