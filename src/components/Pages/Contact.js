import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      email: "",
      message: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      show: true,
    });
  }

  onChangeHandle = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="container px-4">
        <div>
          <Modal show={this.state.show}>
            <Modal.Header>Mesage Received</Modal.Header>
            <Modal.Body>
              Thank you for Contacting , Your Message has been received . We
              will get in touch with you soon
            </Modal.Body>
            <Modal.Footer>
              <Link className="btn btn-primary" to="/">
                Ok
              </Link>
            </Modal.Footer>
          </Modal>
        </div>

        <div className="container border mt-2 shadow mb-5 bg-white rounded">
          <div className="py-4">
            <h1 className="text-center text-uppercase py-2 mb-5 font-weight-light">
              Contact Us
            </h1>
            <form
              onSubmit={(event) => {
                this.handleSubmit(event);
              }}
            >
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                  name="email"
                  value={this.state.email}
                  onChange={this.onChangeHandle}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div className="mb-3">
                <label for="exampleInputDesc" className="form-label">
                  Brief Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  required
                  name="message"
                  value={this.state.message}
                  onChange={this.onChangeHandle}
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary text-center btn-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
