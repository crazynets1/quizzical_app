import './App.css';
import React from 'react';
import { decode } from 'html-entities';

function App() {
  const[apiData, setApiData] = React.useState([])
  const [questions, setQuestions] = React.useState([])
  const [answers, setAnswers] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://opentdb.com/api.php?amount=5');
        if (res.status === 429) {
          await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds
          fetchData(); // Retry the fetch
        } else if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        } else {
          const data = await res.json();
          setApiData(data.results);
        }
      } catch (error) {
        console.error("Fetching data failed:", error);
      }
    };
  fetchData();
  }, [])

  React.useEffect(() => {
    setQuestions(apiData.map(item => item.question))
    setAnswers(
     apiData.map(item => {
       const arr = [...item.incorrect_answers];
       const randomIndex = Math.floor(Math.random() * (arr.length + 1));
       arr.splice(randomIndex, 0, item.correct_answer);
       return arr
     })
    )
  }, [apiData])

  const questionEls = questions.map(question => {
    const quiz = decode(question)
      return(
        <h2>{quiz}</h2>
      )
  })

  const answersEl = answers.map((subArray, i) => {
    return subArray.map((item, j) => {
    let decodedItem = decode(item)
      return (
        <>
          <input value={decodedItem} type='radio' name='answer' id={`${i} - ${j}`}/>
          <label for={`${i} - ${j}`}>{decodedItem}</label>
        </>
      )
    })
  })

 const answerSpan = answers.map((subArray, i) => {
  return subArray.map((item, j) => {
    let answer = decode(item)
      return (
        <span key={j}>
          {answer}
        </span>
      )
    })
  })

  function renderQuizSection() {
    document.getElementById('quiz').classList.remove('block')
  }

  function renderAnswerSection () {
    document.getElementById('answer').classList.remove('block')
  }

  return (
    <main className='main-section'>
      <header>
        <h1 className='title'>Quizzical</h1>
        <p className='game-description'>To start answering the questions click the Start Button below</p>
        <button onClick={() => renderQuizSection()} className='start-btn'>Start Quiz</button>
      </header>
      <section id='quiz' className='block'>
        <div>
          {questionEls[0]}
          <div className='answers-div'>
            {answersEl[0]}
          </div>
        </div>
        <hr/>
        <div>
          {questionEls[1]}
          <div className='answers-div'>
            {answersEl[1]}
          </div>
        </div>
        <hr/>
        <div>
          {questionEls[2]}
          <div className='answers-div'>
            {answersEl[2]}
          </div>
        </div>
        <hr/>
        <div>
          {questionEls[3]}
          <div className='answers-div'>
           {answersEl[3]}
          </div>
        </div>
        <hr/>
        <div>
          {questionEls[4]}
          <div className='answers-div'>
            {answersEl[4]}
          </div>
        </div>
        <hr/>
        <button onClick={() => renderAnswerSection()} className='check-btn'>Check Answers</button>
      </section>
      <section id='answer' className='answer-section block'>
        <div>
          {questionEls[0]}
          <div>
            {answerSpan[0]}
          </div>
        </div>
        <hr/>
        <div>
          {questionEls[1]}
          <div>
            {answerSpan[1]}
          </div>
        </div>
        <hr/>
        <div>
          {questionEls[2]}
          <div>
           {answerSpan[2]}
          </div>
        </div>
        <hr/>
        <div>
          {questionEls[3]}
          <div>
            {answerSpan[3]}
          </div>
        </div>
        <hr/>
        <div>
          {questionEls[4]}
          <div>
            {answerSpan[4]}
          </div>
        </div>
        <hr/>
        <div className='bottom'>
          <p>You have scored 3/5 correct answers</p>
          <button>Play Again</button>
        </div>
      </section>
    </main>
  );
}

export default App;
