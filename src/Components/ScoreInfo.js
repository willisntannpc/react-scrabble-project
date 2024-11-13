import React, { useState } from 'react';

const ScoreInfo = () => {
    // State to control visibility of the score info
    const [isScoreVisible, setIsScoreVisible] = useState(false);

    // Function to toggle the visibility
    const toggleScoreVisibility = () => {
        setIsScoreVisible(!isScoreVisible);
    };

    return (
        <div id="score">
            {/* Button to toggle visibility */}
            <button onClick={toggleScoreVisibility}>
                {isScoreVisible ? 'Hide Score Info' : 'Show Score Info'}
            </button>

            {/* Conditionally render the score info */}
            {isScoreVisible && (
                <div>
                    <h2>Score Points</h2>
                    <ol>
                        <li>Scores are automatically calculated when you enter a word.</li>
                        <li>The score of your move is the sum of the letter values in each word formed by your play.</li>
                        <li>Each letter has a specific point value, ranging from 1 to 10 points. For example:</li>
                        <ul>
                            <li>1 point: E, A, I, O, N, R, T, L, S, U</li>
                            <li>2 points: D, G</li>
                            <li>3 points: B, C, M, P</li>
                            <li>4 points: F, H, V, W, Y</li>
                            <li>5 points: K</li>
                            <li>8 points: J, X</li>
                            <li>10 points: Q, Z</li>
                        </ul>
                        <li>The basic score for a word is the sum of the point values of each letter used in the word. Example: If you form the word "CAT": C (3) + A (1) + T (1) = <strong>5 points</strong>.</li>
                        <li>Scrabble boards feature special squares that provide additional scoring:</li>
                        <ul>
                            <li>Double Letter Score (DL): Doubles the point value of the letter placed on it.</li>
                            <li>Triple Letter Score (TL): Triples the point value of the letter placed on it.</li>
                            <li>Double Word Score (DW): Doubles the total score of the word formed.</li>
                            <li>Triple Word Score (TW): Triples the total score of the word formed.</li>
                        </ul>
                        <li>Example of Premium Square Calculation: If "C" (3 points) is placed on a DW square: <strong>Total score = 3 (C) + A (1) + T (1) = 5 points</strong>. Since "C" is on a DW, the total score is: <strong>5 * 2 = 10 points</strong>.</li>
                        <li>If a new word is created by adding letters to existing words on the board, the scores for those new words are also calculated using the same rules, and you get points for each new word formed.</li>
                        <li>If a player uses all seven tiles in one turn, they earn a <strong>50-point bingo bonus</strong>.</li>
                        <li>This scoring system encourages strategic placement of letters and words, making gameplay more dynamic and engaging!</li>
                    </ol>
                </div>
            )}
        </div>
    );
};

export default ScoreInfo;
