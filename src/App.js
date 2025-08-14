import './App.css';

function App() {

  function renderQuizSection() {
    document.getElementById('quiz').classList.remove('block')
  }

  function renderAnswerSection () {
    document.getElementById('answer').classList.remove('block')
    console.log('hello')
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
          <h2>How would you say Adios is Spanish?</h2>
          <div className='answers-div'>
            <input value='Adios' type='radio' name='answer' id='answer1'/>
            <label for="answer1">Adiso</label>
            <input value='Hola' type='radio' name='answer' id='answer2'/>
            <label for="answer2">Hola</label>
            <input value='Au Revoir' type='radio' name='answer' id='answer3'/>
            <label for="answer3">Au Revoir</label>
            <input value='Salir' type='radio' name='answer' id='answer4'/>
            <label for='answer4'>Salir</label>
          </div>
        </div>
        <hr/>
        <div>
          <h2>How would you say Adios is Spanish?</h2>
          <div className='answers-div'>
            <input value='Adios' type='radio' name='answer' id='answer1'/>
            <label for="answer1">Adiso</label>
            <input value='Hola' type='radio' name='answer' id='answer2'/>
            <label for="answer2">Hola</label>
            <input value='Au Revoir' type='radio' name='answer' id='answer3'/>
            <label for="answer3">Au Revoir</label>
            <input value='Salir' type='radio' name='answer' id='answer4'/>
            <label for='answer4'>Salir</label>
          </div>
        </div>
        <hr/>
        <div>
          <h2>How would you say Adios is Spanish?</h2>
          <div className='answers-div'>
            <input value='Adios' type='radio' name='answer' id='answer1'/>
            <label for="answer1">Adiso</label>
            <input value='Hola' type='radio' name='answer' id='answer2'/>
            <label for="answer2">Hola</label>
            <input value='Au Revoir' type='radio' name='answer' id='answer3'/>
            <label for="answer3">Au Revoir</label>
            <input value='Salir' type='radio' name='answer' id='answer4'/>
            <label for='answer4'>Salir</label>
          </div>
        </div>
        <hr/>
        <div>
          <h2>How would you say Adios is Spanish?</h2>
          <div className='answers-div'>
            <input value='Adios' type='radio' name='answer' id='answer1'/>
            <label for="answer1">Adiso</label>
            <input value='Hola' type='radio' name='answer' id='answer2'/>
            <label for="answer2">Hola</label>
            <input value='Au Revoir' type='radio' name='answer' id='answer3'/>
            <label for="answer3">Au Revoir</label>
            <input value='Salir' type='radio' name='answer' id='answer4'/>
            <label for='answer4'>Salir</label>
          </div>
        </div>
        <hr/>
        <div>
          <h2>How would you say Adios is Spanish?</h2>
          <div className='answers-div'>
            <input value='Adios' type='radio' name='answer' id='answer1'/>
            <label for="answer1">Adiso</label>
            <input value='Hola' type='radio' name='answer' id='answer2'/>
            <label for="answer2">Hola</label>
            <input value='Au Revoir' type='radio' name='answer' id='answer3'/>
            <label for="answer3">Au Revoir</label>
            <input value='Salir' type='radio' name='answer' id='answer4'/>
            <label for='answer4'>Salir</label>
          </div>
        </div>
        <hr/>
        <button onClick={() => renderAnswerSection()} className='check-btn'>Check Answers</button>
      </section>
      <section id='answer' className='answer-section block'>
        <div>
          <h2>How would you say Adios is Spanish?</h2>
          <div>
            <span>Adios</span>
            <span>Hola</span>
            <span>Au Revoir</span>
            <span>Salir</span>
          </div>
        </div>
        <hr/>
        <div>
          <h2>How would you say Adios is Spanish?</h2>
          <div>
            <span>Adios</span>
            <span>Hola</span>
            <span>Au Revoir</span>
            <span>Salir</span>
          </div>
        </div>
        <hr/>
        <div>
          <h2>How would you say Adios is Spanish?</h2>
          <div>
            <span>Adios</span>
            <span>Hola</span>
            <span>Au Revoir</span>
            <span>Salir</span>
          </div>
        </div>
        <hr/>
        <div>
          <h2>How would you say Adios is Spanish?</h2>
          <div>
            <span>Adios</span>
            <span>Hola</span>
            <span>Au Revoir</span>
            <span>Salir</span>
          </div>
        </div>
        <hr/>
        <div>
          <h2>How would you say Adios is Spanish?</h2>
          <div>
            <span>Adios</span>
            <span>Hola</span>
            <span>Au Revoir</span>
            <span>Salir</span>
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
