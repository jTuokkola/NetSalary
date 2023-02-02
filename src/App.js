import React, { useState } from 'react';
import Dropdown from './Components/Dropdown';

function App() {
  const [salary, setSalary] = useState(0);
  const [taxPercentage, setTaxPercentage] = useState(0);
  const taxAmount = (taxPercentage / 100) * salary;
  const [pensionPercentage, setPensionPercentage] = useState(0);
  const pensionAmount = (pensionPercentage / 100) * salary;
  const [insurancePercentage, setInsurancePercentage] = useState(0);
  const insuranceAmount = (insurancePercentage / 100) * salary;
  const [result, setResult] = useState(0);

  const calculate = (e) => {
    e.preventDefault();
    setResult(salary - (taxAmount + pensionAmount + insuranceAmount));
  };

  return (
    <>
      <h1>Loan calculator</h1>
      <form onSubmit={calculate}>
        <div>
          <label>Salary</label>
          <div>
            <input onChange={(e) => setSalary(e.target.value)} type="number" />
          </div>
        </div>
        <div>
          <label>Tax (%) {taxAmount} €</label>
          <div>
            <input
              onChange={(e) => setTaxPercentage(e.target.value)}
              type="number"
            />
          </div>
        </div>
        <div>
          <label>Pension (%) {pensionAmount} €</label>
          <div>
            <select onChange={(e) => setPensionPercentage(e.target.value)}><Dropdown /></select>
          </div>
        </div>
        <div>
          <label>Insurance (%) {insuranceAmount} €</label>
          <div>
          <select onChange={(e) => setInsurancePercentage(e.target.value)}><Dropdown /></select>
          </div>
        </div>
        <div>
          <label>Your salary after payments</label>
          <div>
            <output>{result} €</output>
          </div>
        </div>
        <button>Calculate</button>
      </form>
    </>
  );
}

export default App;
