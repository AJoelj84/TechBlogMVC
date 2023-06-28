async function deleteFormHandler(event) {
  event.preventDefault();

  if (confirm('Are you sure you want to delete this post?')) {
    const postID = window.location.toString().split('/').slice(-1)[0];

    try {
      const response = await fetch(`/api/post/${postID}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        throw new Error('Error deleting post');
      }
    } catch (error) {
      alert(error.message);
    }
  }
}

document
  .querySelector('.delete-post-btn')
  .addEventListener('click', deleteFormHandler);