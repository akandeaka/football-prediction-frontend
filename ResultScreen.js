import React from "react";
import MatchCard from "../components/MatchCard";

export default function ResultsScreen({ option, predictions, onBack }) {
  return (
    <div>
      <h2>Matches for {option}</h2>
      <button onClick={onBack}>Back</button>
      {predictions.length === 0 ? (
        <p>No matches found for this option.</p>
      ) : (
        predictions.map((p, idx) => (
          <MatchCard key={idx} match={p.match} prediction={p.prediction} />
        ))
      )}
    </div>
  );
}
