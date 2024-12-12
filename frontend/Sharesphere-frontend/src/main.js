document.getElementById('loginForm').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent form from submitting normally

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Clear any previous messages
  document.getElementById('error-message').textContent = '';
  document.getElementById('success-message').textContent = '';

  try {
    // Send login request to backend
    const response = await fetch('http://localhost:3000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Handle success
      document.getElementById('success-message').textContent = 'Login successful!';
      console.log('JWT Token:', data.token); // Store JWT Token securely
    } else {
      // Handle errors
      document.getElementById('error-message').textContent = data.error || 'Something went wrong';
    }
  } catch (error) {
    // Network or other errors
    document.getElementById('error-message').textContent = 'Network error. Please try again later.';
    console.error('Error:', error);
  }
});
