# SpendWise - JavaScript Foundation

SpendWise is a personal budgeting application designed to help users log income, track category expenses, and analyze remaining balances.

## JavaScript Implementation Overview

### 1. Variables & Data Types
- Primitive data types are used throughout: **Numbers** for financial figures, **Strings** for category descriptions, and **Booleans** implicitly in status conditions.
- Variables are defined using modern ES6 standard keywords: `let` for variables whose values change based on calculations or user prompts, and `const` for fixed values.

### 2. User Input Collection
- User financial input is dynamically gathered using browser `prompt()` methods.
- Numerical values returned as strings from `prompt()` are converted into float numbers using `parseFloat()` to ensure arithmetic accuracy.

### 3. Calculations
- Basic arithmetic operations (`+`, `-`, `*`, `/`) execute financial totals.
- Financial figures are formatted to two decimal places using `.toFixed(2)` for accurate monetary display.

### 4. Reusable Functions
- `calculateTotalExpenses(amount1, amount2, amount3)`: Sums multiple expense figures and returns the total spending amount.
- `calculateRemainingBalance(budget, totalExpenses)`: Subtracts total spending from the total budget to evaluate remaining funds.
- `calculatePercentageUsed(budget, totalExpenses)`: Evaluates the proportion of the user's budget spent as a percentage.
