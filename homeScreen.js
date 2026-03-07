import React from "react";
import OptionCard from "../components/OptionCard";

const options = [
  { code: "A", title: "Option A", description: "Home Win/Draw (1.90–1.99 odds)" },
  { code: "B", title: "Option B", description: "Home Win (1.20–1.33 vs 10.50–16)" },
  { code: "C", title: "Option C", description: "Half-time Under 1.5 Goals" },
  { code: "D", title: "Option D", description: "Over 1.5 Goals (90%)" },
  { code: "E", title: "Option E", description: "Draw (2.88–3.30 odds)" },
  { code: "F", title: "Option F", description: "Win + Over 1.5 Goals" },
];

export default function HomeScreen({ onSelectOption }) {
  return (
    <div>
      <h1>Football Prediction App</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        {options.map(opt => (
          <OptionCard
            key={opt.code}
            title={opt.title}
            description={opt.description}
            onClick={() => onSelectOption(opt.code)}
          />
        ))}
      </div>
    </div>
  );
}
