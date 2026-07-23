import React from "react";

import GuessTiles from "../GuessTiles";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessTrack({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) =>  (
        <GuessTiles key={num} value={guesses[num]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessTrack;
