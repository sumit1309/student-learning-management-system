import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Curriculum from "./pages/Curriculum";
import Timetable from "./pages/Timetable";
import Faculty from "./pages/Faculty";
import Exam from "./pages/Exam";
import Marks from "./pages/Marks";
import Hostel from "./pages/Hostel";
import Course from "./pages/Course";
import Videos from "./pages/Videos";
import Assignment from "./pages/Assignment";
import Quiz from "./pages/Quiz";
import Feedback from "./pages/Feedback";
import "./style.css";


export const STUDENT = {
  name:       "Sumit Saran",          
  rollNo:     "24BCE0433",             
  password:   "cse123",               
  branch:     "B.Tech CSE",
  semester:   "Semester 4",
  email:      "sumit.saran2024@vit.ac.in",
  dob:        "13 Sep 2005",
  hostel:     "Block L · Room 516",
  cgpa:       "8.70",
  credits:    "61.5 / 162",
};


const pageTitles = {
  dashboard: "Dashboard", attendance: "Attendance Tracker",
  curriculum: "Curriculum", timetable: "Time Table",
  faculty: "Faculty Info", exam: "Exam Schedule",
  marks: "Marks", hostel: "Hostel Info",
  course: "Course Page", videos: "Video Lectures",
  assignment: "Assignments", quiz: "Quizzes",
  feedback: "Feedback",
};

const pageMap = {
  dashboard: Dashboard, attendance: Attendance, curriculum: Curriculum,
  timetable: Timetable, faculty: Faculty, exam: Exam,
  marks: Marks, hostel: Hostel, course: Course,
  videos: Videos, assignment: Assignment, quiz: Quiz, feedback: Feedback,
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState("dashboard");

  if (!loggedIn) return <Login onLogin={() => setLoggedIn(true)} />;

  const Page = pageMap[page] || Dashboard;

  return (
    <div className="app-shell">
      <Topbar
        title={pageTitles[page]}
        onLogout={() => setLoggedIn(false)}
      />
      <div className="body-layout">
        <Sidebar activePage={page} setPage={setPage} />
        <div className="main-content">
          <Page setPage={setPage} />
        </div>
      </div>
    </div>
  );
}

export default App;