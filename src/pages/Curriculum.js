const semesters = [
  {
    name: "Semester 1",
    courses: [
      { code: "MA101", name: "Engineering Mathematics I",  credits: 4, status: "Completed" },
      { code: "PH101", name: "Engineering Physics",        credits: 3, status: "Completed" },
      { code: "CS101", name: "Problem Solving with C",     credits: 4, status: "Completed" },
    ],
  },
  {
    name: "Semester 4 (Current)",
    courses: [
      { code: "CS401", name: "Web Programming",            credits: 4, status: "Ongoing" },
      { code: "CS402", name: "Design & Analysis of Algos", credits: 4, status: "Ongoing" },
      { code: "CS403", name: "Computer Architecture",      credits: 3, status: "Ongoing" },
      { code: "CS404", name: "Operating Systems",          credits: 4, status: "Ongoing" },
      { code: "CS405", name: "Database Management",        credits: 3, status: "Ongoing" },
      { code: "CS406", name: "Software Engineering",       credits: 3, status: "Ongoing" },
    ],
  },
  {
    name: "Semester 5 (Upcoming)",
    courses: [
      { code: "CS501", name: "Compiler Design",            credits: 4, status: "Upcoming" },
      { code: "CS502", name: "Computer Networks",          credits: 4, status: "Upcoming" },
    ],
  },
];

const statusBadge = { Completed: "badge-green", Ongoing: "badge-blue", Upcoming: "badge-yellow" };

function Curriculum({ setPage }) {
  return (
    <div>
      <div className="page-header">
        <button className="back-btn" onClick={() => setPage("dashboard")}>Back</button>
        <h1 className="page-title">Curriculum</h1>
      </div>

      {semesters.map(sem => (
        <div className="card mt-16" key={sem.name}>
          <div className="section-row">
            <div className="section-title">{sem.name}</div>
            <span className="badge badge-gray">
              {sem.courses.reduce((a, c) => a + c.credits, 0)} credits
            </span>
          </div>
          <table className="lms-table">
            <thead>
              <tr><th>Code</th><th>Course Name</th><th>Credits</th><th>Status</th></tr>
            </thead>
            <tbody>
              {sem.courses.map(c => (
                <tr key={c.code}>
                  <td><span className="badge badge-purple">{c.code}</span></td>
                  <td>{c.name}</td>
                  <td>{c.credits}</td>
                  <td><span className={`badge ${statusBadge[c.status]}`}>{c.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default Curriculum;