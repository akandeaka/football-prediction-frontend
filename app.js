import React, { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import ResultsScreen from "./screens/ResultsScreen";

export default function App() {
  const [currentOption, setCurrentOption] = useState(null);
  const [predictions, setPredictions] = useState([]);

  const handleSelectOption = async (optionCode) => {
    setCurrentOption(optionCode);
    const response = await fetch("https://football-prediction.onrender.com/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ option: optionCode })
    });
    const data = await response.json();
    setPredictions(data);
  };

  const handleBack = () => {
    setCurrentOption(null);
    setPredictions([]);
  };

  return !currentOption ? (
    <HomeScreen onSelectOption={handleSelectOption} />
  ) : (
    <ResultsScreen option={currentOption} predictions={predictions} onBack={handleBack} />
  );
}
