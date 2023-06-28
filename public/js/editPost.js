async function editFormHandler(event) {
  event.preventDefault();

  const titleInput = document.querySelector('input[name="post-title"]');
  const contentInput = document.querySelector('input[name="content"]');
  const id = window.location.toString().split('/').slice(-1)[0];
  
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  try {
    const response = await fetch(`/api/post/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        content,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      throw new Error('Error updating post');
    }
  } catch (error) {
    alert(error.message);
  }
}

document
  .querySelector('.edit-post-form')
  .addEventListener('submit', editFormHandler);