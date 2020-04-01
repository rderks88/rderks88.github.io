<template>
  <section id="interactive-header" class="section">
    <div class="image-wrapper">
      <div class="translate-wrapper" :style="{ transform: `translateX(${translate}px)` }">
        <div
          id="left-image"
          :style="{ backgroundImage: `url(${lookingLeft})`, 'clip-path': `inset(0 0 0 ${percentage}%)` }"
        />
        <div
          id="right-image"
          :style="{ backgroundImage: `url(${lookingRight})`, 'clip-path': `inset(0 ${invertedPercentage}% 0 0)` }"
        />
      </div>
    </div>
    <div class="columns is-centered is-desktop">
      <div class="column is-8">
        <div class="columns is-5">
          <div class="column is-5 opacity-text" :style="{ opacity: returnOpacity(invertedPercentage) }">
            <h1 class="title is-3 is-spaced has-text-grey-dark is-uppercase">
              Business
            </h1>
            <h2 class="subtitle is-4 has-text-grey">
              Facilitating development of scalable products to generate business efficiency and revenue.
            </h2>
          </div>
          <div class="column" />
          <div class="column is-5 opacity-text" :style="{ opacity: returnOpacity(percentage) }">
            <h1 class="title is-3 is-spaced has-text-grey-dark has-text-right is-family-code is-uppercase">
              &#60;code/&#62;
            </h1>
            <h2 class="subtitle is-4 has-text-grey has-text-right is-family-code">
              Making a difference by building elegant solutions to complex problems.
            </h2>
          </div>
        </div>
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
      leftIdle: 35,
      rightIdle: 65,
      percentage: this.leftIdle,
      invertedPercentage: this.rightIdle,
      oldPercentage: null,
      translate: 0,
      idleTimer: null,
      leftCrossEyed: 45,
      rightCrossEyed: 52,
      crossEyedTimer: null
    }
  },
  mounted () {
    const interactiveHeader = document.getElementById('interactive-header')

    interactiveHeader.addEventListener('mousemove', (event) => {
      this.handler(event)
    })

    interactiveHeader.addEventListener('mouseout', (event) => {
      this.behaveIdle()
    })

    interactiveHeader.addEventListener('mouseover', (event) => {
      this.stopIdle()
    })

    this.behaveIdle()
  },
  methods: {
    behaveIdle () {
      clearInterval(this.idleTimer)
      this.idleTimer = setInterval(() => {
        console.log('behaveIdle')
        if (this.percentage >= 50) {
          this.shift(this.leftIdle)
        } else {
          this.shift(this.rightIdle)
        }
      }, 3000)
    },
    stopIdle () {
      clearInterval(this.idleTimer)
      this.idleTimer = null
    },
    checkCrossEyed () {
      if (this.percentage > this.leftCrossEyed && this.percentage < this.rightCrossEyed) {
        clearTimeout(this.crossEyedTimer)
        this.crossEyedTimer = setTimeout(() => {
          this.$buefy.toast.open({
            duration: 3000,
            message: 'That just looks silly 😉',
            position: 'is-bottom',
            type: 'is-info'
          })
          this.stopCrossEyed()
          this.shift(this.leftIdle)
        }, 1500)
      } else {
        this.stopCrossEyed()
      }
    },
    stopCrossEyed () {
      clearTimeout(this.crossEyedTimer)
      this.crossEyedTimer = null
    },
    handler (e) {
      const pageWidth = window.innerWidth
      const pageX = e.pageX

      const percentage = (pageX / pageWidth) * 100

      if (Math.abs(percentage - this.oldPercentage) > 1) {
        this.checkCrossEyed()
        this.shift(percentage)
      }
    },
    shift (newPercentage) {
      newPercentage = Math.round(newPercentage)
      // console.log('percentage:', newPercentage)
      this.oldPercentage = newPercentage
      this.percentage = newPercentage
      this.translate = -1 * (Math.max(-100, Math.min((newPercentage - 50) * 3, 100)))
      this.invertedPercentage = 100 - this.percentage
    },
    returnOpacity (percentage) {
      if (percentage < 25) {
        return 0
      }
      if (percentage >= 60) {
        return 1
      }
      return Math.round(percentage) * 0.01
    }
  }
}
</script>

<style lang="scss">

  #interactive-header {
    min-height: 550px;
    height: 60vh;
    position: relative;

    & .title{
      margin-top: 30px;
    }

    & .subtitle{
      line-height: 1.5;
    }

    & .image-wrapper {
      z-index: 1;
      width: 70vw;
      height: 90%;
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
        transition: transform 1s;

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
          transition: clip-path 1.3s;
        }
      }
    }

    & .opacity-text {
      transition: opacity 1s;
    }

  }

</style>
