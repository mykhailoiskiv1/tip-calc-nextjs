'use client';

import React from 'react';
import { useTipCalculator } from '../hooks/useTipCalculator';
import Image from 'next/image';
import dolaricon from '/dolaricon.svg';
import peopleicon from '/peopleicon.svg';

const Calculator: React.FC = () => {
  const {
    bill,
    tip,
    people,
    errorMessage,
    handleBillChange,
    handlePeopleChange,
    handleTipClick,
    handleCustomTipChange,
  } = useTipCalculator();

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.value = '';
  };

  return (
    <section className="flex flex-col items-center w-full max-w-md p-6 space-y-14 rounded-lg" aria-labelledby="calculator-section">
      <h2 id="calculator-section" className="sr-only">Tip Calculator</h2>

      <article className="w-full" aria-labelledby="bill-section">
        <header>
          <h3 id="bill-section" className="sr-only">Bill Section</h3>
        </header>
        <label htmlFor="bill-input" className="block text-text-color text-2xl">Bill</label>
        <div className="relative flex items-center">
          <span className="absolute left-3">
            <Image src={dolaricon} alt="Dollar Icon" width={30} height={30} />
          </span>
          <input
            type="number"
            id="bill-input"
            className="w-full h-12 pl-10 text-right text-2xl text-input-text-color bg-input-bg-color rounded-md focus:ring-2 focus:ring-indigo-500"
            value={bill}
            onFocus={handleFocus}
            onChange={handleBillChange}
            placeholder="0"
          />
        </div>
      </article>

      <article className="w-full" aria-labelledby="tip-section">
        <header>
          <h3 id="tip-section" className="sr-only">Tip Section</h3>
        </header>
        <label htmlFor="tip-input" className="block text-text-color text-2xl mb-2">Select Tip %</label>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {[5, 10, 15, 25, 50].map((percentage) => (
            <button
              key={percentage}
              onClick={() => handleTipClick(percentage)}
              className="w-full h-12 px-4 py-2 font-semibold text-2xl text-white bg-tip-btn-bg-color rounded hover:bg-tip-btn-hover-color"
            >
              {percentage}%
            </button>
          ))}
          <input
            type="number"
            id="tip-input"
            className="w-full h-12 px-4 py-2 border rounded-md text-xl bg-input-bg-color text-input-text-color focus:ring-2 focus:ring-indigo-500"
            value={tip}
            onFocus={handleFocus}
            onChange={handleCustomTipChange}
            placeholder="Custom"
          />
        </div>
      </article>

      <article className="w-full" aria-labelledby="people-section">
        <header>
          <h3 id="people-section" className="sr-only">Number of People Section</h3>
        </header>
        <label htmlFor="people-input" className="block text-text-color text-2xl">Number of People</label>
        <div className="relative flex items-center">
          <span className="absolute left-3">
            <Image src={peopleicon} alt="People Icon" width={30} height={30} />
          </span>
          <input
            type="number"
            id="people-input"
            className="w-full h-12 pl-10 text-right text-2xl text-input-text-color bg-input-bg-color rounded-md focus:ring-2 focus:ring-indigo-500"
            value={people}
            onFocus={handleFocus}
            onChange={handlePeopleChange}
            placeholder="1"
          />
        </div>
        {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
      </article>
    </section>
  );
};

export default Calculator;
