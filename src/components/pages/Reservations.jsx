import { useState } from "react";

const Reservations = () => {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [valid, setValid] = useState(true);

  const handleChange = (e) => {
    const input = e.target.value;
    setNumber(input);
    setValid(validatePhoneNumber(input));
  };
  const validatePhoneNumber = (number) => {
    const phoneNumberPattern = /^\d{10}$/;
    phoneNumberPattern.test(validatePhoneNumber);
  };

  const disablePastDates = () => {
    const today = new Date().toISOString().split("T")[0];
    return today;
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    setfName("");
    setlName("");
    setEmail("");
    setNumber("");
    setDate("");
    setTimes("");
    setValid(true);
  };
  return (
    <section >
      <form className="reservations" onSubmit={HandleSubmit}>
        <div className="rese">
        <div>
          <label htmlFor="book-date" className="label">Select Date: </label>
          <input
          className="input-field"
          id="book-date"
            type="date"
            value={date}
            min={disablePastDates()}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="book-time" className="label">Select Time: </label>
          <input
          className="input-field"
          id="book-time"
            type="time"
            value={times}
            onChange={(e) => setTimes(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="fName" className="label">First Name: </label>
          <input
          className="input-field"
          id="fname"
            type="text"
            value={fName}
            onChange={(e) => setfName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lName" className="label">Last Name: </label>
          <input
          className="input-field"
          id="lname"
            type="text"
            value={lName}
            onChange={(e) => setlName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
          className="input-field"
          id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="number" className="label">Number: </label>
          <input className="input-field" id="number" type="text" value={number} onChange={handleChange} />
          <div>
          {!valid && <p>Invalid Number</p>}
          </div>
          
        </div>
        <div className="form-submit-btn">
          <input id="submit" type="submit" value={"Submit"} onChange={HandleSubmit} />
        </div>
        </div>
        
      </form>
    </section>
  );
};

export default Reservations;