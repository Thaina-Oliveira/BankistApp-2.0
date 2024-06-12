# Bankist App 2.0

🚀 **Bankist App** just got even better! I am excited to introduce a series of new features and improvements to provide a more efficient and secure banking experience. Below are the key updates:

## ✨ New Features

### 🗓️ Transaction Dates and Localization
- **Transaction Dates:** Each transaction now displays the date it was made.
- **Localization:** Implemented date and currency formatting based on the user's location using the `Intl.DateTimeFormat` and `Intl.NumberFormat` APIs.

### 🧾 Formatted Transactions
- **Custom Formatting:** Transactions are displayed with dates and currencies formatted specifically for the user's locale, providing a more intuitive and user-friendly interface.

### ⏲️ Automatic Logout Timer
- **Enhanced Security:** Introduced a timer that automatically logs users out after a period of inactivity, ensuring greater account security.

### ⏳ Delayed Loan Approval
- **Realistic Simulation:** Loans are approved with a simulated delay to reflect real banking processes, offering a more authentic user experience.

### 🖥️ Dynamic UI Updates
- **Responsive Interface:** Optimized the user interface to reflect updates in real-time, ensuring seamless and responsive navigation.

## How to Run the Project

1. Clone the repository:
```bash
thaina-oliveira.github.io/Bankist-App/
````
## 🛠️ Technologies Used

  ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

- **📝 HTML:** For structuring the web page.
- **🎨 CSS:** For styling the application.
- **💻 JavaScript:** For adding interactivity and functionality.

## 🔗Preview Current Project

https://github.com/Thaina-Oliveira/Bankist-App/assets/138075601/8aa2dcbf-8e74-4bce-ad39-164357806184

## 📝 How to Use

1. **🔐 Login:**
   - Use the username (first letter of each part of the owner's name, in lowercase, concatenated) and the corresponding PIN to log in. For example, for Jonas Schmedtmann, the username is `js` and the PIN is `1111`.

2. **📋 View Transactions and Balance:**
   - After logging in, the user can view their transaction history and current balance.

3. **💸 Make Transfers:**
   - Enter the username of the recipient and the amount to transfer money to another account.

4. **💳 Request Loans:**
   - Enter the loan amount. A loan is approved if the account has had a deposit of at least 10% of the requested loan amount.

5. **🗑️ Close Account:**
   - Enter the username and PIN to delete the account.

6. **🔄 Sort Transactions:**
   - Click the sort button to toggle the sorting of transactions by amount.

## 📊 Example Data

- **Account 1:**
  - Owner: Jonas Schmedtmann
  - Movements: [200, 450, -400, 3000, -650, -130, 70, 1300]
  - Interest Rate: 1.2%
  - Username: 'js'
  - PIN: 1111
  - Currency: 'EUR'
  - Locale: 'pt-PT'
  -  movementsDates: [
    '2023-11-18T21:31:17.178Z',
    '2023-12-23T07:42:02.383Z',
    '2024-01-28T09:15:04.904Z',
    '2024-04-01T10:17:24.185Z',
    '2024-05-08T14:11:59.604Z',
    '2024-06-06T17:01:17.194Z',
    '2024-06-08T23:36:17.929Z',
    '2024-06-09T10:51:36.790Z',]


- **Account 2:**
  - Owner: Jessica Davis
  - Movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30]
  - Interest Rate: 1.5%
  - Username: 'jd'
  - PIN: 2222
  - Currency: 'USD'
  - Locale: 'ja-JP'
  -  movementsDates: [
    '2023-11-01T13:15:33.035Z',
    '2023-11-30T09:48:16.867Z',
    '2023-12-25T06:04:23.907Z',
    '2024-01-25T14:18:46.235Z',
    '2024-02-05T16:33:06.386Z',
    '2024-04-10T14:43:26.374Z',
    '2024-06-25T18:49:59.371Z',
    '2024-07-26T12:01:20.894Z',
  ]

- **Account 3:**
  - Owner: Steven Thomas Williams
  - Movements: [200, -200, 340, -300, -20, 50, 400, -460, 800, -200, 900, -500]
  - Interest Rate: 0.7%
  - username: 'stw'
  - PIN: 3333
  - Currency: 'JPY'
  - Locale: 'en-US'
  -  movementsDates: [
    '2024-01-01T13:15:33.035Z',
    '2024-01-05T09:48:16.867Z',
    '2024-01-15T06:04:23.907Z',
    '2024-01-20T14:18:46.235Z',
    '2024-01-25T16:33:06.386Z',
    '2024-02-01T14:43:26.374Z',
    '2024-02-05T18:49:59.371Z',
    '2024-02-10T12:01:20.894Z',
    '2024-03-15T13:15:33.035Z',
    '2024-04-20T09:48:16.867Z',
    '2024-06-10T06:04:23.907Z',
    '2024-02-11T14:18:46.235Z',
  ]


- **Account 4:**
  - Owner: Sarah Smith
  - Movements: [430, 1000, 700, 50, 90]
  - Interest Rate: 1.0%
  - username: 'ss'
  - PIN: 4444
  - Currency: 'BRL'
  - Locale: 'pt-BR'
  - movementsDates: [
    '2024-01-01T13:15:33.035Z',
    '2024-01-05T09:48:16.867Z',
    '2024-01-20T14:18:46.235Z',
    '2024-02-01T14:43:26.374Z',
    '2024-02-10T12:01:20.894Z',
    '2024-02-15T13:15:33.035Z',
    '2024-06-02T06:04:23.907Z',
    '2024-06-05T16:33:06.386Z',
    '2024-06-08T18:49:59.371Z',
    '2024-06-10T09:48:16.867Z',
  ]

##  📝License
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

