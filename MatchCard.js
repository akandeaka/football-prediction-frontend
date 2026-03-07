import React from "react";

export default function MatchCard({ match, prediction }) {
  return (
    <div style={{ padding: "12px", margin: "8px 0", background: "#f9f9f9", borderRadius: "6px" }}>
      <h4>{match}</h4>
      <p>{prediction}</p>
    </div>
  );
}
