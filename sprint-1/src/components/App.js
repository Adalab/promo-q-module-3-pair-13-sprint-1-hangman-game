import "../styles/App.scss";
import { useState } from "react";

function App() {
  const [inputName, setInputName] = useState("");
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  // constante de estado para guardar la última letra escrita por la jugadora
  const [lastLetter, setLastLetter] = useState("");
  const [word, setWord] = useState("katakroker");
  const [userLetters, setUserLetters] = useState ([]);

  const handleChange = (ev) => {
    //se le asigna a la constante true si es una letra y false si no es una letra
    setInputName(ev.currentTarget.value);
    if (isLetter(inputName)) {
      //setInputName(inputName);
      //llamar a la función y asignarle el valor del input
      setLastLetter(inputName);
      setUserLetters(inputName);
    }
  };

  const handleClick = (ev) => {
    setNumberOfErrors(numberOfErrors + 1);
  };

  console.log(inputName);
  console.log(parseInt(numberOfErrors));

  //función que comprueba si la letra que estás guardando en el estado es válida o no
  const isLetter = (letter) => {
    return letter.length === 1 && letter.match(/[a-z]/i) ? true : false;
  };

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map(letter => <li class="letter"></li> )
  }

  return (
    <div className="page">
      <header>
        <h1 className="header__title"> Juego del ahorcado </h1>{" "}
      </header>{" "}
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title"> Solución: </h2>{" "}
            <ul className="letters">
              {renderSolutionLetters()}
            </ul>{" "}
          </div>{" "}
          <div className="error">
            <h2 className="title"> Letras falladas: </h2>{" "}
            <ul className="letters">
              <li className="letter"> f </li> <li className="letter"> q </li>{" "}
              <li className="letter"> h </li> <li className="letter"> p </li>{" "}
              <li className="letter"> x </li>{" "}
            </ul>{" "}
          </div>{" "}
          <form className="form">
            <label className="title" htmlFor="last-letter">
              Escribe una letra:
            </label>{" "}
            <input
              autocomplete="off"
              className="form__input"
              maxlength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              onChange={handleChange}
              value={inputName}
            />{" "}
          </form>{" "}
        </section>{" "}
        <section className={"dummy error-" + numberOfErrors}>
          <span className="error-13 eye"> </span>{" "}
          <span className="error-12 eye"> </span>{" "}
          <span className="error-11 line"> </span>{" "}
          <span className="error-10 line"> </span>{" "}
          <span className="error-9 line"> </span>{" "}
          <span className="error-8 line"> </span>{" "}
          <span className="error-7 line"> </span>{" "}
          <span className="error-6 head"> </span>{" "}
          <span className="error-5 line"> </span>{" "}
          <span className="error-4 line"> </span>{" "}
          <span className="error-3 line"> </span>{" "}
          <span className="error-2 line"> </span>{" "}
          <span className="error-1 line"> </span>{" "}
          <button onClick={handleClick}> Incrementar </button>{" "}
        </section>{" "}
      </main>{" "}
    </div>
  );
}

export default App;