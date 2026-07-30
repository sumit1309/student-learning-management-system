import { useState } from "react";
import { STUDENT } from "../App";

function Topbar({ onLogout }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="topbar">
      <div className="topbar-brand">University LMS</div>
      <div className="topbar-right">
        <span className="topbar-username">{STUDENT.name}</span>

        {/* Clickable profile button */}
        <button className="topbar-profile-btn" onClick={() => setOpen(o => !o)}>
          Student ▾
        </button>

        {open && (
          <div className="profile-dropdown">
            <div className="pd-header">
              <div className="pd-avatar">{STUDENT.name.charAt(0)}</div>
              <h3>{STUDENT.name}</h3>
              <p>{STUDENT.rollNo} · {STUDENT.branch}</p>
            </div>
            <div className="pd-body">
              {[
                ["Roll No",   STUDENT.rollNo],
                ["Branch",    STUDENT.branch],
                ["Semester",  STUDENT.semester],
                ["Email",     STUDENT.email],
                ["CGPA",      STUDENT.cgpa],
                ["Hostel",    STUDENT.hostel],
                ["DOB",       STUDENT.dob],
              ].map(([k, v]) => (
                <div className="pd-row" key={k}>
                  <span className="pd-k">{k}</span>
                  <span className="pd-v">{v}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <button className="signout-btn" onClick={onLogout}>Sign Out</button>
      </div>
    </div>
  );
}

export default Topbar;