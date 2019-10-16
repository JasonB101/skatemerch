import React, { useState } from "react";
import Styles from "Login.module.scss"

const Login = (props) => {

    const [credentials, changeCredentials] = useState(
        {
            username: "",
            password: ""
        }
    )

    return (
        <div className={Styles.wrapper} >
            
        </div>
    );
}

export default Login;