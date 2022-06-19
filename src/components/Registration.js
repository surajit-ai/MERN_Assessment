import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Registration() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMessage] = useState("");
    const [showPass, setShowPass] = useState(false);

    const onChangeName = (e) => setName(e.target.value);
    const onChangeEmail = (e) => setEmail(e.target.value);
    const onChangePassword = (e) => setPassword(e.target.value);

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const userinfo = {
            name: name,
            email: email,
            password: password
        }
        axios.post('http://localhost:7000/user/signup', userinfo)
            .then(res => {
                setMessage(res.data.message)
            }).catch(err => {
                console.log(err)
                setMessage('Registration Error')
            })

        setName('')
        setEmail('')
        setPassword('')
    }

    return (
        <>
            <center>
                <div className="backColor">
                    <h2 className="">Registration</h2>
                    <h6 style={{ color: "brown" }}>{msg}</h6>
                    <form onSubmit={handleSubmit} className="form-control">
                        <p><input type="text" className="form-control" value={name} onChange={onChangeName} placeholder=" Enter Name" required /></p>
                        <p><input type="email" className="form-control" value={email} onChange={onChangeEmail} placeholder=" Enter Email" required /></p>
                        <p><input type={showPass ? "text" : "password"} className="form-control" value={password} onChange={onChangePassword} placeholder="Enter Password" required />
                            <input type="checkbox"
                                title={showPass ? "Hide password" : "Show password"}
                                onClick={() => setShowPass(prevState => !prevState)}
                            />
                            <label>Password Show/Hide</label>
                        </p>
                        <input type="submit" className="btn btn-outline-primary" value="REGISTER" />
                        <p className="text-right">
                            Already registered <Link as={Link} to="/">sign in?</Link>
                        </p>
                    </form>
                </div>
            </center>
        </>
    )
}
export default Registration;