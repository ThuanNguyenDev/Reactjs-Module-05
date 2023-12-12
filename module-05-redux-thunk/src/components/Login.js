import React from 'react'
import {useEffect , useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux'
import { fakeLogin } from "../redux/action";


function Login() {

    const [user , setUser] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userlogined = useSelector(state => state.userlogined);


    const changeValue = (e) => {
      setUser ({
        ...user, [e.target.name] : e.target.value
    });

    }



    const handleLogin = () => {
        dispatch(fakeLogin(user));
      };
      useEffect(() => {
        if (userlogined.username) {
          navigate("/users");
        }
      }, [userlogined, navigate]);



  return (
    <>

    <form>
        <label>Username</label>
        <input type="text" name="username" id="username" onChange={changeValue} />

        <label>Password</label>
        <input type="password" name="password" id="password" onChange={changeValue} />

        <button type="button" onClick={handleLogin}>Login</button>

    </form>
    
    
    </>
  )
}

export default Login