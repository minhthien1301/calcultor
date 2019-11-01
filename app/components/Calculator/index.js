import './index.css';
import React from 'react';

function Calculator({ number, addNumber, getResult, clear, del }) {
  return (
    <div id="calculator">
      <input
        type="string"
        className="calculator-input"
        value={number}
        onChange={addNumber}
      />
      <div className="calculator-row">
        <div className="calculator-col">
          <button className="calculator-btn gray action" onClick={clear}>
            AC
          </button>
        </div>
        <div className="calculator-col">
          <button className="calculator-btn gray action" onClick={del}>
            C
          </button>
        </div>
        <div className="calculator-col">
          <button
            className="calculator-btn gray action"
            onClick={() => addNumber('%')}
          >
            %
          </button>
        </div>
        <div className="calculator-col">
          <button
            className="calculator-btn accent action"
            onClick={() => addNumber('/')}
          >
            /
          </button>
        </div>
      </div>
      <div className="calculator-row">
        <div className="calculator-col">
          <button className="calculator-btn" onClick={() => addNumber(7)}>
            7
          </button>
        </div>
        <div className="calculator-col">
          <button className="calculator-btn" onClick={() => addNumber(8)}>
            8
          </button>
        </div>
        <div className="calculator-col">
          <button className="calculator-btn" onClick={() => addNumber(9)}>
            9
          </button>
        </div>
        <div className="calculator-col">
          <button
            className="calculator-btn accent action"
            onClick={() => addNumber('*')}
          >
            *
          </button>
        </div>
      </div>
      <div className="calculator-row">
        <div className="calculator-col">
          <button className="calculator-btn" onClick={() => addNumber(4)}>
            4
          </button>
        </div>
        <div className="calculator-col">
          <button className="calculator-btn" onClick={() => addNumber(5)}>
            5
          </button>
        </div>
        <div className="calculator-col">
          <button className="calculator-btn" onClick={() => addNumber(6)}>
            6
          </button>
        </div>
        <div className="calculator-col">
          <button
            className="calculator-btn accent action"
            onClick={() => addNumber('-')}
          >
            -
          </button>
        </div>
      </div>
      <div className="calculator-row">
        <div className="calculator-col">
          <button className="calculator-btn" onClick={() => addNumber(1)}>
            1
          </button>
        </div>
        <div className="calculator-col">
          <button className="calculator-btn" onClick={() => addNumber(2)}>
            2
          </button>
        </div>
        <div className="calculator-col">
          <button className="calculator-btn" onClick={() => addNumber(3)}>
            3
          </button>
        </div>
        <div className="calculator-col">
          <button
            className="calculator-btn accent action"
            onClick={() => addNumber('+')}
          >
            +
          </button>
        </div>
      </div>
      <div className="calculator-row">
        <div className="calculator-col wide">
          <button className="calculator-btn" onClick={() => addNumber(0)}>
            0
          </button>
        </div>
        <div className="calculator-col">
          <button
            className="calculator-btn action"
            onClick={() => addNumber('.')}
          >
            .
          </button>
        </div>
        <div className="calculator-col">
          <button className="calculator-btn accent action" onClick={getResult}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
