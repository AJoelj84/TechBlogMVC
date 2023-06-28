async function loginFormHandler(event) {
  event.preventDefault();

  const usernameInput = document.querySelector('#username-login');
  const passwordInput = document.querySelector('#password-login');

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username && password) {
    try {
      const response = await fetch('/api/user/login', {
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
        throw new Error('Login failed');
      }
    } catch (error) {
      alert(error.message);
      passwordInput.value = '';
    }
  }
}

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);