import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import ShowData from "../Pages/ShowData";

const deleteUser = async (email) => {
  await axios
    .post(
      "https://react-crud-backend.onrender.com/delete",
      { email: email },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  // console.log(user);
};

export default deleteUser;
