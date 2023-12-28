<template>
    <div>
      <div class="tabs">
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ 'active-tab': activeTab === tab }"
          @click="changeTab(tab)"
        >
          {{ tab }}
        </div>
      </div>
      <router-link to="account" class="custom-link">Java Developer</router-link>
      <router-link to="quiz" class="custom-link">Quiz</router-link>
      <router-link to="asp" class="custom-link">ASP.NET Core Developer</router-link>
      <router-link to="python" class="custom-link">Python Developer</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Road',
    methods: {
      changeTab(tab) {
        this.activeTab = tab;
      },
    },
  };
  </script>
  
  <style>
.tabs {
  display: flex;
  flex-direction: column; /* Dodany styl flex-direction */
  margin-top: 10px;
}


.tabs div.active-tab {
  background-color: gray;
  color: white;
}
.custom-link{
  text-decoration: none;
}
</style>
