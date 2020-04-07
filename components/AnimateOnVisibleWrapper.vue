<template>
  <div
    v-observe-visibility="visibilityChanged"
    class="animate-on-invisible-wrapper"
    :class="{
      'animated delay-250ms fast': isVisible,
      fadeInLeft: isVisible && position === 'left',
      fadeInRight: isVisible && position === 'right'
    }"
  >
    <slot name="default" />
  </div>
</template>
<script>
export default {
  props: {
    position: {
      type: String,
      required: true,
      validator: (value) => {
        return value === 'left' || value === 'right'
      }
    }
  },
  data () {
    return {
      isVisible: false
    }
  },
  methods: {
    visibilityChanged (visible) {
      if (visible) {
        this.isVisible = true
      }
    }
  }
}
</script>
