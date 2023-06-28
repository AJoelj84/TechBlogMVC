async function commentFormHandler(event) {
  event.preventDefault();

  const commentInput = document.querySelector('input[name="comment-body"]');
  const commentText = commentInput.value.trim();

  if (commentText) {
    const postID = window.location.toString().split('/').slice(-1)[0];

    try {
      const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
          post_id: postID,
          comment_text: commentText,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.reload();
      } else {
        throw new Error('Error creating comment');
      }
    } catch (error) {
      alert(error.message);
      commentInput.value = commentText;
    }
  }
}

document
  .querySelector('.comment-form')
  .addEventListener('submit', commentFormHandler);
