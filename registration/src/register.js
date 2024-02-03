import React,{useState}from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const Register=()=>{
    let navigate=useNavigate();
    const [data,setData]=useState({
        username:'',
        email:'',
        mblno:'',
        password:'',
        confirmpassword:''
    })
    const {username,email,mblno,password,confirmpassword}=data;
    
    const changeHandler=e=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        var letters = /^[a-zA-Z]+$/;
        var num = /^[0-9]{10}$/;
        let passwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d!@#$%^&*]{8,16}$/;
        if(!(username.trim().split(" ").join("").match(letters))){
            console.log("Enter valid Name(username shouls contain Alphabets only)")
            alert("Enter valid Name(username shouls contain Alphabets only)");
        }
        else if(!(password.match(passwd))){
            console.log("Invalid password");
            alert("Invalid password");
        }
        else if(password != confirmpassword){
            alert("passwords are not matching");
        }
        else if(!(mblno.match(num))){
            console.log("Invalid Mobile");
            alert("Invalid Mobile");
        }
        
        else{
            axios.post("http://localhost:2000/adduser",data).then(
            res=>{
            if(res.data == "Registered Successfully"){
                alert(res.data);
                navigate('/');
            }
            else
                alert(res.data);
            }
            )
        }
    }

    return(
        <div>
            <center>
            <Card style={{ width: '25rem'}} className="card">
                <Card.Body>
                    <h2>Register</h2>
                    <br />
                    
                    <Form onSubmit={submitHandler} autoComplete="off" >
                        <Form.Group className="mb-3">
                        <h5 className="d-flex justify-content-between align-items-start">Username</h5>
                        <Form.Control size="default" name="username" type="text" autofocus="on" placeholder="Enter name" onChange={changeHandler} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                        <h5 className="d-flex justify-content-between align-items-start">Email</h5>
                        <Form.Control type="email" name="email" placeholder="name@example.com" autoComplete="off" onChange={changeHandler}/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                        <h5 className="d-flex justify-content-between align-items-start">Phone</h5>
                        <Form.Control type="text" name="mblno" placeholder="Enter mobile" autoComplete="off" onChange={changeHandler}/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                        <h5 className="d-flex justify-content-between align-items-start">Password</h5>
                        <Form.Control type="password" name="password" placeholder="Enter password" onChange={changeHandler}/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                        <h5 className="d-flex justify-content-between align-items-start">ConfirmPassword</h5>
                        <Form.Control type="password" name="confirmpassword" placeholder="Enter confirmpassword" onChange={changeHandler}/>
                        {password===confirmpassword ? null : <p className="d-flex justify-content-between align-items-start" style={{color:"red"}}>passwords are not matching</p>}
                        </Form.Group>
                        <Button type="submit" value="register" variant="primary">Register</Button>
                    </Form>
                    <br />
                    
                </Card.Body>
            
                </Card>
            </center>
        </div>
    )
}

export default Register;