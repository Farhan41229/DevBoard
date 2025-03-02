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
