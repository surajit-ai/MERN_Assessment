import React, { useState } from "react";
import './Login.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login(props) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMessage] = useState("");
    const [showPass, setShowPass] = useState(false);

    const onChangeEmail = (e) => setEmail(e.target.value);
    const onChangePassword = (e) => setPassword(e.target.value);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`EMAIL: ${email}`);
        console.log(`PASS: ${password}`);
        const userlogininfo = {
            email: email,
            password: password
        }
        axios.post('http://localhost:7000/user/signin', userlogininfo)
            .then(res => {
                console.log(res.data)
                alert(res.data.message)
                // setMessage(res.data.message)
                localStorage.setItem("useremail", res.data.userdata.email);
                localStorage.setItem("username", res.data.userdata.name);
                localStorage.setItem("uid", res.data.userdata._id);
                localStorage.setItem("token", res.data.token)
                navigate('/Home')
            }).catch(err => {
                console.log(err)
                setMessage('INVALID EMAIL OR PASSWORD')
            })

        setEmail('')
        setPassword('')
    }


    return (
        <>
            <center>
                <div className="backColor">
                    <h2 className="">Log in</h2>
                    <h6 style={{ color: "brown" }}>{msg}</h6>
                    <form className="form-control" style={{ marginTop: '2.5rem' }} onSubmit={handleSubmit}>
                        <p><input type="email" className="form-control" value={email} onChange={onChangeEmail} placeholder=" Enter Email" required /></p>
                        <p><input type={showPass ? "text" : "password"} className="form-control" value={password} onChange={onChangePassword} placeholder="Enter Password" required />
                            <input type="checkbox"
                                title={showPass ? "Hide password" : "Show password"}
                                onClick={() => setShowPass(prevState => !prevState)}
                            />
                            <label>Password Show/Hide</label>
                        </p>
                        <button type="submit" value="LOGIN" className="btn btn-outline-primary">LOGIN</button>
                        &nbsp;
                        <p className="text-right">
                            Create Account <Link as={Link} to="Registration">Register?</Link>
                        </p>
                    </form>
                </div>
            </center>
        </>
    )
}
export default Login;