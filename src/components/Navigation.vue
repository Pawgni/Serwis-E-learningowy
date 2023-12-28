<template>
  <div class="navigation-container">
    <div class="theme-selector">
      <span v-for="theme in themes" :key="theme" @click="changeTheme(theme)" :class="{ 'theme-selected': theme === selectedTheme }">
        {{ theme }}
      </span>
    </div>
    <div v-for="(item, itemi) in menu" :key="itemi" class="nav-item-container">
      <transition name="slide-down">
        <div
          v-if="item.title"
          class="nav-item"
          @click="toggleItem(item)"
          @mouseover="hoverItem(item)"
          @mouseout="hoverItem(null)"
        >
          <span
            :class="{ 'nav-item-active': isItemActive(item), 'nav-item-hovered': isItemHovered(item) }"
          >
            {{ item.title }}
          </span>
        </div>
      </transition>
      <transition name="slide-down">
        <div v-if="item.child && item.expanded" class="nav-item-child-container">
          <div class="nav-item-child">
            <div
              v-for="(child, childi) in item.child"
              :key="childi"
              class="nav-item-child-item"
              @click="onItemClick(child)"
              :style="{ fontWeight: isItemActive(child) ? 'bold' : 'normal' }"
              @mouseover="hoverItem(child)"
              @mouseout="hoverItem(null)"
            >
              <span
                :class="{ 'nav-item-active': isItemActive(child), 'nav-item-hovered': isItemHovered(child) }"
              >
                {{ child.title }}
              </span>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <Road></Road> 
  </div>
</template>

<style>
.navigation-container {
  width: 250px;
  padding-right: 10px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-item span {
  display: block;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  background-image: linear-gradient(to bottom, #2196f3, #1976d2);
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-item-active span {
  color: #ffffff;
  background-image: linear-gradient(to bottom, #ff4081, #f50057);
}

.nav-item-hovered span {
  text-decoration: underline;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.5s;
}

.slide-down-enter,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.nav-item-child {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-item-child-item {
  margin-top: 5px;
}

.tabs div,
.custom-link,
.subtask-item span {
  display: block;
  font-size: 14px;
  text-align: center;
  color: #333333;
  background-color: #ffffff;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tabs div,
.custom-link{
  cursor: pointer;
  transition: text-decoration 0.3s;
  color: #ffffff;
  background-color: #2196f3;
}
.subtask-item-active span {
  color: #ffffff;
  background-image: linear-gradient(to bottom, #ff4081, #f50057);
}

.subtask-item-hovered span {
  text-decoration: underline;
}
</style>

<script>
import Road from "./Road.vue";

export default {
  name: 'Navigation',
  props: {
    course: { type: Array, default: () => [{}] },
  },
  components: {
    Road,
  },
  data() {
    return {
      activeItem: null,
      hoveredItem: null,
    };
  },
  computed: {
    menu() {
      return this.course.length > 0 && this.course[0].topics
        ? this.course[0].topics.map((topic) => ({
            ...topic,
            expanded: false,
          }))
        : [];
    },
  },
  methods: {
    toggleItem(item) {
      if (!item.child) {
        this.activeItem = item;
        this.$emit('select-content', item);
      } else {
        item.expanded = !item.expanded; // Dodane przełączanie stanu rozwinięcia
      }
    },
    onItemClick(item) {
      this.activeItem = item;
      this.$emit('select-content', item);
    },
    hoverItem(item) {
      this.hoveredItem = item;
    },
    isItemActive(item) {
      return this.activeItem === item;
    },
    isItemHovered(item) {
      return this.hoveredItem === item;
    },
  },
};
</script>
