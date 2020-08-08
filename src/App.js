import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import {showNotification as show} from './helpers/helpers';
import Notification from './components/Notification';
import Popup from './components/Popup';


const words = ['application', 'programming', 'interface', 'wizard','reactjs','errors','sample','premium','hangman','tutorial','building','weather','pizza'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

let playable = true;

const correctLetters = [];
const wrongLetters = [];


function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  useEffect(() =>{
    const handleKeydown = event => {
      const {key,keyCode} = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
  
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  },[correctLetters, wrongLetters, playable])
  function playAgain(){
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);
    selectedWord = words[Math.floor(Math.random() * words.length)];
  }
  return (
    <div className="App">
      <Header></Header>
      <div className="game-container">
        <Figure wrongLetters={wrongLetters}></Figure>
        <WrongLetters wrongLetters={wrongLetters}></WrongLetters>
        <Word selectedWord={selectedWord} correctLetters={correctLetters}></Word>
        
        
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain = {playAgain}></Popup>
      <Notification showNotification={showNotification}></Notification>

    </div>
  );
}

export default App;
