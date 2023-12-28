<template>
  <div>
    <h3>Ocena:</h3>
    <div>
      <label for="rating">Twoja ocena:</label>
      <select id="rating" v-model="selectedRating">
        <option value="1">1 *</option>
        <option value="2">2 *</option>
        <option value="3">3 *</option>
        <option value="4">4 *</option>
        <option value="5">5 *</option>
      </select>
    </div>
    <button @click="submitRating">Wyślij ocenę</button>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      selectedRating: ''
    };
  },
  methods: {
    submitRating() {
 
      console.log('Ocena wysłana:', this.selectedRating);
 
      this.$emit('rating-submitted', {
        rating: this.selectedRating
      });
 
      this.selectedRating = '';
    }
  }
};
</script>
 
<style scoped>
.rating {
  margin-top: 20px;
}
 
.rating label {
  font-weight: bold;
}
 
.rating select {
  padding: 5px;
  font-size: 16px;
}
 
.rating button {
  margin-top: 10px;
  padding: 8px 16px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}
 
.rating button:hover {
  background-color: #0056b3;
}
</style>