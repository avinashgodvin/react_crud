import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import deleteUser from "../Users/DeleteUser";
import * as ReactBootstrap from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

export class ShowData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errMsg: "",
      isLoading: false,
      show: false,
    };
  }

  loadUsers() {
    //http://localhost:3002/findAll
    
    axios
      .get("https://react-crud-backend-v1.herokuapp.com/findAll")
      .then((response) => {
        this.setState({
          isLoading: true,
        });
        console.log(response);
        this.setState({
          posts: response.data,
        });
      })
      .catch((error) => {
        console.log(error);

        this.setState({
          errMsg: "Something went wrong",
        });
      });
  }

  componentDidMount() {
    this.loadUsers();
  }

  render() {
    const { posts, errMsg, isLoading } = this.state;
    return (
      <div>
        <div>
          <Modal show={this.state.show}>
            <Modal.Header>Success</Modal.Header>
            <Modal.Body>Deleted Successfully</Modal.Body>
            <Modal.Footer>
              <Link
                className="btn btn-primary"
                onClick={async () => {
                  await this.setState({ show: false });
                  this.loadUsers();
                }}
              >
                Ok
              </Link>
            </Modal.Footer>
          </Modal>
        </div>
        <div className="container border mt-2 shadow p-3  bg-white rounded">
          {isLoading ? (
            <div>
              {posts.length ? (
                <table class="table">
                  <thead class="table-dark">
                    <tr>
                      <th>#</th>
                      <th scope="col" className="text-center">
                        Name
                      </th>
                      <th scope="col" className="text-center">
                        Email
                      </th>
                      <th scope="col" className="text-center">
                        Phone
                      </th>
                      <th scope="col" className="ml-5">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.map((post, index) => (
                      <tr key={post.id}>
                        <td className="text-center">{index + 1}</td>
                        <td className="text-center">{post.name}</td>
                        <td className="text-center">{post.email}</td>
                        <td className="text-center">{post.phone}</td>
                        <td>
                          <Link
                            className="btn btn-primary mr-5"
                            to={`/student/view/${post.email}`}
                          >
                            View
                          </Link>
                          <Link
                            className="btn btn-outline-primary mr-5"
                            to={`/student/edit/${post.email}`}
                          >
                            Edit
                          </Link>
                          <Link
                            className="btn btn-danger"
                            onClick={async () => {
                              try {
                                await deleteUser(post.email);
                                await this.setState({
                                  show: true,
                                });
                              } catch (e) {}
                              // this.loadUsers();
                            }}
                          >
                            Delete
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="text-center my-background">
                  <h1 className="py-5 text-uppercase">No data found</h1>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center mt-5">
              <ReactBootstrap.Spinner animation="border" variant="success" />
            </div>
          )}
          {errMsg ? <Redirect to="/apierror" /> : null}
        </div>
      </div>
    );
  }
}

export default ShowData;
