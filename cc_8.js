// Task 1: Fucntion Declaration
console.log("Task 1- Function Declaration");

function calculateSalary(baseSalary, bonus, taxRate) { // function to compute net salary
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    console.log(`Net Salary: $${netSalary.toFixed(2)}`); // logging net salary template literal
};

// Logging test data output
calculateSalary(5000, 500, 0.1); // Expected output: "Net Salary: $5000.00"
calculateSalary(7000, 1000, 0.15); // Expected output: "Net Salary: $6950.00"

// Task 2: Function Expression
console.log("\nTask 2- Function Expression");

const calculateDiscount = function(price, discountRate) { // declaring function to determine final price
    let finalPrice = price - (price * discountRate); // formula
    console.log(`Final Price: $${finalPrice.toFixed(2)}`); // logging final price with template literal
};

calculateDiscount(100, 0.2); // Expected output: "Final Price: $80.00"
calculateDiscount(250, 0.15); // Expected output: "Final Price: $212.50"

// Task 3: Arrow Function
console.log("\nTask 3- Arrow Function");

const calculateServiceFee = (amount, serviceType) => {
    let fee = 0;
    
    if (serviceType === "Premium") {
      fee = amount * 0.15;
    } else if (serviceType === "Standard") {
      fee = amount * 0.10;
    } else if (serviceType === "Basic") {
      fee = amount * 0.05;
    } else {
      return "Invalid service type";
    }
    
    return `Service Fee: $${fee.toFixed(2)}`;
  };


// Logging test data output
console.log(calculateServiceFee(200, "Premium")); // Expected output: "Service Fee: $30.00"
console.log(calculateServiceFee(500, "Standard")); // Expected output: "Service Fee: $50.00"