import { useState } from "react";
import styles from "@/styles/Calculator.module.css";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const clearScreen = () => {
    setDisplay("");
  };

  const deleteCharacter = () => {
    setDisplay(display.slice(0, -1));
  };

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const calculate = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("input the value");
    }
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.calculatorTitle}>Calculator Tester</div>
      <div className={styles.outputScreen}>{display}</div>
      <div className={styles.buttons}>
        <button onClick={clearScreen}>Clear</button>
        <button onClick={deleteCharacter}>Delete</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
