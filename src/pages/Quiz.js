import React, { useState, useEffect, useCallback } from "react";

const questions = [
  { q: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks Text Mark"], ans: 0 },
  { q: "Which tag is used for links?", options: ["<a>", "<link>", "<href>"], ans: 0 },
  { q: "Which language is used for styling?", options: ["HTML", "CSS", "Python"], ans: 1 },
  { q: "JS stands for?", options: ["JavaScript", "JavaSource", "JustScript"], ans: 0 },
  { q: "Which is a JS framework?", options: ["React", "Django", "Flask"], ans: 0 },
  { q: "Which tag for image?", options: ["<img>", "<image>", "<src>"], ans: 0 },
  { q: "CSS property for color?", options: ["background", "color", "font"], ans: 1 },
  { q: "Inside which tag JS is written?", options: ["<script>", "<js>", "<code>"], ans: 0 },
  { q: "Which is backend language?", options: ["Node.js", "CSS", "HTML"], ans: 0 },
  { q: "React is used for?", options: ["Frontend", "Database", "OS"], ans: 0 }
];

function Quiz() {
  const [started, setStarted] = useState(false);
  const [time, setTime] = useState(600);
  const [answers, setAnswers] = useState(Array(10).fill(null));
  const [score, setScore] = useState(null);

  const submit = useCallback(() => {
  let sc = 0;
  answers.forEach((a, i) => {
    if (a === questions[i].ans) sc++;
  });
  setScore(sc);
  alert("Test submitted!");
}, [answers]);

 useEffect(() => {
  if (!started || score !== null) return;

  if (time <= 0) {
    submit();
    return;
  }

  const timer = setInterval(() => {
    setTime((t) => t - 1);
  }, 1000);

  return () => clearInterval(timer);
}, [time, started, score, submit]);

  const handleSelect = (qIndex, optIndex) => {
    const newAns = [...answers];
    newAns[qIndex] = optIndex;
    setAnswers(newAns);
  };

  if (!started) {
    return (
      <div className="card">
        <h2>Quiz</h2>
        <button onClick={() => setStarted(true)}>Start Quiz</button>
      </div>
    );
  }

  if (score !== null) {
    return (
      <div className="card">
        <h2>Quiz Completed!</h2>
        <h3>Score: {score}/10</h3>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Quiz</h2>
      <p>
        Time: {Math.floor(time / 60)}:
        {String(time % 60).padStart(2, "0")}
      </p>

      {questions.map((q, i) => (
        <div key={i} style={{ marginBottom: "15px" }}>
          <p>
            {i + 1}. {q.q}
          </p>

          {q.options.map((opt, j) => (
            <div key={j}>
              <label>
                <input
                  type="radio"
                  name={`q${i}`}
                  checked={answers[i] === j}
                  onChange={() => handleSelect(i, j)}
                />
                {" "}
                {opt}
              </label>
            </div>
          ))}
        </div>
      ))}

      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default Quiz;
