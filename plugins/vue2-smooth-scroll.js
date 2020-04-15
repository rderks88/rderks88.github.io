import Vue from 'vue'
import vueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(vueSmoothScroll, {
  duration: 1000, // Animation speed
  offset: -50, // Offset from element, you can use positive or negative values
  updateHistory: false // Push hash to history or not
})
