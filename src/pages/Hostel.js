import { STUDENT } from "../App";

const facilities = [
  "High-Speed WiFi",
  "24/7 Security",
  "Laundry Service",
  "Medical Centre Nearby",
];

const roommates = [
  { name: "M. Karunya Krishna",   rollNo: "24BCE0675", branch: "CSE" },
  { name: "CNH Vishnuvardhan Reddy",   rollNo: "24BCE0461", branch: "CSE" },
];

function Hostel({ setPage }) {
  return (
    <div>
      <div className="page-header">
        <button className="back-btn" onClick={() => setPage("dashboard")}>Back</button>
        <h1 className="page-title">Hostel Info</h1>
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="section-title">Room Details</div>
          {[
            ["Block",         "L"],
            ["Room No.",      "516"],
            ["Contact",       "9840009000"],
            ["Hostel",        STUDENT.hostel]
          ].map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #f0f0f0", fontSize: 14 }}>
              <span style={{ color: "#666" }}>{k}</span>
              <b>{v}</b>
            </div>
          ))}
        </div>

        <div>
          <div className="card" style={{ marginBottom: 16 }}>
            <div className="section-title">Facilities Available</div>
            <ul style={{ paddingLeft: 20, lineHeight: 2, fontSize: 14, color: "#444" }}>
              {facilities.map(f => <li key={f}>{f}</li>)}
            </ul>
          </div>

          <div className="card">
            <div className="section-title">Roommates</div>
            {roommates.map(r => (
              <div key={r.rollNo} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: "1px solid #f0f0f0" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#e3f2fd", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#1565c0" }}>
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{r.name}</div>
                  <div style={{ fontSize: 12, color: "#888" }}>{r.rollNo} · {r.branch}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hostel;