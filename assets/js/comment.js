console.log("Inside js folder comments");

// Get a reference to the comment form
const commentForm = document.getElementById('comment-form');

// Add an event listener to the form's submit event
commentForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the form data
  const formData = new FormData(commentForm);

  try {
    // Make the POST request
    const response = await fetch('/comments/create', {
      method: 'POST',
      body: formData,
    });

    // Check if the response status indicates success
    if (response.ok) {
      console.log('Comment submitted successfully');
      // You can perform additional actions here, such as updating the UI
    } else {
      console.error('Failed to submit comment');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
});