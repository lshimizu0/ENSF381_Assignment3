import { useState } from "react";
import { useEffect } from "react";
import DisplayStatus from "./displayStatus";
import './styles.css';

function LoginForm({ count, setCount }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [message, setMessage] = useState("");
    const [type, setType] = useState("");

    useEffect(() => {
        // Fetch data from an API
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((result) => {
        // Set the fetched data to the state
        setData(result);
        // Set loading to false once data fetching is complete
        setIsLoading(false);
        })
        .catch((error) => {
        // Handle errors
        console.error('Error fetching data:', error);
        // Set loading to false in case of an error
        setIsLoading(false); }); }, []);

        useEffect(() => {
            if (type === "success") {
                const timer = setTimeout(() => {
                window.location.href = "/flavor";
                }, 2000);

                return () => clearTimeout(timer);
            }
            }, [type]);

    function loginLogic() {
        if (username === "" || password === "") {
            setMessage("password and username can't be empty");
            setType("error");
            return;
        }

        if (password.length < 8) {
            setMessage("password can't be less than 8 characters");
            setType("error");
            return;
        }

        let exists = false;
        let currentUser = null;

        for (let i = 0; i < data.length; i++) {
            if (data[i].username === username) {
                exists = true;
                currentUser = data[i];
                break;
                }
        }

        if (exists == false) {
            setMessage("username doesn't exist");
            setType("error");
        }
        else {

        if (currentUser.email !== password) {
            setMessage("passwords dont match");
            setType("error");

        } else {
            setMessage("password matches");
            setType("success");
            }
        }
    }

  return (
    <div className="login-form">
      <h2>Login</h2>
      <label htmlFor="username">Username:</label>
      <input 
      id="username" 
      type="text" 
       onChange={(event) => setUsername(event.target.value)}
      />

      <label htmlFor="password">Password:</label>

      <input 
      id="password" 
      type="password"
      onChange={(event) => setPassword(event.target.value)}/>

      <button onClick={loginLogic}>Login</button>
     <a href="#">Forgot password</a>

     {message ? <DisplayStatus type={type} message={message} /> : null}
    </div>
  );
}

export default LoginForm;