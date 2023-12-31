import React from "react";
import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(0);

  function handlePlusClick() {
    setPeople(people + 2);
  }

  function handleMinusClick() {
    setPeople(people - 1);
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onPlusClick={handlePlusClick} onMinusClick={handleMinusClick} />
      <p>You are going to reserve a table for 2 {people} people.</p>
    </div>
  );
}
