// ===================================================
// SPENDWISE - JAVASCRIPT FOUNDATION
// ===================================================

console.log("====================================");
console.log("🚀 SpendWise Application Initialized");
console.log("====================================\n");

// ---------------------------------------------------
// 1. COLLECT USER INPUT & STORE APPLICATION DATA
// ---------------------------------------------------

// Collect initial total budget
let userBudgetInput = prompt("Enter your total monthly budget ($):", "1500");
let totalBudget = parseFloat(userBudgetInput);

// Collect expense 1 details
let expense1Name = prompt("Enter the name of your first expense:", "Groceries");
let expense1Input = prompt(`Enter the amount for ${expense1Name} ($):`, "350");
let expense1Amount = parseFloat(expense1Input);

// Collect expense 2 details
let expense2Name = prompt("Enter the name of your second expense:", "Rent");
let expense2Input = prompt(`Enter the amount for ${expense2Name} ($):`, "700");
let expense2Amount = parseFloat(expense2Input);

// Collect expense 3 details
let expense3Name = prompt("Enter the name of your third expense:", "Utilities");
let expense3Input = prompt(`Enter the amount for ${expense3Name} ($):`, "150");
let expense3Amount = parseFloat(expense3Input);


// ---------------------------------------------------
// 2. REUSABLE FUNCTIONS FOR CALCULATIONS
// ---------------------------------------------------

/**
 * Calculates total expenses from three individual amounts.
 */
function calculateTotalExpenses(amount1, amount2, amount3) {
  return amount1 + amount2 + amount3;
}

/**
 * Calculates remaining balance given total budget and total expenses.
 */
function calculateRemainingBalance(budget, totalExpenses) {
  return budget - totalExpenses;
}

/**
 * Calculates percentage of budget consumed by total expenses.
 */
function calculatePercentageUsed(budget, totalExpenses) {
  if (budget <= 0) return 0;
  return (totalExpenses / budget) * 100;
}


// ---------------------------------------------------
// 3. EXECUTE CALCULATIONS
// ---------------------------------------------------

let totalExpenses = calculateTotalExpenses(expense1Amount, expense2Amount, expense3Amount);
let remainingBalance = calculateRemainingBalance(totalBudget, totalExpenses);
let percentageUsed = calculatePercentageUsed(totalBudget, totalExpenses);


// ---------------------------------------------------
// 4. DISPLAY RESULTS IN BROWSER CONSOLE
// ---------------------------------------------------

console.log("📊 --- SPENDWISE FINANCIAL SUMMARY ---");
console.log(`Monthly Budget:     $${totalBudget.toFixed(2)}`);
console.log("------------------------------------");

console.log("💸 Itemized Expenses:");
console.log(`  1. ${expense1Name}: $${expense1Amount.toFixed(2)}`);
console.log(`  2. ${expense2Name}: $${expense2Amount.toFixed(2)}`);
console.log(`  3. ${expense3Name}: $${expense3Amount.toFixed(2)}`);
console.log("------------------------------------");

console.log(`Total Spending:     $${totalExpenses.toFixed(2)}`);
console.log(`Remaining Balance:  $${remainingBalance.toFixed(2)}`);
console.log(`Budget Used:        ${percentageUsed.toFixed(1)}%`);
console.log("------------------------------------");

// Conditional Budget Status Message
if (remainingBalance > 0) {
  console.log("✅ Status: You are under budget! Great job saving.");
} else if (remainingBalance === 0) {
  console.log("⚠️ Status: You have spent exactly your full budget.");
} else {
  console.log("🚨 Status: Warning! You have exceeded your budget.");
}

console.log("====================================");
