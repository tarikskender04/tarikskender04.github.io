// // Global array to track rendered tasks
// let EachTaskTimeCreation = [];

// // Example tasks array (this would normally come from your backend)
// let tasks = [
//   {
//     title: "Task 1",
//     description: "Description for task 1",
//     createdAt: "2025-04-01T20:00:00Z",
//   },
//   {
//     title: "Task 2",
//     description: "Description for task 2",
//     createdAt: "2025-04-01T20:05:00Z",
//   },
//   // ... other tasks
// ];

// function loadTasksToOverview() {
//   // Confirm we are on the overview page
//   if (window.location.hash !== "#overview") {
//     return;
//   }

//   const taskContainer = document.getElementById("task-holder");
//   if (!taskContainer) {
//     console.error("No task holder found in the DOM.");
//     return;
//   }

//   // Clear previous tasks (if needed)
//   taskContainer.innerHTML = "";

//   // Loop through tasks and render each one
//   tasks.forEach(function (task) {
//     // Avoid duplicate tasks
//     if (EachTaskTimeCreation.includes(task.createdAt)) {
//       return;
//     }
//     EachTaskTimeCreation.push(task.createdAt);

//     const taskCard = document.createElement("div");
//     taskCard.classList.add("col-md-3");
//     taskCard.id = `task-${task.createdAt}`;
//     taskCard.innerHTML = `
//       <div class="card">
//         <img src="../assets/images/products/s4.jpg" class="card-img-top" alt="${task.title}" />
//         <div class="card-body">
//           <h5 class="card-title">${task.title}</h5>
//           <p class="card-text">${task.description}</p>
//         </div>
//       </div>
//     `;
//     taskContainer.appendChild(taskCard);
//   });
// }
