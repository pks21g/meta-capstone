import { useState } from "react";
import "../../css/login.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.length < 3 || password.length < 3) {
      alert("Length must be 3 or longer");
    } else {
      setUserName("");
      setpassword("");
      console.log(userName + " " + password);
      console.log("Form Submitted");
    }
  };

  return (
    <section className="login">
      <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              name="userName"
              id="userName"
              value={userName}
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
          
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
            />
          <div className="input-group sub-btn">
            <input type="submit" value={"Submit"} />
          </div>
      </form>
    </section>
  );
};

export default Login;
