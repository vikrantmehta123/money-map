import React from 'react';
import { TextField, Button, Box, Toolbar } from '@mui/material';

const Form = ({ activeStep, formValues, handleChange, handleNext, handleBack, handleSubmit }) => {

    // Conditional rendering of form fields based on the current step
    const renderStepFields = () => {
        switch (activeStep) {
            case 0:
                return (
                    <>
                        <TextField
                            label="Current Age"
                            type="number"
                            name="currentAge"
                            value={formValues.currentAge}
                            onChange={handleChange}
                            placeholder="Enter your current age"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Retirement Age"
                            type="number"
                            name="retirementAge"
                            value={formValues.retirementAge}
                            onChange={handleChange}
                            placeholder="Enter your retirement age"
                            fullWidth
                            margin="normal"
                        />
                    </>
                );
            case 1:
                return (
                    <>
                        <TextField
                            label="Current Principal"
                            type="number"
                            name="currentPrincipal"
                            value={formValues.currentPrincipal}
                            onChange={handleChange}
                            placeholder="Enter current principal"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Annual Inflation (%)"
                            type="number"
                            name="annualInflation"
                            value={formValues.annualInflation}
                            onChange={handleChange}
                            placeholder="Enter annual inflation rate"
                            fullWidth
                            margin="normal"
                        />
                    </>
                );
            case 2:
                return (
                    <>
                        <TextField
                            label="Annual Investment Capacity"
                            type="number"
                            name="annualInvestmentCapacity"
                            value={formValues.annualInvestmentCapacity}
                            onChange={handleChange}
                            placeholder="Enter how much you will save now"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Annual Expected Return Rate (%)"
                            type="number"
                            name="annualReturnRate"
                            value={formValues.annualReturnRate}
                            onChange={handleChange}
                            placeholder="Enter annual return rate"
                            fullWidth
                            margin="normal"
                        />
                    </>
                );
            case 3:
                return (
                    <>
                        <TextField
                            label="Annual Withdrawal"
                            type="number"
                            name="annualWithdrawal"
                            value={formValues.annualWithdrawal}
                            onChange={handleChange}
                            placeholder="Enter the money you need each year now"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Annual Investment Growth Rate (%)"
                            type="number"
                            name="annualInvestmentGrowthRate"
                            value={formValues.annualInvestmentGrowthRate}
                            onChange={handleChange}
                            placeholder="Enter how much you will increase savings each year"
                            fullWidth
                            margin="normal"
                        />
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <Box>
            <Toolbar />
            <Box sx={{ maxWidth: 500, margin: 'auto' }}>
                {/* Render TextFields for the current step */}
                {renderStepFields()}

                {/* Navigation buttons */}
                <Box mt={2}>

                    <Button variant="contained" onClick={handleBack} sx={{ mr: 2 }} disabled={activeStep <= 0}>
                        Back
                    </Button>

                    {activeStep < 3 && (
                        <Button variant="contained" onClick={handleNext}>
                            Next
                        </Button>
                    )}
                    {activeStep === 3 && (
                        <Button variant="contained" color="primary" onClick={handleSubmit}>
                            Submit
                        </Button>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default Form;
