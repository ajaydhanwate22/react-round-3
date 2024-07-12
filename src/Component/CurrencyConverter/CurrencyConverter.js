// src/CurrencyConverter.js
import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');

  const exchangeRates = {
    USD: { EUR: 0.85, INR: 74.5 },
    EUR: { USD: 1.18, INR: 88 },
    INR: { USD: 0.013, EUR: 0.011 },
  };

  const handleConvert = () => {
    const rate = exchangeRates[fromCurrency][toCurrency];
    setConvertedAmount((amount * rate).toFixed(2));
  };

  return (
    <div style={{ margin: '50px', textAlign: 'center' }}>
      <h1>Currency Converter</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
        </select>
        <span style={{ margin: '0 10px' }}>to</span>
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
        </select>
      </div>
      <button onClick={handleConvert}>Convert</button>
      {convertedAmount && (
        <div style={{ marginTop: '20px' }}>
          <h2>Converted Amount: {convertedAmount} {toCurrency}</h2>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;




// 1. Develop a currency converter application that allows users to input an amount in one currency and convert it to another. For the sake of this challenge, you can use a hard-coded exchange rate. Take advantage of React state and event handlers to manage the input and conversion calculations.
