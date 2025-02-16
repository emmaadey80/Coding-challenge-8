// Task 1: Fucntion Declaration
console.log("Function Declaration");

function calculateSalary(baseSalary, bonus, taxRate) { // function to compute net salary
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    console.log(`Net Salary: $${netSalary.toFixed(2)}`); // logging net salary template literal
};

// Logging test data output
calculateSalary(5000, 500, 0.1); // Expected output: "Net Salary: $5000.00"
calculateSalary(7000, 1000, 0.15); // Expected output: "Net Salary: $6950.00"