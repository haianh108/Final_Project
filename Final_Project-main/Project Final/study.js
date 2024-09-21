document.getElementById('add-lesson-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get the input values
    const title = document.getElementById('lesson-title').value;
    const description = document.getElementById('lesson-description').value;

    // Create a new lesson element dynamically
    const lessonGrid = document.getElementById('lesson-grid');
    const newLessonBox = document.createElement('div');
    newLessonBox.className = 'lesson-box';
    newLessonBox.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <button onclick="navigateToLesson('${title.toLowerCase().replace(/\s/g, '-')}')">Start Lesson</button>
    `;

    // Append the new lesson to the lesson grid
    lessonGrid.appendChild(newLessonBox);

    // Show success message
    document.getElementById('lesson-success-message').style.display = 'block';

    // Clear the form
    document.getElementById('add-lesson-form').reset();
});

// Handle quiz answer check
function checkAnswer(answer) {
    const result = document.getElementById("quiz-result");
    if (answer === 'run') {
        result.textContent = "Correct! 'Run' means to move swiftly on foot.";
        result.style.color = "green";
    } else {
        result.textContent = "Incorrect. Try again.";
        result.style.color = "red";
    }
}

// Handle navigation to different lessons
function navigateToLesson(lesson) {
    alert(`Navigating to ${lesson} lesson...`);
    // Implement navigation logic if needed
}

// Handle logout functionality
document.getElementById('logout-link').addEventListener('click', function(event) {
    event.preventDefault();
    // Clear login state
    localStorage.removeItem("loggedIn");
    // Redirect to login page
    window.location.href = "login.html";
});
