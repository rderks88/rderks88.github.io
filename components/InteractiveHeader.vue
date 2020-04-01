<template>
  <section id="interactive-header" class="section">
    <div class="image-wrapper">
      <div class="translate-wrapper" :style="{ transform: `translateX(${translate}px)` }">
        <div
          id="left-image"
          :style="{ backgroundImage: `url(${lookingLeft})`, 'clip-path': `inset(0 0 0 ${invertedRelativeX}%)` }"
        />
        <div
          id="right-image"
          :style="{ backgroundImage: `url(${lookingRight})`, 'clip-path': `inset(0 ${relativeX}% 0 0)` }"
        />
      </div>
    </div>
    <div class="columns is-centered is-desktop">
      <div class="column is-2">
        <h1 class="title">
          Business
        </h1>
        <h2 class="subtitle">
          Technology solutions that sell. That is scalable.
        </h2>
      </div>
      <div class="column is-4" />
      <div class="column is-2">
        <h1 class="title has-text-right is-family-code">
          Code
        </h1>
        <h2 class="subtitle has-text-right is-family-code">
          Building projects that make a difference drives me.
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
import lookingLeft from '~/assets/looking-left.png'
import lookingRight from '~/assets/looking-right.png'

export default {
  data () {
    return {
      lookingLeft,
      lookingRight,
      oldRelativeX: 50,
      relativeX: 50,
      invertedRelativeX: 50,
      translate: 50
    }
  },
  mounted () {
    document.getElementById('interactive-header').addEventListener('mousemove', (event) => {
      this.handler(event)

      // if (this.timeout) { clearTimeout(this.timeout) }
      // this.timeout = setTimeout(() => {
      //   this.handler(event)
      // }, 200)
    })
    document.getElementById('interactive-header').addEventListener('mouseout', (event) => {
      this.relativeX = 50
      this.invertedRelativeX = 50
    })
  },
  methods: {
    handler (e) {
      e = e || window.event

      const pageWidth = window.innerWidth
      const pageX = e.pageX

      const relativeX = (pageX / pageWidth) * 100

      if (Math.abs(relativeX - this.oldRelativeX) > 5) {
        this.oldRelativeX = relativeX
        this.relativeX = relativeX
        this.translate = relativeX - 50
        this.invertedRelativeX = 100 - this.relativeX
      }
    }
  }
}
</script>

<style lang="scss">

  #interactive-header {
    min-height: 550px;
    height: 60vh;
    position: relative;
    background: rgba(blue, 0.1);

    & .image-wrapper {
      background: rgba(red, 0.1);
      width: 70vw;
      height: 95%;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);

      & > .translate-wrapper {
        top: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        position: absolute;
        transition: transform 0.75s;

        & > #left-image,
        & > #right-image {
          top: 0;
          bottom: 0;
          height: 100%;
          width: 100%;
          position: absolute;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center bottom;
          transition: clip-path 0.75s;
        }

      }

      /*& > #left-image{*/
      /*  clip-path: inset(0 0 0 50%);*/
      /*}*/
      /*& > #right-image{*/
      /*  clip-path: inset(0 50% 0 0);*/
      /*}*/
    }
  }

</style>
