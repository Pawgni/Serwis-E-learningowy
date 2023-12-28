<template>
    <div class="comments-container">
      <h2 class="comments-title">Komentarze</h2>
      <form @submit.prevent="addComment" class="comments-form">
        <div class="comments-form-group">
          <label for="author" class="comments-label">Autor:</label>
          <input v-model="newComment.author" id="author" type="text" class="comments-input" placeholder="Wpisz swoje imię" />
        </div>
        <div class="comments-form-group">
          <label for="comment" class="comments-label">Komentarz:</label>
          <textarea v-model="newComment.text" id="comment" class="comments-textarea" placeholder="Dodaj komentarz"></textarea>
        </div>
        <button type="submit" class="comments-button">Dodaj</button>
      </form>
      <div v-if="comments.length === 0" class="comments-empty">Brak komentarzy.</div>
      <div v-else class="comments-list">
        <div v-for="comment in comments" :key="comment.id" class="comment-item">
          <div class="comment-details">
            <span class="comment-author">{{ comment.author }}</span>
            <span class="comment-time">{{ formatTime(comment.timestamp) }}</span>
          </div>
          <div class="comment-text">{{ comment.text }}</div>
        </div>
      </div>
    </div>
  </template>
   
  <style>
  .comments-container {
    text-align: center;
    margin-top: 20px;
  }
   
  .comments-title {
    font-size: 24px;
    margin-bottom: 10px;
  }
   
  .comments-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }
   
  .comments-form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
   
  .comments-label {
    font-size: 18px;
    margin-bottom: 5px;
  }
   
  .comments-input {
    width: 300px;
    height: 30px;
    margin-bottom: 10px;
    padding: 5px;
  }
   
  .comments-textarea {
    width: 300px;
    height: 150px;
    resize: vertical;
    margin-bottom: 10px;
    padding: 5px;
  }
   
  .comments-button {
    width: 100px;
    height: 30px;
    font-size: 16px;
  }
   
  .comments-empty {
    margin-top: 10px;
    font-style: italic;
  }
   
  .comments-list {
    background-color: #eaf2ff;
    padding: 10px;
    border-radius: 5px;
  }
   
  .comment-item {
    margin-bottom: 20px;
  }
   
  .comment-details {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
   
  .comment-author {
    font-weight: bold;
  }
   
  .comment-time {
    font-style: italic;
    color: #888888;
  }
   
  .comment-text {
    margin-left: 20px;
  }
  </style>
   
  <script>
  export default {
    data() {
      return {
        comments: [],
        newComment: {
          author: "",
          text: ""
        }
      };
    },
    methods: {
      addComment() {
        if (this.newComment.author && this.newComment.text) {
          const newCommentObj = {
            id: Date.now(),
            author: this.newComment.author,
            text: this.newComment.text,
            timestamp: new Date()
          };
          this.comments.push(newCommentObj);
          this.newComment.author = "";
          this.newComment.text = "";
        }
      },
      formatTime(timestamp) {
        const options = { hour: "numeric", minute: "numeric" };
        return new Date(timestamp).toLocaleTimeString([], options);
      }
    }
  };
  </script>
   