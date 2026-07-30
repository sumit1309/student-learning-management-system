import { useState, useEffect } from "react";

const assignments = [
  { id: 1, title: "Web Programming Project", subject: "BCSE203E", due: "5 Apr" },
  { id: 2, title: "Dijkstra's Algorithm", subject: "BCSE204L", due: "7 Apr" },
  { id: 3, title: "CAO Case Study", subject: "BCSE205L", due: "9 Apr" },
  { id: 4, title: "TOC DA1", subject: "BCSE304L", due: "3 Apr" },
  { id: 5, title: "PROB Lab", subject: "BMAT202P", due: "11 Apr" },
];

function Assignment({ setPage }) {
  const [files, setFiles] = useState({});
  const [fileURLs, setFileURLs] = useState({});
  const [done, setDone] = useState({});

  useEffect(() => {
    const savedFiles = JSON.parse(localStorage.getItem("files")) || {};
    const savedURLs = JSON.parse(localStorage.getItem("fileURLs")) || {};
    const savedDone = JSON.parse(localStorage.getItem("done")) || {};

    setFiles(savedFiles);
    setFileURLs(savedURLs);
    setDone(savedDone);
  }, []);

  const handleFileChange = (e, id) => {
    const f = e.target.files[0];
    if (!f) return;

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result;

      const newFiles = { ...files, [id]: f.name };
      const newURLs = { ...fileURLs, [id]: base64 };

      setFiles(newFiles);
      setFileURLs(newURLs);

      localStorage.setItem("files", JSON.stringify(newFiles));
      localStorage.setItem("fileURLs", JSON.stringify(newURLs));
    };

    reader.readAsDataURL(f);
  };

  
  const handleSubmit = (id) => {
    const updated = { ...done, [id]: true };
    setDone(updated);
    localStorage.setItem("done", JSON.stringify(updated));
    alert("Assignment submitted!");
  };

 
  const handleResubmit = (id) => {
    const updated = { ...done, [id]: false };
    setDone(updated);
    localStorage.setItem("done", JSON.stringify(updated));
  };

  const handleRemove = (id) => {
    const newFiles = { ...files };
    const newURLs = { ...fileURLs };
    const newDone = { ...done };

    delete newFiles[id];
    delete newURLs[id];
    delete newDone[id];

    setFiles(newFiles);
    setFileURLs(newURLs);
    setDone(newDone);

    localStorage.setItem("files", JSON.stringify(newFiles));
    localStorage.setItem("fileURLs", JSON.stringify(newURLs));
    localStorage.setItem("done", JSON.stringify(newDone));
  };

  const handleView = (id) => {
    const base64 = fileURLs[id];
    if (!base64) return;

    fetch(base64)
      .then(res => res.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
      });
  };

  return (
    <div>
      <div className="page-header">
        <button className="back-btn" onClick={() => setPage("dashboard")}>
          Back
        </button>
        <h1 className="page-title">Assignments</h1>
      </div>

      <div className="card">
        <table className="lms-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Subject</th>
              <th>Due</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {assignments.map(a => {
              const isSubmitted = done[a.id];

              return (
                <tr key={a.id}>
                  <td><b>{a.title}</b></td>
                  <td>{a.subject}</td>
                  <td style={{ color: "#e65100", fontWeight: 600 }}>
                    {a.due}
                  </td>

                  <td>
                    {isSubmitted ? "Submitted" : "Pending"}
                  </td>

                  <td>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      
                      {/* FILE PICKER */}
                      <label style={{
                        fontSize: 12,
                        color: "#1565c0",
                        cursor: "pointer",
                        textDecoration: "underline"
                      }}>
                        {files[a.id] ? `📄 ${files[a.id]}` : "Choose file"}
                        <input
                          type="file"
                          style={{ display: "none" }}
                          onChange={(e) => handleFileChange(e, a.id)}
                        />
                      </label>

                      {/* REMOVE BEFORE SUBMIT */}
                      {files[a.id] && !isSubmitted && (
                        <button
                          className="btn btn-red"
                          style={{ padding: "4px 10px", fontSize: 12 }}
                          onClick={() => handleRemove(a.id)}
                        >
                          Remove
                        </button>
                      )}

                      {/* SUBMIT */}
                      {files[a.id] && !isSubmitted && (
                        <button
                          className="btn btn-blue"
                          style={{ padding: "4px 12px", fontSize: 12 }}
                          onClick={() => handleSubmit(a.id)}
                        >
                          Submit
                        </button>
                      )}

                      {/* AFTER SUBMIT */}
                      {isSubmitted && (
                        <>
                          <button
                            className="btn btn-outline"
                            style={{ padding: "4px 10px", fontSize: 12 }}
                            onClick={() => handleView(a.id)}
                          >
                            View
                          </button>

                          <button
                            className="btn btn-outline"
                            style={{ padding: "4px 10px", fontSize: 12 }}
                            onClick={() => handleResubmit(a.id)}
                          >
                            Resubmit
                          </button>

                          <button
                            className="btn btn-red"
                            style={{ padding: "4px 10px", fontSize: 12 }}
                            onClick={() => handleRemove(a.id)}
                          >
                            Remove
                          </button>
                        </>
                      )}
                    </div>
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

export default Assignment;