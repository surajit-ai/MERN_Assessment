import React, { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import { Link, useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('uid')) {
            navigate('/')
        }
    }, [])

    return (
        <div>
            <center>
                <Button
                    onClick={() => {
                        localStorage.removeItem('uid')
                        localStorage.removeItem('token')
                        localStorage.removeItem('username')
                        localStorage.removeItem('useremail')
                    }}
                > <Link as={Link} to="/" style={{ color: 'black' }}>LOGOUT</Link></Button>
                <br />
                <h4>LogIn Sucsscsfull</h4>
                <h1>This is Home Page</h1>
            </center>
        </div>
    )
}
export default Home;