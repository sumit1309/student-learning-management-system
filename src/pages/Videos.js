import { useState } from "react";

const videos = [
  { id: 1, title: "Intro to React Hooks", subject: "Web Programming", duration: "32 min", url: "https://www.youtube.com/embed/TNhaISOUy6Q?si=92js_eDDRwtRNMmz" },
  { id: 2, title: "Dynamic Programming", subject: "DAA", duration: "45 min", url: "https://www.youtube.com/embed/nqowUJzG-iM?si=6G-WlhBNc7D9y4YT" },
  { id: 3, title: "Serial Communication", subject: "MPMC", duration: "38 min", url: "https://www.youtube.com/embed/fCRActJDR9U?si=c9IxDduRRQ--c8NM" },
  { id: 4, title: "Push Down Automata", subject: "TOC", duration: "28 min", url: "https://www.youtube.com/embed/4ejIAmp_Atw?si=LxT48OzghYew8njP" },
  { id: 5, title: "Permutaion And Combinations", subject: "SoftSkills", duration: "41 min", url: "https://www.youtube.com/embed/XJnIdRXUi7A?si=2QBn_bk-cTp4XUur" },
  { id: 6, title: "Pipelining in CPU", subject: "CAO", duration: "35 min", url: "https://www.youtube.com/embed/z7TOTY6uOPA?si=75BV5oPRdbl17mnq" },
];

function Videos({ setPage }) {
  const [playing, setPlaying] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState("All");

  const subjects = ["All", ...new Set(videos.map(v => v.subject))];

  
  const filteredVideos =
    selectedSubject === "All"
      ? videos
      : videos.filter(v => v.subject === selectedSubject);

  return (
    <div>
      <div className="page-header">
        <button className="back-btn" onClick={() => setPage("dashboard")}>Back</button>
        <h1 className="page-title">Video Lectures</h1>
      </div>

      {/* SUBJECT FILTER */}
      <div style={{ marginBottom: 20 }}>
        <label style={{ marginRight: 10, fontWeight: 600 }}>Select Subject:</label>
        <select
          className="form-select"
          value={selectedSubject}
          onChange={(e) => {
            setSelectedSubject(e.target.value);
            setPlaying(null); // stop video when switching
          }}
          style={{ width: 200 }}
        >
          {subjects.map((sub, i) => (
            <option key={i} value={sub}>{sub}</option>
          ))}
        </select>
      </div>

      {/* VIDEOS */}
      <div className="grid-3">
        {filteredVideos.map(v => (
          <div className="card" key={v.id} style={{ padding: 0, overflow: "hidden" }}>
            {playing === v.id && v.url ? (
              <iframe src={v.url} title={v.title} width="100%" height="180" frameBorder="0" allowFullScreen />
            ) : (
              <div className="vid-thumb" onClick={() => setPlaying(v.id)}>
                {playing === v.id ? "⏸" : "▶"}
              </div>
            )}

            {playing === v.id && !v.url && (
              <div style={{ background: "#1a1a2e", padding: "10px 14px" }}>
                <div style={{ height: 4, background: "#333", borderRadius: 99, marginBottom: 8 }}>
                  <div style={{ width: "35%", height: "100%", background: "#1e88e5", borderRadius: 99 }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#aaa" }}>
                  <span>11:12 / {v.duration}</span>
                  <span style={{ cursor: "pointer" }} onClick={() => setPlaying(null)}>✕ Close</span>
                </div>
              </div>
            )}

            <div style={{ padding: "12px 14px" }}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 5 }}>{v.title}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span className="badge badge-purple" style={{ fontSize: 11 }}>{v.subject}</span>
                <span style={{ fontSize: 12, color: "#888" }}>⏱ {v.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredVideos.length === 0 && (
        <p style={{ marginTop: 20 }}>No videos available for this subject.</p>
      )}
    </div>
  );
}

export default Videos;