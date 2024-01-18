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
        <fieldset className="login-form">
          <div className="input-group">
            <label htmlFor="userName">Username*</label>
            <input
              type="text"
              name="userName"
              id="userName"
              value={userName}
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
            {userName.length < 3 ? "abc" : ""}
          </div>
          <div className="input-group">
            <label htmlFor="password">Password*</label>
            <input
              type="text"
              name="password"
              id="password"
              value={password}
              placeholder="Last Name"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <div className="input-group sub-btn">
            <input type="submit" value={"Submit"} />
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default Login;
