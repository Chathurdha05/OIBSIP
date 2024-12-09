document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements for Tasks
    const taskInput = document.querySelector('#taskInput');
    const categoryInput = document.querySelector('#category');
    const priorityInput = document.querySelector('#priority');
    const dueDateInput = document.querySelector('#dueDate');
    const addTaskButton = document.querySelector('#addTaskButton');
  
    const studyPendingTasksList = document.querySelector('#studyPendingTasksList');
    const studyCompletedTasksList = document.querySelector('#studyCompletedTasksList');
    const personalPendingTasksList = document.querySelector('#personalPendingTasksList');
    const personalCompletedTasksList = document.querySelector('#personalCompletedTasksList');
  
    // DOM Elements for Events
    const eventNameInput = document.querySelector('#eventNameInput');
    const eventDescriptionInput = document.querySelector('#eventDescriptionInput');
    const eventDateInput = document.querySelector('#eventDateInput');
    const eventTimeInput = document.querySelector('#eventTimeInput');
    const addEventButton = document.querySelector('#addEventButton');
  
    const upcomingEventsList = document.querySelector('#upcomingEventsList');
    const pastEventsList = document.querySelector('#pastEventsList');
  
    // Toggle Dropdown visibility
    window.toggleDropdown = (dropdownId) => {
      const dropdown = document.getElementById(dropdownId);
      dropdown.classList.toggle('active');
    };
  
    // Add Task
    addTaskButton.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      const category = categoryInput.value;
      const priority = priorityInput.value;
      const dueDate = dueDateInput.value;
  
      if (!taskText || !dueDate) {
        alert('Please fill out all fields!');
        return;
      }
  
      const priorityClass =
        priority === 'high' ? 'high-priority' : priority === 'medium' ? 'medium-priority' : 'low-priority';
  
      const list = category === 'study' ? studyPendingTasksList : personalPendingTasksList;
      const taskElement = document.createElement('li');
  
      taskElement.innerHTML = `
        <span>
          ${taskText} <span class="${priorityClass}">${priority}</span>
          <small>(Due: ${dueDate})</small>
        </span>
        <div class="task-options">
          <button class="edit-btn">Edit</button>
          <button class="complete-btn">Complete</button>
          <button class="delete-btn">Delete</button>
        </div>
      `;
  
      taskElement.querySelector('.complete-btn').addEventListener('click', () => {
        list.removeChild(taskElement);
        const completedList =
          category === 'study' ? studyCompletedTasksList : personalCompletedTasksList;
        taskElement.classList.add('completed-task');
        completedList.appendChild(taskElement);
      });
  
      taskElement.querySelector('.delete-btn').addEventListener('click', () => {
        list.removeChild(taskElement);
      });
  
      list.appendChild(taskElement);
  
      // Clear input fields
      taskInput.value = '';
      dueDateInput.value = '';
    });
  
    // Add Event
    addEventButton.addEventListener('click', () => {
      const eventName = eventNameInput.value.trim();
      const eventDescription = eventDescriptionInput.value.trim();
      const eventDate = eventDateInput.value;
      const eventTime = eventTimeInput.value;
  
      if (!eventName || !eventDate || !eventTime) {
        alert('Please fill out all event fields!');
        return;
      }
  
      const eventElement = document.createElement('li');
      eventElement.innerHTML = `
        <strong>${eventName}</strong>
        <small>${eventDate} at ${eventTime}</small>
        <p>${eventDescription}</p>
      `;
  
      upcomingEventsList.appendChild(eventElement);
  
      eventNameInput.value = '';
      eventDescriptionInput.value = '';
      eventDateInput.value = '';
      eventTimeInput.value = '';
    });
  });
  