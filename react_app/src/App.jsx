import React from 'react';
import Sum from './components/Sum';
import TrafficLights from './components/TrafficLights';

export default function App() {
  const result1 = Sum(1)(2)(3)(4)(5)(); 
  const result2 = Sum(3)(7)(); 

  return (
    <div>
      <h1>Sum Function</h1>
      <p>Result 1: {result1}</p>
      <p>Result 2: {result2}</p>
      <TrafficLights/>
    </div>
  );
}
