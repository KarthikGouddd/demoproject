import "./App.css";
import studentPhoto from "./assets/student-photo.jpg";

function App() {
  return (
    <div className="page">
      <div className="id-card">

        <h2 className="title">STUDENT ID CARD</h2>

        <div className="card-body">
          {/* Left side details */}
          <div className="details">
            <p><span>Name:</span> Karthik Goud</p>
            <p><span>Roll No:</span> 23K95A6614</p>
            <p><span>Branch:</span> CSE (AI & ML)</p>
            <p><span>DOB:</span> 19/04/2005</p>
            <p><span>Validity:</span> 2023 - 2026</p>
          </div>

          {/* Right side photo */}
          <div className="photo-box">
            <img src={studentPhoto} alt="Student" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;