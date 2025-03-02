// Query Selectors
const task1_selector = document.getElementById('task-1-btn');
const task2_selector = document.getElementById('task-2-btn');
const task3_selector = document.getElementById('task-3-btn');
const task4_selector = document.getElementById('task-4-btn');
const task5_selector = document.getElementById('task-5-btn');
const task6_selector = document.getElementById('task-6-btn');
const tasks_container = document.getElementById('Tasks-history-Container');
const clear_history_selector = document.getElementById('clear-history-btn');
// Global variables
let pending_tasks = 6;
let finished_tasks = 23;
let task1_finished = false;
let task2_finished = false;
let task3_finished = false;
let task4_finished = false;
let task5_finished = false;
let task6_finished = false;
// Initialize
setInnerText('Assigned-Tasks', pending_tasks);
setInnerText('current-date', getFormattedDate());

// Task 1 Logic
task1_selector.addEventListener('click', function (event) {
  event.preventDefault();
  if (!task1_finished) {
    alert('Board Updated Successfully');
    task1_selector.style.backgroundColor = 'gray';
    task1_finished = true;
    pending_tasks--;
    finished_tasks++;
    setInnerText('Assigned-Tasks', pending_tasks);
    setInnerText('Finished-Tasks', finished_tasks);
    const p_element = document.createElement('p');
    p_element.className = 'bg-blue-50 p-[20px] rounded-lg mb-7';
    p_element.innerHTML = `You have Complete The Task ${getInnerText(
      'task-1-heading'
    )} at ${getCurrentTime()}`;
    tasks_container.appendChild(p_element);
    if (pending_tasks == 0)
      alert('congrats!!! You have completed all of the current tasks');
  }
});
// Task 2 Logic
task2_selector.addEventListener('click', function (event) {
  event.preventDefault();
  if (!task2_finished) {
    alert('Board Updated Successfully');
    task2_selector.style.backgroundColor = 'gray';
    task2_finished = true;
    pending_tasks--;
    finished_tasks++;
    setInnerText('Assigned-Tasks', pending_tasks);
    setInnerText('Finished-Tasks', finished_tasks);
    const p_element = document.createElement('p');
    p_element.className = 'bg-blue-50 p-[20px] rounded-lg mb-7';
    p_element.innerHTML = `You have Complete The Task ${getInnerText(
      'task-2-heading'
    )} at ${getCurrentTime()}`;
    tasks_container.appendChild(p_element);
    if (pending_tasks == 0)
      alert('congrats!!! You have completed all of the current tasks');
  }
});
// Task 3 Logic
task3_selector.addEventListener('click', function (event) {
  event.preventDefault();
  if (!task3_finished) {
    alert('Board Updated Successfully');
    task3_selector.style.backgroundColor = 'gray';
    task3_finished = true;
    pending_tasks--;
    finished_tasks++;
    setInnerText('Assigned-Tasks', pending_tasks);
    setInnerText('Finished-Tasks', finished_tasks);
    const p_element = document.createElement('p');
    p_element.className = 'bg-blue-50 p-[20px] rounded-lg mb-7';
    p_element.innerHTML = `You have Complete The Task ${getInnerText(
      'task-3-heading'
    )} at ${getCurrentTime()}`;
    tasks_container.appendChild(p_element);
    if (pending_tasks == 0)
      alert('congrats!!! You have completed all of the current tasks');
  }
});
// Task 4 Logic
task4_selector.addEventListener('click', function (event) {
  event.preventDefault();
  if (!task4_finished) {
    alert('Board Updated Successfully');
    task4_selector.style.backgroundColor = 'gray';
    task4_finished = true;
    pending_tasks--;
    finished_tasks++;
    setInnerText('Assigned-Tasks', pending_tasks);
    setInnerText('Finished-Tasks', finished_tasks);
    const p_element = document.createElement('p');
    p_element.className = 'bg-blue-50 p-[20px] rounded-lg mb-7';
    p_element.innerHTML = `You have Complete The Task ${getInnerText(
      'task-4-heading'
    )} at ${getCurrentTime()}`;
    tasks_container.appendChild(p_element);
    if (pending_tasks == 0)
      alert('congrats!!! You have completed all of the current tasks');
  }
});
// Task 5 Logic
task5_selector.addEventListener('click', function (event) {
  event.preventDefault();
  if (!task5_finished) {
    alert('Board Updated Successfully');
    task5_selector.style.backgroundColor = 'gray';
    task5_finished = true;
    pending_tasks--;
    finished_tasks++;
    setInnerText('Assigned-Tasks', pending_tasks);
    setInnerText('Finished-Tasks', finished_tasks);
    const p_element = document.createElement('p');
    p_element.className = 'bg-blue-50 p-[20px] rounded-lg mb-7';
    p_element.innerHTML = `You have Complete The Task ${getInnerText(
      'task-5-heading'
    )} at ${getCurrentTime()}`;
    tasks_container.appendChild(p_element);
    if (pending_tasks == 0)
      alert('congrats!!! You have completed all of the current tasks');
  }
});
// Task 6 Logic
task6_selector.addEventListener('click', function (event) {
  event.preventDefault();
  if (!task6_finished) {
    alert('Board Updated Successfully');
    task6_selector.style.backgroundColor = 'gray';
    task6_finished = true;
    pending_tasks--;
    finished_tasks++;
    setInnerText('Assigned-Tasks', pending_tasks);
    setInnerText('Finished-Tasks', finished_tasks);
    const p_element = document.createElement('p');
    p_element.className = 'bg-blue-50 p-[20px] rounded-lg mb-7';
    p_element.innerHTML = `You have Complete The Task ${getInnerText(
      'task-6-heading'
    )} at ${getCurrentTime()}`;
    tasks_container.appendChild(p_element);
    if (pending_tasks == 0)
      alert('congrats!!! You have completed all of the current tasks');
  }
});

// Clear History Logic
clear_history_selector.addEventListener('click', (event) => {
  event.preventDefault();
  tasks_container.innerHTML = '';
});

// Theme Button Challenge
document
  .getElementById('Theme-Button')
  .addEventListener('click', (event) => {
    document.body.style.backgroundColor = getRandomHexColor();
  });
