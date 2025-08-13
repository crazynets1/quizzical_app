import './App.css';

function App() {
  return (
    <main className='main-section'>
      <header>
        <h1 className='title'>Quizzical</h1>
      </header>
      <p className='game-description'>To start answering the questions click the Start Button below</p>
      <button className='start-btn'>Start Quiz</button>
      <section className='quiz-section'>
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
        <button className='check-btn'>Check Answers</button>
      </section>
    </main>
  );
}

export default App;
