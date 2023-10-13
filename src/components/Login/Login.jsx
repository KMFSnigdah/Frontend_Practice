import { useState } from "react";
import { LoginRequest } from "../../models/LoginRequest";
import { LoginResponse } from "../../models/LoginResponse";
import { ErrorResponse } from "../../models/ErrorResponse ";
import { useNavigate } from "react-router-dom";
import * as AuthService from '../../services/authService';

const Login = () => {
    const initialLoginData = new LoginRequest('', '');
    const [loginData, setLoginData] = useState(initialLoginData);
    const [token, setToken] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await AuthService.login(loginData);
            console.log(response)
            const responseData = new LoginResponse(response.email, response.token);
            setToken(responseData.token);
            localStorage.setItem('token', responseData.token);

            navigate("/home");
        } catch (error) {

            const errorResponse = error.response.data;
            const customError = new ErrorResponse(
                errorResponse.timestamp,
                errorResponse.message,
                errorResponse.details
            );
            console.log(customError)
            setError(customError);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            />
            <input
                type="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />
            <button onClick={handleLogin}>Login</button>

            {token && <p>Token: {token}</p>}


            {error && (
                <div>
                    <p>Error Message: {error.message}</p>
                    <p>Error Timestamp: {error.timestamp}</p>
                </div>
            )}
        </div>
    )
}

export default Login;