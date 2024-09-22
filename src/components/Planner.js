import React, { useState } from "react";
import Form from "./Form";
import FinancialPlanTable from "./FinancialPlanTable";
import FormSidebar from "./FormSidebar";
import { Toolbar, Box } from "@mui/material";


const Planner = () => {
    // States for the Data Table
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [rows, setRows] = useState([]);

    // States for the Form
    const [activeStep, setActiveStep] = useState(0);
    const [formValues, setFormValues] = useState({
        currentAge: '',
        retirementAge: 50,
        currentPrincipal: 0,
        annualInflation: 5,
        annualReturnRate: 11,
        annualInvestmentCapacity: 0,
        annualWithdrawal: '',
        annualInvestmentGrowthRate: 6
    });

    // Handler to go to the next step in form
    const handleNext = () => {
        if (activeStep + 1 <= 3) {
            setActiveStep((prevStep) => prevStep + 1);
        }
    };

    // Handler to go to the previous step
    const handleBack = () => {
        if (activeStep - 1 >= 0) {
            setActiveStep((prevStep) => prevStep - 1);
        }
    };

    // Handle input changes
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    // Handler for form submission
    const handleSubmit = () => {
        let output = computeFinancialPlan();
        setRows(output);
        setIsFormSubmitted(true);
    }

    const handleSidebarUpdate = (updatedValues) => {
        setFormValues(updatedValues);
    };
    // Computes the financial plan
    const computeFinancialPlan = () => {

        // Convert Rates to Fractions
        let inflationRate = parseFloat(formValues.annualInflation) / 100;
        let rateOfReturn = parseFloat(formValues.annualReturnRate) / 100;
        let investmentGrowthRate = parseFloat(formValues.annualInvestmentGrowthRate) / 100;

        // Convert everything to Number
        let age = parseInt(formValues.currentAge, 10);
        let retirementAge = parseInt(formValues.retirementAge, 10);

        let principal = parseFloat(formValues.currentPrincipal);
        let annualInvestment = parseFloat(formValues.annualInvestmentCapacity);
        let annualWithdrawal = parseFloat(formValues.annualWithdrawal);

        let output = [];
        let timestep = 1;
        let currentNetworth = principal;

        while (age <= 85) {
            let outflow = 0;
            let inflow = annualInvestment * Math.pow((1 + investmentGrowthRate), timestep);

            if (age > retirementAge) {
                outflow = annualWithdrawal * Math.pow((1 + inflationRate), timestep);
                inflow = 0;
            }

            // Adjust the networth calculation to add inflow and subtract outflow
            let networth = (currentNetworth + inflow) * (1 + rateOfReturn) - outflow;
            currentNetworth = networth;

            let currentYearInvestment = {
                "age": age,
                "inflow": inflow.toFixed(0),
                "outflow": outflow.toFixed(0),
                "networth": networth.toFixed(0)
            };

            output.push(currentYearInvestment);
            timestep += 1;
            age += 1;
        }

        return output;

    }

    return (
        <Box sx={{ display: 'flex' }}>
            <Toolbar />
            {isFormSubmitted && (
                <FormSidebar formValues={formValues} updateFormValues={handleSidebarUpdate} handleSubmit={handleSubmit} />
            )}
            <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
                {!isFormSubmitted ?
                    <Form
                        activeStep={activeStep}
                        formValues={formValues}
                        handleChange={handleChange}
                        handleNext={handleNext}
                        handleBack={handleBack}
                        handleSubmit={handleSubmit}

                    /> : <FinancialPlanTable rows={rows} />}
            </Box>

        </Box>
    )
}

export default Planner;