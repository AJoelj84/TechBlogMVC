async function logout() {
  try {
    const response = await fetch('/api/user/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      throw new Error('Logout failed');
    }
  } catch (error) {
    alert(error.message);
  }
}

document.querySelector('#logout').addEventListener('click', logout);