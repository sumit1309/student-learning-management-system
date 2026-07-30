const navItems = [
  { id: "dashboard",  label: "Dashboard" },
  { id: "attendance", label: "Attendance Tracker" },
  { id: "curriculum", label: "Curriculum" },
  { id: "timetable",  label: "Time Table" },
  { id: "faculty",    label: "Faculty Info" },
  { id: "exam",       label: "Exam Schedule" },
  { id: "marks",      label: "Marks" },
  { id: "hostel",     label: "Hostel Info" },
  { id: "course",     label: "Course Page" },
  { id: "videos",     label: "Video Lectures" },
  { id: "assignment", label: "Assignments" },
  { id: "quiz",       label: "Quizzes" },
  { id: "feedback",   label: "Feedback" },
];

function Sidebar({ activePage, setPage }) {
  return (
    <div className="sidebar">
      <nav>
        {navItems.map(item => (
          <button
            key={item.id}
            className={activePage === item.id ? "active" : ""}
            onClick={() => setPage(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;