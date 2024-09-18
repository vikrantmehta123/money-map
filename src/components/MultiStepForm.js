import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function MultiStepForm() {
  const { register, handleSubmit, watch, reset } = useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [hoveredField, setHoveredField] = useState(null);
  
  const steps = [
    {
      title: 'Current Age and Retirement Age',
      fields: ['currentAge', 'retirementAge'],
      helpText: {
        currentAge: 'Enter your current age.',
        retirementAge: 'Enter the age at which you plan to retire.',
      },
    },
    {
      title: 'Current Principal / Investments',
      fields: ['currentPrincipal'],
    },
    {
      title: 'Annual Inflation and Annual Expected Rate of Return',
      fields: ['annualInflation', 'annualExpectedRateOfReturn'],
    },
    {
      title: 'Investment Details',
      fields: ['AnnualInvestmentCapacity', 'annualInvestmentIncrease'],
    },
  ];

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {steps.map((step, index) => (
        <div key={index} style={{ display: index === currentStep ? 'block' : 'none' }}>
          <h2>{step.title}</h2>
          {step.fields.map((field) => (
            <div key={field}>
              <label htmlFor={field}>{field}</label>
              <input
                type="number"
                id={field}
                name={field}
                {...register(field, { required: true })}
              />
            </div>
          ))}
          <button type="button" onClick={handlePrev} disabled={currentStep === 0}>
            Previous
          </button>
          <button type="button" onClick={handleNext} disabled={currentStep === steps.length - 1}>
            Next
          </button>
          {currentStep === steps.length - 1 && <button type="submit">Submit</button>}
        </div>
      ))}
    </form>
  );
}

export default MultiStepForm;