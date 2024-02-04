const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', () => {
  const newTask = taskInput.value.trim();

  if (newTask) {
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item');
    listItem.textContent = `${newTask} - ${new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', })} ${new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}`;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger', 'float-end');
    deleteButton.textContent = 'Sil';
    deleteButton.addEventListener('click', () => {
      listItem.remove();
    });

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = '';
  } else {
    const alert = document.createElement('div');
    alert.classList.add('alert', 'alert-warning', 'text-center');
    alert.textContent = 'Please Enter an Item';
    document.body.prepend(alert);

    setTimeout(() => {
      alert.remove();
    }, 3000); // Remove alert after 4 seconds
  }
});
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addButton.click();
  }
});