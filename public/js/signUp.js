async function signupFormHandler(event) {
  event.preventDefault();

  const usernameInput = document.querySelector('#username-signup');
  const passwordInput = document.querySelector('#password-signup');

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username && password) {
    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({
          username,
          password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        throw new Error('Signup failed');
      }
    } catch (error) {
      alert(error.message);
      passwordInput.value = '';
    }
  }
}

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);