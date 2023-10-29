window.addEventListener('DOMContentLoaded', (event) => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      const comments = JSON.parse(storedComments);
      comments.forEach(comment => addComment(comment.username, comment.content));
    }
  
    document.getElementById("comment-form").addEventListener("submit", function(e) {
      e.preventDefault();
      const commentInput = document.getElementById("comment-input");
      const commentContent = commentInput.value.trim();
      if (commentContent !== "") {
        const storedUsername = localStorage.getItem("username");
        if (!storedUsername) {
          alert("Please enter your name to comment.");
          return;
        }
        addComment(storedUsername, commentContent);
        commentInput.value = "";
  
        const storedComments = localStorage.getItem("comments");
        const comments = storedComments ? JSON.parse(storedComments) : [];
        comments.push({ username: storedUsername, content: commentContent });
        localStorage.setItem("comments", JSON.stringify(comments));
      }
    });
  });

  function getStoredUsername() {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      return storedUsername;
    } else {
      alert("Please enter your name to comment.");
      return null;
    }
  }
  
  function addComment(username, content) {
    const commentsList = document.getElementById("comments-list");
    const comment = document.createElement("div");
    comment.classList.add("comment");
  
    const usernameElement = document.createElement("div");
    usernameElement.classList.add("username");
    usernameElement.textContent = username;
  
    const commentContent = document.createElement("div");
    commentContent.classList.add("content");
    commentContent.textContent = content;
  
    comment.appendChild(usernameElement);
    comment.appendChild(commentContent);
    commentsList.appendChild(comment);
  }
  