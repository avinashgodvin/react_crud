import React, { useState , useEffect} from "react";
import axios from "axios";
import {  useHistory, useParams, Link} from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";
import { Button, Modal } from "react-bootstrap";


const EditUser = () => {
    

    let history = useHistory();
    const [loading, setLoading] =useState(false)
    const [isUpdating, setUpdating] =useState(false)
    const [show, setShow] =useState(false)
    const {email1} = useParams();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { name, email, phone } = user;

  const onChangeHandle = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(()=>{
    loadUser()
},[]);


  const loadUser= async (event)=>{
          
        const result = await axios.post("https://react-crud-backend-v1.herokuapp.com/find",{"email":email1},{
            headers: {
            'Content-Type': 'application/json'
            }
          }).then((response)=>{
            setLoading(true)
            console.log(response)
            console.log(response.data)
            setUser(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
        
  }



  const onSubmitHandle = async (e) => {
    e.preventDefault();

    let data = { name: user.name, email: user.email, phone: user.phone };
    console.log(data)
    setUpdating(true)
    await axios.post('https://react-crud-backend-v1.herokuapp.com/update',user, {
        headers: {
        'Content-Type': 'application/json'
        }
      }
    )
    .then((response)=>{
        
        console.log(response)

    })
    .catch((error)=>{
        console.log(error)
    })
    // console.log(user);
    
    setShow(true)
    setUpdating(false)
    
    // history.push("/");

  };

  return (
    
    <div>
          <div>
          <Modal show={show}>
            <Modal.Header>Success</Modal.Header>
            <Modal.Body>
              Student Data updated Succesfully
            </Modal.Body>
            <Modal.Footer>
                <Link className="btn btn-primary" to="/">Ok</Link>
            </Modal.Footer>
          </Modal>
        </div>
      {loading?(
    <div className="container py-3 border mt-5 ">
      <h3 className="text-center mb-5 mt-2 font-weight-light text-uppercase">Edit Student's data</h3>
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
            disabled
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
          <button type="submit" class="btn btn-warning btn-lg">
          {isUpdating ? "Updating...":"Update"}
          </button>
        </div>
      </form>
    </div>):(      <div className="text-center mt-5">
          <ReactBootstrap.Spinner animation="border" variant="success" />
        </div>)}
  </div>
  );
};

export default EditUser;
