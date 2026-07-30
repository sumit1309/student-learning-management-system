function Feedback(){
  return (
    <div className="card">
		<select>
			<option value="hostel">Hostel</option>
			<option value="mess">Mess</option>
			<option value="academics">Academics</option>
		</select>
		<br/><br/>
      <textarea placeholder="Enter feedback"></textarea><br/>
      <button onClick={()=>alert("Feedback submitted")}>Submit</button>
    </div>
  );
}
export default Feedback;