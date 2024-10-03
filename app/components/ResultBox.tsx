'use client';

import React from 'react';
import { useTipCalculator } from '../hooks/useTipCalculator';

const ResultBox: React.FC = () => {
  const { bill, tip, people } = useTipCalculator();

  const tipAmount = bill && people ? (bill * (tip / 100)) / people : 0;
  const totalAmount = bill && people ? (bill + tipAmount) / people : 0;

  return (
    <section className="flex flex-col justify-between w-full max-w-md p-6 space-y-20 bg-sum-box-bg-color rounded-2xl shadow-md" aria-labelledby="summary-section">
      <h2 id="summary-section" className="sr-only">Summary of Tip Calculation</h2>

      <article className="flex justify-between">
        <header>
          <h3 className="text-sum-text-color text-2xl">Tip Amount</h3>
          <p className="text-2xl text-sum-text-color">/ person</p>
        </header>
        <div className="text-4xl font-bold text-tip-amount-color">${tipAmount.toFixed(2)}</div>
      </article>

      <article className="flex justify-between">
        <header>
          <h3 className="text-sum-text-color text-2xl">Total</h3>
          <p className="text-2xl text-sum-text-color">/ person</p>
        </header>
        <div className="text-4xl font-bold text-tip-amount-color">${totalAmount.toFixed(2)}</div>
      </article>

      <button
        className="w-full py-2 font-semibold text-reset-btn-text-color bg-reset-btn-bg-color rounded-md hover:bg-red-700 hover:text-reset-btn-hover-text-color"
        onClick={() => window.location.reload()}
      >
        RESET
      </button>
    </section>

  );
};

export default ResultBox;
