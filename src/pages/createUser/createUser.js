import React , {useState} from "react";
import "./createUser.css";
import axios from "axios";

const CreateUser = () => {

    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');

    function createUserHandler () {
        
        console.log(userName);
        console.log(password);


    
        axios.post('http://192.168.0.102:4000/user-service/user/login', {
            username: userName,
            password: 'Flinzxczxczxctstone'
          })
          .then(function (response) {
            console.log(response,'ss');
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    function userNameHandler (event) {
        setUserName(event.target.value)
    }
    function passwordHandler (event) {
        setPassword(event.target.value)
    }
  return (
    <main className="create-user-container">
      <div className="box">
        <input onChange={userNameHandler} value={userName} type="text" placeholder="شماره تلفن همراه خود را وارد کنید" />
        <input onChange={passwordHandler} value={password} type="password" placeholder="رمز خود را وارد کنید" />
        <button onClick={createUserHandler}> ثبت نام</button>
      </div >
    </main>
  );
};

export default CreateUser;
