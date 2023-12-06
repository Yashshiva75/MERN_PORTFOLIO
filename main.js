document.addEventListener('DOMContentLoaded', function(){
    const taskInput=document.getElementsById('taskInput');
    const addTaskBtn =document.getElementsById('addTaskBtn');
    const taskList=document.getElementsById('taskList');

    document.addEventListener('click',function(){
        const taskText = taskInput.value.trim();

        if(taskText !==''){
            addTaskBtn(taskText);
            taskInput.value='';
        }
    });

    function addTask(taskText){
        const taskItem = document.createElement('li');
        taskItem.className='taskItem';

        const taskTextElement =document.createElement('span');
        taskTextElement.className='taskText';

        const deleteBtn = document.createElement('button');
        deleteBtn.className='deleteBtn';
        deleteBtn.textContent='Delete';
        deleteBtn.addEventListener('click',function(){
            taskItem.remove();
        });
        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(deleteBtn);

        taskList.appendChild(taskItem);
    }
})
    