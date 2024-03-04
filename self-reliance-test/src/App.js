import React, { useState } from "react";
import "./index.css";

function App() {
  const [showFinalResult, setFinalResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestions, setCurrentQuestions] = useState(0);

  const questions = [
    {
      text: "Kendimi başarılı biri olarak görüyorum.",
      options: [
        { id: 0, text: "asla", isCorrect: false },
        { id: 1, text: "nadiren", isCorrect: false },
        { id: 3, text: "her zaman", isCorrect: true },
      ],
    },
    {
      text: "Başkalarının yanında heyecanımı kontrol edebiliyorum.",
      options: [
        { id: 0, text: "asla", isCorrect: false },
        { id: 1, text: "nadiren", isCorrect: false },
        { id: 3, text: "her zaman", isCorrect: true },
      ],
    },
    {
      text: "Hayattaki zorluklarla başa çıkabilirim.",
      options: [
        { id: 0, text: "asla", isCorrect: false },
        { id: 1, text: "nadiren", isCorrect: false },
        { id: 3, text: "her zaman", isCorrect: true },
      ],
    },
    {
      text: "Sosyal etkinliklere katılmaktan çekinmem.",
      options: [
        { id: 0, text: "asla", isCorrect: false },
        { id: 1, text: "nadiren", isCorrect: false },
        { id: 3, text: "her zaman", isCorrect: true },
      ],
    },
    {
      text: "Kendimi rahat ifade edebiliyorum.",
      options: [
        { id: 0, text: "asla", isCorrect: false },
        { id: 1, text: "nadiren", isCorrect: false },
        { id: 3, text: "her zaman", isCorrect: true },
      ],
    },
    {
      text: "Sorumluluk almaktan çekinmiyorum.",
      options: [
        { id: 0, text: "asla", isCorrect: false },
        { id: 1, text: "nadiren", isCorrect: false },
        { id: 3, text: "her zaman", isCorrect: true },
      ],
    },
    {
      text: "Kendimi seviyorum.",
      options: [
        { id: 0, text: "asla", isCorrect: false },
        { id: 1, text: "nadiren", isCorrect: false },
        { id: 3, text: "her zaman", isCorrect: true },
      ],
    },
  ];
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestions + 1 < questions.length) {
      setCurrentQuestions(currentQuestions + 1);
    } else {
      setFinalResult(true);
    }
  };

  const restartTest = () => {
    setScore(0);
    setCurrentQuestions(0);
    setFinalResult(false);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Ne Kadar Özgüvenlisin?</h1>
        <h2>Skor : {score}</h2>

        {showFinalResult ? (
          <div className="result">
            <h1>Sonuç:</h1>
            <h2>
              {questions.length} / {score} - ({(score / questions.length) * 100}
              %)
            </h2>
            <button onClick={() => restartTest()}>Yeniden Başla</button>
          </div>
        ) : (
          <div className="question-card">
            <h2>
              {questions.length} / {currentQuestions + 1}
            </h2>
            <h3>{questions[currentQuestions].text}</h3>
            <ul>
              {questions[currentQuestions].options.map((option) => {
                return (
                  <li
                    onClick={() => optionClicked(option.isCorrect)}
                    key={option.id}
                  >
                    {option.text}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
