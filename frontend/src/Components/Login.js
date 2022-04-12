import { useDispatch, useSelector } from 'react-redux';
import { userChange } from '../Actions';
import '../App.css';
import img from '../Images/harvest-01.jpeg';


function Login () {
    const type = useSelector((state) => state.customerType);
    const dispatch = useDispatch();

    const myStyle={
        backgroundImage: `url(${img})`,
        height:'100vh',
        width: '100vw',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    const boxStyle = {
        //backgroundColor: 'white',
        position: 'fixed',
        right: '250px',
        bottom: '150px'
    }

    function click(e) {
        console.log(e.target.name);
        dispatch(userChange(e.target.name))
    }

    return (<div className = 'App' style={myStyle}>
        <div style={boxStyle}>
            <div style= {{display: 'flex', justifyContent: 'center'}}>
                <button onClick = {click} name = 'admin'>Admin</button>
                <button onClick = {click} name = 'owner'>Owner</button>
                <button onClick = {click} name = 'user' >User</button>
            </div>
            <form action = 'http://localhost:4000/login' method = 'POST' style={{fontSize: '30px'}}>
                <input value = {type} name= 'usertype' style={{fontSize: '20px'}}/> <br />
                <input type = "text" name= 'username' placeholder= "Enter Username" style={{fontSize: '20px'}}/> <br />
                <input type = "password" name= 'password' placeholder='Password'style={{fontSize: '20px'}}/>  <br />

                <button>New User, Registration</button>
                
                <button>Login</button>
            </form>
        </div>
    </div>)
}

export default Login;