const marks = [
  { code: "CS401", name: "Web Programming",       ia1: 28, ia2: 27, assign: 18, max: 80, grade: "A"  },
  { code: "CS402", name: "DAA",                   ia1: 25, ia2: 24, assign: 16, max: 80, grade: "B+" },
  { code: "CS403", name: "Computer Architecture", ia1: 30, ia2: 28, assign: 19, max: 80, grade: "A+" },
  { code: "CS404", name: "Operating Systems",     ia1: 22, ia2: 26, assign: 17, max: 80, grade: "B+" },
  { code: "CS405", name: "DBMS",                  ia1: 24, ia2: 23, assign: 15, max: 80, grade: "B"  },
  { code: "CS406", name: "Software Engineering",  ia1: 29, ia2: 27, assign: 18, max: 80, grade: "A"  },
];

const gradeStyle = {
  "A+": "badge-green", "A": "badge-green",
  "B+": "badge-yellow", "B": "badge-yellow", "C": "badge-red"
};

export function Marks({ setPage }) {
  return (
    <div>
      <div className="page-header">
        <button className="back-btn" onClick={() => setPage("dashboard")}>Back</button>
        <h1 className="page-title">Marks</h1>
      </div>

      <div className="card">
        <div className="section-row">
          <div className="section-title">Internal Assessment Marks — Semester 4</div>
        </div>
        <table className="lms-table">
          <thead>
            <tr><th>Code</th><th>Subject</th><th>IA1 /30</th><th>IA2 /30</th><th>Assign /20</th><th>Total /80</th><th>Grade</th></tr>
          </thead>
          <tbody>
            {marks.map(m => {
              const tot = m.ia1 + m.ia2 + m.assign;
              const pct = Math.round((tot / m.max) * 100);
              return (
                <tr key={m.code}>
                  <td><span className="badge badge-purple">{m.code}</span></td>
                  <td><b>{m.name}</b></td>
                  <td>{m.ia1}</td>
                  <td>{m.ia2}</td>
                  <td>{m.assign}</td>
                  <td>
                    <b>{tot}</b>
                    <div className="prog-bar" style={{ marginTop: 5, width: 80 }}>
                      <div className="prog-fill" style={{ width: `${pct}%`, background: "#1565c0" }} />
                    </div>
                  </td>
                  <td><span className={`badge ${gradeStyle[m.grade] || "badge-gray"}`}>{m.grade}</span></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Marks;