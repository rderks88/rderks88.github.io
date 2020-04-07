<template>
  <div>
    <nav-bar />
    <div id="app">
      <nuxt />
    </div>
  </div>
</template>

<script>

import NavBar from '~/components/NavBar'

export default {
  components: {
    NavBar
  },
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>
