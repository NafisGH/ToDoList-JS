const inputAddTask = document.querySelector('.to-do-list__input_type_add-task');
const buttonSubmitAddTask = document.querySelector('.to-do-list__button_type_add-task');
const TaskList = document.querySelector('.to-do-list__task_list');

const taskItemTemplate = document.querySelector('#task-item-template').content;

let valueInputAddTask = '';
let tasks = [
    { text: 'Полить цветы'},
    { text: 'Сходить в магазин'},
]

tasks.forEach((item, index) => {
    const newTaskItem = taskItemTemplate.querySelector('.to-do-list__task_item').cloneNode(true);
    const taskItemInput = newTaskItem.querySelector('.to-do-list__input_task-item');
    const taskItemNumber = newTaskItem.querySelector('.to-do-list__task-item-number'); 

    taskItemInput.value = item.text;
    taskItemNumber.textContent = 2;
   
    TaskList.append(newTaskItem);
})

inputAddTask.addEventListener('input', (event) => {
    valueInputAddTask = event.target.value;
})

buttonSubmitAddTask.addEventListener('click', (event) => {
event.preventDefault();
console.log('Click');

if(!valueInputAddTask) {
    console.log('Поле пустое')
} else {
    const newTaskItem = taskItemTemplate.querySelector('.to-do-list__task_item').cloneNode(true);
    const taskItemInput = newTaskItem.querySelector('.to-do-list__input_task-item');
    const taskItemNumber = newTaskItem.querySelector('.to-do-list__task-item-number');

    taskItemInput.value = valueInputAddTask;
    taskItemNumber.textContent = 2;
   
    TaskList.append(newTaskItem);

    inputAddTask.value = '';
    valueInputAddTask = '';

}
})