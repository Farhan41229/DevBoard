// Query Selectors
const task1_selector = document.getElementById('task-1-btn');
const task2_selector = document.getElementById('task-2-btn');
const task3_selector = document.getElementById('task-3-btn');
const task4_selector = document.getElementById('task-4-btn');
const task5_selector = document.getElementById('task-5-btn');
const task6_selector = document.getElementById('task-6-btn');
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
  }
});
