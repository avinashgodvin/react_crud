import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";

const ViewUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const { email } = useParams();
  console.log(email);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async (event) => {
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
        console.log(response.data);
        setLoading(true);
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container px-4">
      <div className="text-center py-3">
        <Link className="btn btn-primary mb-3" to="/">
          Go back
        </Link>
      </div>
      {loading ? (
        <div className="container mt-2">
          <ul class="list-group">
            <li class="list-group-item">
              <span className="font-weight-bold">Name :</span> {user.name}
            </li>
            <li class="list-group-item">
              <span className="font-weight-bold">Email :</span> {user.email}
            </li>
            <li class="list-group-item">
              <span className="font-weight-bold">Phone Number :</span>{" "}
              {user.phone}
            </li>
          </ul>
        </div>
      ) : (
        <div className="text-center mt-5">
          <ReactBootstrap.Spinner animation="border" variant="success" />
        </div>
      )}
    </div>
  );
};

export default ViewUser;
