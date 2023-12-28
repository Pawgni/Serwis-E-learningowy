<template>
    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Wyszukaj..." @input="search" />
    </div>
  </template>
   
  <script>
  export default {
    // ...
    methods: {
      search() {
        this.$emit("search", this.searchQuery);
      },
    },
  };
  </script>
   
  <style>
  .search-bar {
    margin-left: 10px;
  }
   
  .search-bar input {
    width: 200px;
    padding: 5px;
    font-size: 16px;
  }
  </style>