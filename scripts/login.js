// Query Selectors
const login_button_selector = document.querySelector('#login-btn');
const mobile_number_selector = document.querySelector('#Mobile_Number');
const pin_number_selector = document.querySelector('#PIN_NUMBER');
// Login Functionality
let test = 0;

login_button_selector.addEventListener('click', (event) => {
  event.preventDefault();
  const mobile_number = Number(mobile_number_selector.value);
  const pin_number = Number(pin_number_selector.value);
  if (!mobile_number || !pin_number) {
    console.log(`Incorrect Input. Please enter valid Mobile and PIN number...`);
  } else {
    if (mobile_number == 1312341122334 && pin_number == 1234) {
      console.log(`Everything OK 🎉🎉🎉. Proceeding to the next page.`);
      window.location.href = 'main.html';
    } else {
      console.log('Incorrect Input. Please enter again!!!');
    }
  }
});
