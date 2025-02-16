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

// Task 4: Parameters and Arguments
console.log("\nTask 4- Parameters and Arguments");

const calculateRentalCost = (days, carType, insurance = false) => { // function to calculate rental costs
    let dailyRate = 0;
  
    if (carType === "Economy") { // if economy car, rate will be 40
      dailyRate = 40;
    } else if (carType === "Standard") { // if standard car, rate will be 60
      dailyRate = 60;
    } else if (carType === "Luxury") { // if luxury car, rate will be 100
      dailyRate = 100;
    } else {
      return "Invalid car type"; // if other car, invalid
    }
  
    let totalCost = days * dailyRate;
    
    if (insurance) { // Add insurance cost if applicable
      totalCost += days * 20; // $20 per day for insurance
    }
  
    return `Total Rental Cost: $${totalCost}`; // return amount
  };
  
  // Logging test data outputs
  console.log(calculateRentalCost(3, "Economy", true)); // Expected output: "Total Rental Cost: $180"
  console.log(calculateRentalCost(5, "Luxury", false)); // Expected output: "Total Rental Cost: $500"

// Task 5: Returning Values
console.log("\nTask 5- Returning Values");

function calculateLoanPayment(principal, rate, time) {
    let totalPayment = principal + (principal * rate * time);
    console.log(`Total Payment: $${totalPayment.toFixed(2)}`);
};

//Logging test data output
calculateLoanPayment(1000, 0.05, 2); // Expected output: "Total Payment: $1100.00"
calculateLoanPayment(5000, 0.07, 3); // Expected output: "Total Payment: $6050.00"

// Task 6: Higher order functions
console.log("\nTask 6- Higher Order Functions");

let transactions = [1060, 3000, 18, 204, 4800];
const filterLargeTransactions = (transactions, filterFunction) => {
    console.log(transactions.filter(filterFunction));
}
//logging test data output
filterLargeTransactions(transactions, amount => amount > 1000); // Expected output: [1060, 3000, 4800]

// Task 7: Closures
console.log("\nTask 7- Closures");

const createCartTracker = ()  => {
    let total = 0;
    return function(amount) {
        total += amount;
        console.log(`Total Cart Value: $${total}`);
    };
}

// Logging test data output 
let cart = createCartTracker();
cart(20); // Expected output: "Total Cart Value: $20"
cart(35); // Expected output: "Total Cart Value: $55"