## Mortgage – Your Hive for Easy Loans

Mortgage – Your Hive for Easy Loans is a simple, responsive React web app that helps users explore and compare home loan options. It features a clean interface, smooth Framer Motion animations, and an easy-to-use layout designed for a seamless mortgage browsing experience.


## How Loan Calculation Works
When you take a home loan, the bank or lender charges interest on the amount you borrow. To repay the loan, you pay a fixed monthly amount called EMI (Equated Monthly Installment). The EMI includes both the principal and the interest.

The EMI is calculated using a standard formula:

     𝐸𝑀𝐼 = 𝑃 × r × (1+r)𝑛 / (1+r)𝑛 - 1
 
Where:

P is the principal or loan amount.

r is the monthly interest rate, which is the annual interest rate divided by 12 and then by 100. For example, if the annual rate is 12%, then the monthly rate is 0.01 (12 ÷ 12 ÷ 100).

n is the total number of monthly payments (loan tenure in months). For example, a 5-year loan will have 60 monthly payments.

This formula calculates a fixed EMI so that you pay the same amount every month during the entire loan tenure. In the beginning, the interest part of your EMI is higher, and gradually the principal repayment increases over time.

Knowing the EMI helps you plan your finances and decide how much loan you can afford based on your monthly income.

In this project, we use this formula to help users calculate their estimated monthly payments by entering loan amount, interest rate, and tenure. This makes it easier for users to compare different loan options and choose the best one.


## 🛠️ Tech Stack

React

Vite

Framer Motion

Tailwind CSS

React Router (if used)

## 🚀 How to Run the Project

1. Clone the Repository

git clone https://github.com/PrashantSah07/Mortgage-Project.git
cd Mortgage-Project

2. Install Dependencies

npm install

3. Start the Development Server

npm run dev

## Notes

1. Make sure Node.js and npm are installed.

2. Open http://localhost:5173 in your browser to see the app.