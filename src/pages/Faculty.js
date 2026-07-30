const faculty = [
  { name: "Prof. Sinthuja M",subject:"Web Programming",email: "sinthuja.m@vit.ac.in",cabin: "SJT 210 A 38"},
  { name: "Dr. Ranjith R",subject:"DAA",email: "ranjith.r@vit.ac.in",cabin: "SJT 308"},
  { name: "Prof. Parthiban K",subject:"CAO",email: "parthiban.k@vit.ac.in",cabin: "MGB 214"},
  { name: "Dr. Rajendran P",subject:"Probability & Stats", email: "prajendran@vit.ac.in",cabin: "SJT 116"},
  { name: "Prof. Karthik GM",subject:"TOC",email: "karthik@vit.ac.in",cabin: "PRP 206"},
  { name: "Dr. Shilpi Ruchi",subject:"MPMC",email: "shilpi@vit.ac.in",cabin: "SJT 202"},
];

const avatarColors = ["#1565c0","#7b1fa2","#0288d1","#2e7d32","#e65100","#c62828"];

function Faculty({ setPage }) {
  return (
    <div>
      <div className="page-header">
        <button className="back-btn" onClick={() => setPage("dashboard")}> Back</button>
        <h1 className="page-title">Faculty Info</h1>
      </div>

      <div className="card">
        <table className="lms-table">
          <thead>
            <tr><th>Faculty</th><th>Subject</th><th>Email</th><th>Cabin</th></tr>
          </thead>
          <tbody>
            {faculty.map((f, i) => (
              <tr key={f.name}>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{
                      height: 34, 
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "white", fontWeight: 700, fontSize: 14, flexShrink: 0
                    }}>
                      
                    </div>
                    <span style={{ fontWeight: 600 }}>{f.name}</span>
                  </div>
                </td>
                <td>{f.subject}</td>
                <td><a href={`mailto:${f.email}`} style={{ color: "#1565c0" }}>{f.email}</a></td>
                <td>{f.cabin}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Faculty;