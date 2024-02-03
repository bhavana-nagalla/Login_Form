import React,{useState}from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Dashboard from "./dashboard";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';

const Login=()=>{
    let navigate=useNavigate();
    const [item,setItem]=useState({
        email:"",
        password:""
    
      })

      const changeHandler=e=>{
        setItem({...item,[e.target.name]:e.target.value})
      }
    
      const submitHandler=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:2000/login",item).then(
            res=>{
                if(res.data[0] == 'Login successfull'){
                    console.log(res.data);
                    navigate('/dashboard',{state:{username:res.data[1]}});
                }
                else{
                    alert(res.data);
                }
            }
            
          
        )
      }
    return(
        <div>
            <br />
            <center>
            <Card style={{ width: '25rem',height:'25rem' }} className="card">
                <Card.Body>
                    <h2>Login</h2>
                    <br />
                    
                    <Form onSubmit={submitHandler} autoComplete="off">
                        <Form.Group className="mb-3">
                        <h5 className="d-flex justify-content-between align-items-start">User Id</h5>
                        <Form.Control size="default" name="email" autofocus="on" type="email" placeholder="name@example.com" onChange={changeHandler} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                        <h5 className="d-flex justify-content-between align-items-start">Password</h5>
                        <Form.Control type="password" name="password" placeholder="Enter password" onChange={changeHandler}/>
                        </Form.Group>
                        <Button type="submit" value="login" variant="primary">Login</Button>
                    </Form>
                    <br />
                
                <h5>New User? &nbsp;
                <Link to={`/register`}>Register</Link></h5>
                    
                </Card.Body>
            
                </Card>
            </center>
        </div>
    )
}

export default Login;