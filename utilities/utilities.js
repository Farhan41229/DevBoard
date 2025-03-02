function getValue(id) {
  const element = document.querySelector(`#${id}`);
  return element ? element.value : null; // Prevents errors if element doesn't exist
}

function getInnerText(id) {
  const element = document.querySelector(`#${id}`);
  return element ? element.innerText : null; // Prevents errors if element doesn't exist
}

function setInnerText(id, value) {
  const element = document.querySelector(`#${id}`);
  if (element) element.innerText = value;
}

function toggleVisibility(id) {
  const element = document.getElementById(id);
  if (element) {
    element.style.display = element.style.display === 'none' ? 'block' : 'none';
  }
}
function SetStatus(id, status) {
  document.getElementById(id).style.display = status;
}

function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert 24-hour time to 12-hour format
  hours = hours % 12 || 12; // Convert 0 to 12 for midnight

  return `${hours}:${minutes}:${seconds} ${ampm}`;
}

function getFormattedDate() {
  const now = new Date();

  // Get weekday abbreviation (e.g., "Wed")
  const weekday = now.toLocaleString('en-US', { weekday: 'short' });

  // Get month abbreviation (e.g., "Jul")
  const month = now.toLocaleString('en-US', { month: 'short' });

  // Get the day and year
  const day = now.getDate();
  const year = now.getFullYear();

  return `${weekday},\n${month} ${day} ${year}`;
}
// Example usage:
// console.log(getFormattedDate()); // Outputs something like "Wed,\nJul 28 2025"

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Example usage:
// console.log(getRandomHexColor()); // Outputs something like "#a3f4b2"

