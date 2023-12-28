<template>
  <div>
    <Board
      :course-learn-endpoint="courseLearnEndpoint"
    />
    <div style="display: flex">
      <Navigation
        :course="[currentCourse]"
        @select-content="changeCurrentContent"
        @search-query="updateSearchQuery"
      />
      <div>
        <SearchBar @search="updateSearchQuery" />
        <div class="page-header">
          <h1>{{ current.title }}</h1>
          <div v-if="courseRating" class="rating-info">
            Oceniono na: {{ courseRating.rating }} nie gwiazdki
          </div>
        </div>
        <div v-html="filteredContent" />
        <Comments />
        <Rating @rating-submitted="handleRatingSubmission" />n
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Navigation from './Navigation.vue';
import Comments from './Comments.vue';
import SearchBar from './SearchBar.vue';
import Rating from './Rating.vue';
import Board from './Board.vue';

export default {
  name: 'BoardWrapper',
  components: {
    Board,
    Navigation,
    Comments,
    SearchBar,
    Rating,
  },
  data() {
    return {
      courses: [],
      currentCourse: {},
      currentCourseTopicId: null,
      currentCourseQuestId: null,
      searchQuery: '',
      courseRating: null,
      courseLearnEndpoint: 'http://porzuczek.pl/learn/22S22ISI32/s213shabibiwclg1',
    };
  },
  async created() {
    await this.fetch();
  },
  computed: {
    current() {
      const current = this.currentCourse && this.currentCourseTopicId
        ? (!this.currentCourseQuestId
          ? this.courses[0].topics.find(item => item.id === this.currentCourseTopicId)
          : this.courses[0].topics.find(item => item.id === this.currentCourseTopicId).child.find(item => item.id === this.currentCourseQuestId))
        : {};
      const result = current
        ? current
        : (() => {
          this.currentCourseTopicId = this.courses[0].topics[0].id;
          this.currentCourseQuestId = null;
          return this.courses[0].topics.find(item => item.id === this.currentCourseTopicId);
        })();

      return result;
    },
    filteredContent() {
      const query = this.searchQuery.toLowerCase();
      let content = this.current.content;
      if (query) {
        const regex = new RegExp(query, 'gi');
        content = content.replace(regex, match => `<span class="highlight">${match}</span>`);
      }
      return content;
    },
  },
  methods: {
    async fetch() {
      try {
        const coursesResponse = this.courseLearnEndpoint
          ? await axios.get(this.courseLearnEndpoint)
          : {};
        if (Array.isArray(coursesResponse.data) &&
          coursesResponse.data &&
          coursesResponse.data.length > 0) {
          const coursesFormatted = this.format(coursesResponse.data);
          if (JSON.stringify(this.courses) !== JSON.stringify(coursesFormatted)) {
            this.courses = coursesFormatted;
            this.currentCourse = this.courses[0];
            this.currentCourseTopicId = !this.currentCourseTopicId
              ? this.courses[0].topics[0].id
              : this.currentCourseTopicId;
          }
        }
      } catch (ex) {
        this.courses = [];
      }
    },
    format(response) {
      return JSON.parse(JSON.stringify(response).replace(/"quests":/g, '"child":'));
    },
    changeCurrentContent(item) {
      if (item.content) {
        if (this.current.content !== item.content) {
          this.$root.$emit('reset-view');
          window.scrollTo(0, 0);
        }
        if (item.child) {
          this.currentCourseTopicId = item.id;
          this.currentCourseQuestId = null;
        } else {
          this.currentCourseTopicId = item.topic_id;
          this.currentCourseQuestId = item.id;
        }
      }
    },
    updateSearchQuery(query) {
      this.searchQuery = query;
    },
    handleRatingSubmission(ratingData) {
      this.courseRating = ratingData;
    },
  },
};
</script>

<style>
.highlight {
  background-color: yellow;
}

.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}

.page-header h1 {
  margin: 0;
  font-size: 24px;
}

.rating-info {
  font-size: 16px;
}
</style>