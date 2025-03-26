let EachTaskTimeCreation = [];
document
  .getElementById("overviewButton")
  .addEventListener("click", function () {
    // Wait for 1 second before loading tasks
    setTimeout(function () {
      loadTasksToOverview();
    }, 1000); // 1000 milliseconds = 1 second
  });

// Function to load tasks dynamically when navigating to the overview page
function loadTasksToOverview() {
  // Ensure we are on the correct page (Overview)
  if (window.location.hash !== "#overview") {
    return;
  }

  const tasksContainer = document.getElementById("task-holder"); // Make sure this selector targets the right place in the DOM

  // Loop through tasks array and add each task to the container
  tasks.forEach(function (task) {
    // Check if task has already been added to prevent duplicates
    if (EachTaskTimeCreation.includes(task.createdAt)) {
      return; // Skip if task already exists
    }

    // Add the task's createdAt to the list to avoid duplicates
    EachTaskTimeCreation.push(task.createdAt);

    // Create the task card
    const taskCard = document.createElement("div");
    taskCard.classList.add("col-md-3");
    taskCard.id = `task-${task.createdAt}`;
    taskCard.innerHTML = `
      <div class="card">
        <img src="../assets/images/products/s4.jpg" class="card-img-top" alt="${task.title}" />
        <div class="card-body">
          <h5 class="card-title">${task.title}</h5>
          <p class="card-text">${task.description}</p>
        </div>
      </div>
    `;

    tasksContainer.appendChild(taskCard);
  });
}

// Listen for hash change to trigger the rendering when navigating to Overview
window.addEventListener("hashchange", function () {
  if (window.location.hash === "#overview") {
    loadTasksToOverview(); // Dynamically load tasks if user navigates to Overview
  }
});
