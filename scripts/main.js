//------------------------------------------------------- Query Selectors ---------------------------------------------------------------
// Functions for Reusable Query

// Add Money Query Selectors
const add_Money_switch_Selector = document.querySelector('#ADD_MONEY_SWITCH');
const add_Money_section_Selector = document.querySelector('#add_money-section');
const add_Money_btn_Selector = document.querySelector('#Add_money-btn');
const account_Number_Selector = document.querySelector('#Bank_Account_Number');
const deposit_Money_Selector = document.querySelector('#Deposit_Number');
const pin_Number_Selector = document.querySelector('#PIN_NUMBER');
// Other Selectors
const balance_Selector = document.querySelector('#Balance-check');
// Cashout Selectors
const cashout_section_Selector = document.querySelector('#cashout-section');
const cashout_switch_Selector = document.querySelector('#CASHOUT_SWITCH');
const cashout_btn_Selector = document.querySelector('#Cashout_money-btn');
const cashout_agent_number_Selector = document.querySelector('#Agnet_Number');
const Withdraw_Number_Selector = document.querySelector('#Withdraw_Number');
const Agnet_PIN_NUMBER_Selector = document.querySelector('#Agnet_PIN_NUMBER');
// Global Variables + Initial Configuration
let balance = 45000;
cashout_section_Selector.style.display = 'none';
add_Money_section_Selector.style.display = 'none';

// Add Money App Logic
add_Money_switch_Selector.addEventListener('click', (event) => {
  add_Money_section_Selector.style.display = 'block';
  cashout_section_Selector.style.display = 'none';
});
add_Money_btn_Selector.addEventListener('click', (event) => {
  //   const account_Number = account_Number_Selector.value;
  const bank_account_Number = account_Number_Selector.value;
  const deposit_Money = deposit_Money_Selector.value;
  const pin_Number = pin_Number_Selector.value;
  event.preventDefault();
  if (deposit_Money > 0 && pin_Number == 1234) {
    console.log('Everything ok');
    balance += Number(deposit_Money);
    balance_Selector.textContent = String(`$ ${balance}`);
  }
});

// Cashout App Logic
cashout_switch_Selector.addEventListener('click', (event) => {
  event.preventDefault();
  add_Money_section_Selector.style.display = 'none';
  cashout_section_Selector.style.display = 'block';
});

cashout_btn_Selector.addEventListener('click', (event) => {
  event.preventDefault();
  let Agent_Number = cashout_agent_number_Selector.value;
  let withdraw_amount = Withdraw_Number_Selector.value;
  let agent_pin_number = Agnet_PIN_NUMBER_Selector.value;

  if (Agent_Number.length < 11 && agent_pin_number != '1234')
    alert('Please enter a valid agent number and pin number');
  else if (balance < withdraw_amount || withdraw_amount == 0)
    alert('Insufficient Balance or No input');
  else {
    balance -= Number(withdraw_amount);
    balance_Selector.textContent = String(`$ ${balance}`);
  }
});
