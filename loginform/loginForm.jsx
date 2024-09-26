import React, {useState} from 'react';
import './style.module.css'

function LoginForm(props) {
    const [login,setLogin] = useState(true)
    return (
        <>

    <div className="container">
        <div className="form-container">
            <div className="form-toggle">
            <button className={login?'active':''} onClick={()=>setLogin(true) }>Login</button>
            <button className={!login?'active':''} onClick={()=>setLogin(false) }>Signup</button>
            </div>
            {login?<><div className={'form'}><h2>Login Form</h2>
            <input type={"email"} placeholder={"Type Your Email"}/>
            <input type={"password"} placeholder={"Type Your Password"}/>
            <a href={"#"}>Forget your password</a>
            <button>Login</button>
            <p>Not a Member ? <a href={"#"} onClick={()=>setLogin(false)}>Sign Up</a> </p></div> </>:<>
                <div className={"form"}><h2>Signup Form</h2>
                    <input type={"email"} placeholder={"Type Your Email"}/>
                    <input type={"password"} placeholder={"Type Your Password"}/>
                    <input type={"password"} placeholder={"Confirm Your Password"}/>
                    <button>Signup</button>
                </div>
            </>}
        </div>
    </div>
        </>
    );
}

export default LoginForm;