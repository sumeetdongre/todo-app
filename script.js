const container = document.querySelector('.container');
const button = document.querySelector('button');
const input = document.querySelector('input[type="text"]');
const list = document.querySelector('ul');
const tasksCounter = document.getElementById('tasks-counter');
let count=0;


// click listener for adding task 
button.addEventListener('click', () => {
  
  //alert if input task is empty
  if (input.value === '') {
    const div = document.createElement('div');
    div.classList.add('alert');
    div.appendChild(document.createTextNode('Ooops! There is nothing to add.'));
    container.insertBefore(div, list);
    
    //setting timeout for alert 
    setTimeout(() => {
      div.remove();
    },3000);

  } else {

    //added the input task to list
    const li = document.createElement('li');
     li.classList.add('list-group-item');
    li.innerHTML=`
    <input type="checkbox" name="check" id="task-check">
    <label for="task-check">${input.value}</label>    
    <span class="delete">x</span>`;     
    const div = document.createElement('div');   
    div.appendChild(document.createTextNode('Task added successfully!'));
    container.insertBefore(div, list);
    list.appendChild(li);
    count++;
    tasksCounter.innerHTML=count;

    //setting timeout for alert
    setTimeout(() => {
      div.remove();
    }, 2000);
    input.value = '';
  }
});

list.addEventListener('click', (e) => {

  //delete the task
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
    const div = document.createElement('div');
    div.classList.add('alert');
    div.appendChild(document.createTextNode('Task removed successfully!'));
    container.insertBefore(div, list);
    count--;
    tasksCounter.innerHTML=count;

    setTimeout(() => {
      div.remove();
    }, 2000);
  }
});