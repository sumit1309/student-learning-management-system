const days  = ["Mon","Tue","Wed","Thu","Fri"];
const slots = ["9–10","10–11","11–12","12–1","2–3","3–4","4–5"];
const schedule = {
  "9–10":  { Mon:"Web Prog", Tue:"CAO",      Wed:"DAA",     Thu:"TOC",      Fri:"MPMC"    },
  "10–11": { Mon:"DAA",      Tue:"TOC",        Wed:"Web Prog",Thu:"SS",      Fri:"CAO"     },
  "11–12": { Mon:"TOC",       Tue:"—",         Wed:"MPMC",    Thu:"Web Prog",Fri:"—"       },
  "12–1":  { Mon:"MPMC",     Tue:"DAA",       Wed:"—",       Thu:"—",       Fri:"SS"      },
  "2–3":   { Mon:"TOC",      Tue:"—",         Wed:"PROB Lab",     Thu:"—",       Fri:"DAA Lab"     },
  "3–4":   { Mon:"Spanish",      Tue:"SS",        Wed:"WEB Lab",     Thu:"Probability and Statistics",   Fri:"MPMC Lab"     },
  "4–5":   { Mon:"—",        Tue:"Probability and Statistics",     Wed:"—",       Thu:"DAA",     Fri:"—"       },
};

export function Timetable({ setPage }) {
  return (
    <div>
      <div className="page-header">
        <button className="back-btn" onClick={() => setPage("dashboard")}>Back</button>
        <h1 className="page-title">Time Table</h1>
      </div>
      <div className="card" style={{ overflowX: "auto" }}>
        <div className="tt-grid">
          <div className="tt-cell hdr">Time</div>
          {days.map(d => <div key={d} className="tt-cell hdr">{d}</div>)}
          {slots.map(t => [
            <div key={`t${t}`} className="tt-cell time">{t}</div>,
            days.map(d => {
              const s = schedule[t]?.[d] || "—";
              return (
                <div key={d+t} className={`tt-cell${s !== "—" ? " has" : ""}`}
                  style={{ fontSize: 12, fontWeight: s !== "—" ? 600 : 400, color:"#1565c0"}}>
                  {s}
                </div>
              );
            })
          ])}
        </div>
      </div>
    </div>
  );
}

export default Timetable;