import { useState } from "react";

const Validation = (Email, Password) => {

  const [email] = useState('a');
  const [pass] = useState('123');
  const [flag , setFlag] = useState(false);
  const [msg, setMsg] = useState('');

  
  const handleLogin = () => {
    if (Email == email && Password == pass) {
      setMsg('Login successfully');
      setFlag  ('true') ;
    }
    else {
      setMsg('Invalid email or password');
   
    }
  }
  return { msg, handleLogin,flag  };
};

export default Validation;