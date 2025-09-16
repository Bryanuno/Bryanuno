import React, { useState } from "react";

const questions = [
  {
    q: "What is the capital of France?",
    a: ["London", "Berlin", "Paris", "Rome"],
    correct: 2,
  },
  {
    q: "2 + 5 = ?",
    a: ["5", "7", "9", "11"],
    correct: 1,
  },
  {
    q: "Largest planet in our solar system?",
    a: ["Earth", "Saturn", "Jupiter", "Mars"],
    correct: 2,
  },
  {
    q: "React is a ...?",
    a: ["Library", "Framework", "Language", "Database"],
    correct: 0,
  },
  {
    q: "HTML stands for?",
    a: [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "None of these",
    ],
    correct: 1,
  },
];

function OnlineQuiz() {
  const [idx, setIdx] = useState(0);
  const [chosen, setChosen] = useState(null);
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(false);

  function check(ans) {
    setChosen(ans);
    if (ans === questions[idx].correct) setScore(score + 1);
    setTimeout(() => {
      setChosen(null);
      if (idx + 1 < questions.length) setIdx(idx + 1);
      else setShow(true);
    }, 900);
  }

  function restart() {
    setIdx(0);
    setChosen(null);
    setScore(0);
    setShow(false);
  }

  return (
    <div style={{ margin: 40, fontFamily: "Arial" }}>
      <h1>Online Quiz</h1>
      {show ? (
        <div>
          <h2>Score: {score} / {questions.length}</h2>
          <button onClick={restart}>Restart</button>
        </div>
      ) : (
        <div>
          <h2>{questions[idx].q}</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {questions[idx].a.map((a, i) => (
              <li key={i}>
                <button
                  style={{
                    background:
                      chosen === null
                        ? "#eee"
                        : i === questions[idx].correct
                        ? "lightgreen"
                        : i === chosen
                        ? "salmon"
                        : "#eee",
                    margin: 5,
                    padding: "8px 20px",
                    minWidth: 120,
                  }}
                  disabled={chosen !== null}
                  onClick={() => check(i)}
                >
                  {a}
                </button>
              </li>
            ))}
          </ul>
          <small>Question {idx + 1} of {questions.length}</small>
        </div>
      )}
    </div>
  );
}
export default OnlineQuiz;