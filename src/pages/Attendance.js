const subjects = [
  { name: "Web Programming",attended: 36,total: 42 },
  { name: "Design & Analysis of Algorithms",attended: 32,total: 40 },
  { name: "Computer Architecture",attended: 28,total: 34 },
  { name: "Theory of Computation",attended: 30,total: 36 },
  { name: "Microprocessors and Microcontrollers",attended: 22,total: 30 },
  { name: "Soft Skills",attended: 38,total: 40 },
];

const colors = ["#1e88e5","#7b1fa2","#0288d1","#f57c00","#e53935","#2e7d32"];

function Attendance({ setPage }) {
  return (
    <div>
      <div className="page-header">
        <button className="back-btn" onClick={() => setPage("dashboard")}>Back</button>
        <h1 className="page-title">Attendance Tracker</h1>
      </div>

      <div className="grid-3">
        {subjects.map((s, i) => {
          const pct = Math.round((s.attended / s.total) * 100);
          const col = colors[i % colors.length];
          const label  = pct >= 85 ? "Good" : pct >= 75 ? "Average" : "At Risk";
          return (
            <div className="card" key={s.name} style={{ textAlign: "center" }}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 14 }}>{s.name}</div>
              <div className="pie-ring" style={{ background: `conic-gradient(${col} ${pct}%, #e0e0e0 0)` }}>
                <div className="pie-inner" style={{ color: col }}>{pct}%</div>
              </div>
              <div style={{ fontSize: 13, color: "#666", marginBottom: 8 }}>
                {s.attended} / {s.total} classes
              </div>
              <span>{label}</span>
              <div style={{ marginTop: 10 }}>
                <div className="prog-bar">
                  <div className="prog-fill" style={{ width: `${pct}%`, background: col }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary table */}
      <div className="card mt-20">
        <div className="section-title">Summary</div>
        <table className="lms-table">
          <thead>
            <tr><th>Subject</th><th>Attended</th><th>Total</th><th>%</th><th>Status</th></tr>
          </thead>
          <tbody>
            {subjects.map(s => {
              const pct = Math.round((s.attended / s.total) * 100);
              return (
                <tr key={s.name}>
                  <td>{s.name}</td>
                  <td>{s.attended}</td>
                  <td>{s.total}</td>
                  <td><b>{pct}%</b></td>
                  <td>
                    <span>
                      {pct >= 85 ? "Good" : pct >= 75 ? "Average" : "At Risk"}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Attendance;