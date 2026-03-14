import React from "react";

export default function OptionCard({ title, description, onClick }) {
  return (
    <div
      style={{ padding: "16px", border: "1px solid #ccc", borderRadius: "8px", cursor: "pointer" }}
      onClick={onClick}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
