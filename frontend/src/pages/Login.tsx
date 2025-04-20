import React from 'react';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {

    const { login } = useAuth();


    return (
        <div className="login-container">
            <h2>Iniciar sesión</h2>
            <button onClick={login}>Login</button>
        </div>
    );
};

export default Login;
