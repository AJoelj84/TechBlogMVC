async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const content = document.querySelector('input[name="content"]').value;

  try {
    const response = await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({
        title,
        content,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      throw new Error('Error creating post');
    }
  } catch (error) {
    alert(error.message);
  }
}

document
  .querySelector('#new-post-form')
  .addEventListener('submit', newFormHandler);
