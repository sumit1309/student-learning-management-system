import "../style.css";

function Dashboard() {
  return (
    <div className="dashboard-page">

      

      {/* Main Content */}
      <div className="dashboard-content">

        {/* Banner */}
        <div className="banner">
          <img
            src="\image_bd.png"
            alt="students"
          />
        </div>

        {/* Cards */}
        <div className="cards">
          <div className="card">
            <p>Courses Ongoing</p>
            <h3>7</h3>
          </div>

          <div className="card">
            <p>Overall Attendance</p>
            <h3>99%</h3>
          </div>

          <div className="card">
            <p>Credits Completed</p>
            <h3>61.5/162</h3>
          </div>

          <div className="card">
            <p>Upcoming Classes</p>
            <h3>CAO - 2:00 PM</h3>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;