import React from 'react';

export default function Options(){
  const percentages = []

  for (let i = 0; i <= 10; i+= 0.25) {
    percentages.push(i);
  }

  return (
    percentages.map(percentage => {
      return <option value={percentage}>{percentage.toFixed(2)}%</option>})
      )
}
