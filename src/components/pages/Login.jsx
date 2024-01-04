import { useState } from "react";

const Login = () => {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fName.length < 3 || lName.length < 3){
        alert("Length must be 3 or longer");  
    }
    else{
    setfName("");
    setlName("");
    console.log(fName + " " + lName);
    console.log("Form Submitted");
    }
  };

  return (
    <section>
      <form action="" onSubmit={handleSubmit}>
        <fieldset className="login-form">
          <div className="input-group">
            <label htmlFor="fName">First Name:</label>
            <input
              type="text"
              name="fName"
              id="fName"
              value={fName}
              placeholder="First Name"
              onChange={(e) => setfName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="lName">Last Name:</label>
            <input
              type="text"
              name="lName"
              id="lName"
              value={lName}
              placeholder="Last Name"
              onChange={(e) => setlName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input type="submit" value={"Submit"} />
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default Login;
