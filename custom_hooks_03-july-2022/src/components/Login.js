import { useState } from "react";
import Nav from "./Nav";
import Validation from "./Validation";

const Login = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const {msg,handleLogin, flag} = Validation(email , pass);
    console.log(flag);
    
    if (flag == 'true'){
    return <Nav/>
    }else{
    return (
        <div >

   <h1>Login</h1> <br  />

  <input type="text"  onChange={(e) => setEmail(e.target.value)} placeholder="email"/><br  />

  <input type="password"  onChange={(e) => setPass(e.target.value)} placeholder="password"/><br  />
              
 <button type="submit" onClick={handleLogin}>Login</button>
         
 <div><h3>{msg}</h3></div>

{/* { flag ? <Navigate to="./Nav"/>: {msg}} */}

        </div >
    )};
}

export default Login;