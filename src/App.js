import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
function App() {
  const [current, setCurrent] = useState(0);
  const switchToSignUp = () =>{
    let option1 = document.querySelector(".login-option");
    let option2 = document.querySelector(".sign-up-option");
    if (option2.classList.contains("current")) {
      return;
    }
    let loginForm = document.querySelector(".login-form");
    loginForm.style.marginLeft = "-1000px";
    option1.classList.toggle("current");
    option2.classList.toggle("current");
    setTimeout(switchSignUp, 230);
  }
  function switchToLogIn() {
    let option1 = document.querySelector(".login-option");
    let option2 = document.querySelector(".sign-up-option");
    if (option1.classList.contains("current")) {
      return;
    }
    let loginForm = document.querySelector(".sign-up-form");
    loginForm.style.marginRight = "-1000px";
    option1.classList.toggle("current");
    option2.classList.toggle("current");
    setTimeout(switchLogIn, 230);
  }
  const switchSignUp = () => {
    setCurrent(1);
  }
  function switchLogIn() {
    setCurrent(0);
  }
  return (
    <div className="App">
      <div className="container">
        <div className="login-sign-up-option">
          <div
            onClick={() => switchToLogIn()}
            className="login-option option current"
          >
            Log In
          </div>
          <div
            onClick={() => switchToSignUp()}
            className="sign-up-option option"
          >
            Sign Up
          </div>
        </div>
        {current === 0 ? (
          <Login current={current} setCurrent={setCurrent} switchToSignUp={switchToSignUp} switchSignUp={switchSignUp} />
        ) : (
          <Signup current={current} setCurrent={setCurrent} switchToLogIn={switchToLogIn} switchLogIn={switchLogIn} />
        )}
      </div>
    </div>
  );
}

export default App;
