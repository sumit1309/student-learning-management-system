import { useState } from "react";

const courses = [
  {
    id: 1,
    code: "CS401",
    name: "Web Programming",
    instructor: "Prof. Sinthuja M",
    credits: 4,
    topics: [
      { title: "HTML5 & CSS3 Basics", file: "/resources/html.pdf" },
      { title: "Responsive Design", file: "/resources/responsive.pdf" },
      { title: "JavaScript Fundamentals", file: "/resources/js.pdf" },
      { title: "DOM Manipulation", file: "/resources/dom.pdf" },
      { title: "React Basics", file: "/resources/react.pdf" },
      { title: "Node.js Introduction", file: "/resources/node.pdf" },
    ],
  },
  {
    id: 2,
    code: "CS402",
    name: "Design & Analysis of Algorithms",
    instructor: "Dr. Ranjith R",
    credits: 4,
    topics: [
      { title: "Asymptotic Analysis", file: "/resources/daa1.pdf" },
      { title: "Divide & Conquer", file: "/resources/daa2.pdf" },
      { title: "Greedy Algorithms", file: "/resources/daa3.pdf" },
      { title: "Dynamic Programming", file: "/resources/daa4.pdf" },
    ],
  },
  {
    id: 3,
    code: "CS403",
    name: "Computer Architecture",
    instructor: "Prof. Parthiban K",
    credits: 3,
    topics: [
      { title: "Number Systems", file: "/resources/cao1.pdf" },
      { title: "Boolean Algebra", file: "/resources/cao2.pdf" },
      { title: "CPU Design", file: "/resources/cao3.pdf" },
    ],
  },
];

function Course({ setPage }) {
  const [selected, setSelected] = useState(null);

  
  if (selected) {
    const c = courses.find(x => x.id === selected);

    return (
      <div>
        <div className="page-header">
          <button className="back-btn" onClick={() => setSelected(null)}>
            Back to Courses
          </button>
          <h1 className="page-title">{c.name}</h1>
        </div>

        <div className="card">
          <div
            style={{
              display: "flex",
              gap: 24,
              flexWrap: "wrap",
              marginBottom: 18,
              fontSize: 14,
              color: "#555",
            }}
          >
            <span>{c.instructor}</span>
            <span>{c.credits} Credits</span>
          </div>

          <div className="section-title">Course Topics</div>

          {c.topics.map((t, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "11px 0",
                borderBottom: "1px solid #f0f0f0",
                fontSize: 14,
              }}
            >
              {/* Number */}
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "#1565c0",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontWeight: 700,
                }}
              >
                {i + 1}
              </div>

              {/* Topic Title */}
              <span>{t.title}</span>

              {/* Open PDF */}
              <a
                href={t.file}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{
                  marginLeft: "auto",
                  fontSize: 12,
                  padding: "5px 12px",
                }}
              >
                📄 Open PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 📌 COURSE LIST VIEW
  return (
    <div>
      <div className="page-header">
        <button className="back-btn" onClick={() => setPage("dashboard")}>
          Back
        </button>
        <h1 className="page-title">Course Page</h1>
      </div>

      <div className="card">
        <table className="lms-table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Course Name</th>
              <th>Instructor</th>
              <th>Credits</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {courses.map(c => (
              <tr key={c.id}>
                <td>
                  <span className="badge badge-purple">{c.code}</span>
                </td>
                <td>
                  <b>{c.name}</b>
                </td>
                <td>{c.instructor}</td>
                <td>{c.credits}</td>
                <td>
                  <button
                    className="btn btn-outline"
                    style={{ padding: "5px 14px", fontSize: 12 }}
                    onClick={() => setSelected(c.id)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Course;