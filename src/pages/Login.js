import { useState } from "react";
import { connect } from "react-redux";
import { login } from "../actions/auth/login";

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username !='' && password != '') {
            props.login({
                username : username,
                password : password
            })
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} >
                <div className="field-wrapper">
                    <input
                        type="text"
                        id="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="field-wrapper">
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn-login">Login</button>
                <span className="psw" >Forgot Password? </span>
                <span className="signup" >Not a user? Sign up</span>
            </form>
        </div>
    )
}

function mapStateToProps(state){
    return state.isLoggedIn
}
export default connect(mapStateToProps, {login})(Login);