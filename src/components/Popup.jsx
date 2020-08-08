import React, {useEffect} from 'react'
import { checkWin } from '../helpers/helpers';

export default function Popup({ correctLetters, wrongLetters, selectedWord, setPlayable,playAgain }) {
    let finalMessage = '';
    let finalMessageRevelaWord = '';
    let playable = true

    if (checkWin(correctLetters, wrongLetters, selectedWord) == 'win'){
        finalMessage = 'Congrats';
        playable = false;
    }else if(checkWin(correctLetters, wrongLetters, selectedWord) == 'lose'){
        finalMessage = 'You lose !'
        playable = false
        finalMessageRevelaWord = `... the word was ${selectedWord}`;
    }

    useEffect(() => {
        setPlayable(playable)
    })
    return (
        <div className="popup-container" style={finalMessage != ''?{display:'flex'}:{}}>
            <div className="popup">
                <h2 >
                    {finalMessage}
                </h2>
                <h3>
                    {finalMessageRevelaWord}
                </h3>
                <button onClick={playAgain} id="play-button">Play Again</button>
            </div>
        </div>
    )
}
