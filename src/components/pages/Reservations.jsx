import { useState } from "react";
import "../../css/reservations.css";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setfName("");
    setlName("");
    setEmail("");
    setNumber("");
    setDate("");
    setTimes("");
    setValid(true);
    navigate("/meta-capstone/confirmation");
  };
  return (
    <section>
      <form className="reservations" onSubmit={handleSubmit}>
        <div className="rese">
          <input
            id="book-date"
            type="date"
            value={date}
            min={disablePastDates()}
            onChange={(e) => setDate(e.target.value)}
            required
            placeholder="mm/dd/yyyy"
          />

          <input
            id="book-time"
            type="time"
            value={times}
            onChange={(e) => setTimes(e.target.value)}
            required
            placeholder="--:-- --"
          />

          <input
            className="input-field"
            id="fname"
            type="text"
            value={fName}
            onChange={(e) => setfName(e.target.value)}
            required
            placeholder="First Name"
          />

          <input
            className="input-field"
            id="lname"
            type="text"
            value={lName}
            onChange={(e) => setlName(e.target.value)}
            required
            placeholder="Last Name"
          />

          <input
            className="input-field"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />

          <input
            className="input-field"
            id="number"
            type="text"
            value={number}
            onChange={handleChange}
            placeholder="Number"
          />

          <div className="form-submit-btn">
            <input
              id="submit"
              type="submit"
              value={"Submit"}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Reservations;
