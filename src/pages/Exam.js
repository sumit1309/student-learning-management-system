const exams = [
  { code: "CS401", name: "Web Programming",         date: "10 Apr 2024", time: "10:00 AM", venue: "Hall A - 12", credits: 4 },
  { code: "CS402", name: "Design & Analysis of Algos", date: "12 Apr 2024", time: "10:00 AM", venue: "Hall B - 08", credits: 4 },
  { code: "CS403", name: "Computer Architecture",   date: "14 Apr 2024", time: "2:00 PM",  venue: "Hall A - 05", credits: 3 },
  { code: "CS404", name: "Operating Systems",       date: "16 Apr 2024", time: "10:00 AM", venue: "Hall C - 22", credits: 4 },
  { code: "CS405", name: "Database Management",     date: "18 Apr 2024", time: "2:00 PM",  venue: "Hall B - 14", credits: 3 },
  { code: "CS406", name: "Software Engineering",    date: "20 Apr 2024", time: "10:00 AM", venue: "Hall A - 09", credits: 3 },
];

function Exam({ setPage }) {
  return (
    <div>
      <div className="page-header">
        <button className="back-btn" onClick={() => setPage("dashboard")}> Back</button>
        <h1 className="page-title">Exam Schedule</h1>
      </div>

      <div className="card">
        <div className="section-title">End Semester Examinations — April 2024</div>
        <table className="lms-table">
          <thead>
            <tr><th>Code</th><th>Subject</th><th>Date</th><th>Time</th><th>Venue</th><th>Credits</th></tr>
          </thead>
          <tbody>
            {exams.map(ex => (
              <tr key={ex.code}>
                <td><span className="badge badge-purple">{ex.code}</span></td>
                <td><b>{ex.name}</b></td>
                <td>{ex.date}</td>
                <td>{ex.time}</td>
                <td>{ex.venue}</td>
                <td>{ex.credits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card mt-16" style={{ background: "#fff8e1", border: "1.5px solid #ffe082" }}>
        <b>Reminders:</b>
        <ul style={{ marginTop: 8, paddingLeft: 20, fontSize: 14, color: "#555", lineHeight: 1.8 }}>
          <li>Carry your hall ticket and college ID to every exam.</li>
          <li>Report 30 minutes before the exam start time.</li>
          <li>Electronic devices are not permitted in the exam hall.</li>
        </ul>
      </div>
    </div>
  );
}

export default Exam;