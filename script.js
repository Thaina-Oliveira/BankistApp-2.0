'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2023-11-18T21:31:17.178Z',
    '2023-12-23T07:42:02.383Z',
    '2024-01-28T09:15:04.904Z',
    '2024-04-01T10:17:24.185Z',
    '2024-05-08T14:11:59.604Z',
    '2024-06-06T17:01:17.194Z',
    '2024-06-08T23:36:17.929Z',
    '2024-06-09T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2023-11-01T13:15:33.035Z',
    '2023-11-30T09:48:16.867Z',
    '2023-12-25T06:04:23.907Z',
    '2024-01-25T14:18:46.235Z',
    '2024-02-05T16:33:06.386Z',
    '2024-04-10T14:43:26.374Z',
    '2024-06-25T18:49:59.371Z',
    '2024-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'ja-JP',
};
const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460, 800, -200, 900, -500],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
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
  ],
  currency: 'JPY',
  locale: 'en-US',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90, -300, 400, -200, -600, 300],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
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
  ],
  currency: 'BRL',
  locale: 'pt-BR',
};

const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions
const formatMovementDate = function (date, locale) {
  const CalcDaysPassed = (date1, date2) =>
    Math.round(Math.abs((+date1 - +date2) / (1000 * 60 * 60 * 24)));

  const daysPassed = CalcDaysPassed(new Date(), date);
  console.log(daysPassed);
  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, '0');
    // const month = `${date.getMonth() + 1}`.padStart(2, '0');
    // const year = date.getFullYear();
    // const hour = `${date.getHours()}`.padStart(2, 0);
    // const minutes = `${date.getMinutes()}`.padStart(2, 0);

    return new Intl.DateTimeFormat(locale).format(date);
  }
};

// Implementing the internationalization to the movements
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    // currencyDisplay: 'symbol',
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  const sortingMovements = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  // emptying the container movements to start adding new elements
  containerMovements.innerHTML = '';

  sortingMovements.forEach(function (mov, i) {
    // using the ternery operator to change between deposits and withdrawls
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    // Adding dates
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formarttedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
  <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">${displayDate}</div>
    <div class="movements__value">${formarttedMov}</div>
  </div>`;

    // adding the html after the tag has opened, entao sempre que o loop se realizar irá adicionar o elemento no topo
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// printing the balance in the website
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  // formatting the balance
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

// Displaying the summary
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const withdrawals = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(
    Math.abs(withdrawals),
    acc.locale,
    acc.currency
  );

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

// computing usernames
const createUsernames = function (accs) {
  // in each loop a new username is added to the object
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

// updating UI
const updateUI = function (acc) {
  displayMovements(acc);
  // Display balance
  calcDisplayBalance(acc);
  // // Display summary
  calcDisplaySummary(acc);
};

// Countdown timer
const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer, log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }

    // Decrease timer in 1s
    time--;
  };
  // Set time to 5 minutes
  let time = 300;
  // call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};
/////////////////////////////////////////////////
// event handlers
// login and pin

let currentAccount, timer;

btnLogin.addEventListener('click', function (e) {
  // when clicked the e.preventDefault will prevent form from submmiting
  e.preventDefault();

  // checking to find a username like the one inserted
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  // checcking if the pin is correct
  // if correct, it should display a welcome message
  if (currentAccount?.pin === +inputLoginPin.value) {
    console.log('LOGIN');

    // Display UI message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    // Display movements, it will chage accodording to the account's owner info

    // Create current date
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };

    // const locale = navigator.language;

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, '0');
    // const month = `${now.getMonth() + 1}`.padStart(2, '0');
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, '0');
    // const minutes = `${now.getMinutes()}`.padStart(2, '0');
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minutes}`; //10/5/2024 10:29

    //clear input field
    inputLoginUsername.value = inputLoginPin.value = '';

    // removing focus
    inputLoginPin.blur();

    // Implemening the timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // update UI
    updateUI(currentAccount);
  }
});

// Transfering money from one account to another
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault(); //this prevent the default behaviour of forms

  const amount = +inputTransferAmount.value;

  // using the accounts. find to find the account we will transfer the money to
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  // cleaning the inputs in the tranfers section
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    // adding a new movement to the list
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    // adding new dates to the movementsDates list
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAccount.movementsDates.push(new Date().toISOString());

    updateUI(currentAccount);

    // Reset the timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

// request a loan section
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  // some requiments to check for the loan approval
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // setting the setTimeout to approve the loan
    setTimeout(function () {
      // add movements
      currentAccount.movements.push(amount);

      // adding new dates to the movementsDates list
      currentAccount.movementsDates.push(new Date().toISOString());

      // update ui
      updateUI(currentAccount);

      // Reset the timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 3000);
  }
  inputLoanAmount.value = '';
});

// deleting the account using the Index Finder
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  // checking if the current user is the same as the user deleting the account
  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    // deleting the account from the accounts
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username //this part of the statement returns either true or false, then the find index will return the index of the first element in the array that matched this condition
    );
    console.log(index); //output: 0 as the first element in the array, when you log into the stevn's account it shows the number 2, as the third element in the array

    // delete account
    accounts.splice(index, 1); //this part will delete the curent account. The number 1 in accounts.splice(index, 1) represents the number of elements to remove from the accounts array, starting at the position specified by index.
    // when you try to  log in nothing happends and on the console it shows undefinied and on the accounts array the current account was successfully deleted

    //hide UI
    containerApp.style.opacity = 0;
  }

  // clearing the inputs in the close account section
  inputCloseUsername.value = inputClosePin.value = '';
});

// variable to preserve the sorted state throughout the clicks
let sorted = false;
// will change according the !sorted parameter in the displayMovements function, if the sorted is currently false when the button is clicked it will turn to true, if not, will turn to false.

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
