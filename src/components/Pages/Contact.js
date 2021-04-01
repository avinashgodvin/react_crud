import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <div className="py-4">
          <h1 >Contact Us</h1>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div class="mb-3">
              <label for="exampleInputDesc" class="form-label">
                Brief Message
              </label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
          </div>
      </div>
    );
  }
}

export default Contact;
