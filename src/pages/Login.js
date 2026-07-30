import { useState } from "react";
import { STUDENT } from "../App";

function Login({ onLogin }) {
  const [id,  setId]  = useState("");
  const [pw,  setPw]  = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr("");
    if (id === STUDENT.rollNo && pw === STUDENT.password) {
      onLogin();
    } else {
      setErr("Invalid Roll Number or Password.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>University LMS</h1>
        <p className="sub">Learning Management System — Student Portal</p>

        <div className="login-hint">
          <strong>Demo credentials:</strong><br />
          Roll No: <strong>{STUDENT.rollNo}</strong> &nbsp;|&nbsp; Password: <strong>{STUDENT.password}</strong>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label className="form-label">Roll Number</label>
            <input
              className="form-input"
              placeholder="e.g. 24BCE0433"
              value={id}
              onChange={e => setId(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label className="form-label">Password</label>
            <input
              className="form-input"
              type="password"
              placeholder="••••••••"
              value={pw}
              onChange={e => setPw(e.target.value)}
            />
          </div>
          {err && <div className="err-msg">{err}</div>}
          <button type="submit" className="login-btn">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;