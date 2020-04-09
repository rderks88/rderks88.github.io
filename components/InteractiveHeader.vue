<template>
  <section id="interactive-header" class="section" style="overflow: hidden;">
    <div class="columns is-centered is-desktop is-marginless">
      <div class="column is-9-desktop">
        <div id="title-wrapper" class="columns is-mobile is-5 is-variable">
          <div
            class="column is-10-mobile is-5-tablet is-4-widescreen opacity-text"
            :class="returnOpacityClass(100 - percentage, true)"
          >
            <h1 class="title is-3 is-spaced has-text-grey-dark">
              <font-awesome-icon :icon="['fas', 'rocket']" class="fa-xs" />
              Business savvy
            </h1>
            <h2 class="subtitle is-4 has-text-grey">
              Improving revenue stream by using a highly analytical mindset to connect tech and business.
            </h2>
          </div>
          <div class="column" />
          <div
            id="code-text-column"
            class="column is-10-mobile is-5-tablet is-4-widescreen opacity-text"
            :class="returnOpacityClass(percentage, true)"
          >
            <h1 class="title is-3 is-spaced has-text-grey-dark has-text-right">
              Programmer
              <font-awesome-icon icon="code" class="fa-xs" />
            </h1>
            <h2 class="subtitle is-4 has-text-grey has-text-right">
              Making a difference by building elegant solutions to complex problems.
            </h2>
          </div>
        </div>
      </div>
    </div>

    <div id="image-wrapper">
      <div class="translate-wrapper" :style="{ transform: `translateX(${translate}px)` }">
        <div
          id="left-image"
          :style="{
            backgroundImage: `url(${lookingLeft})`,
            'clip-path': 'inset(0 0 0 ' + returnClip(percentage, false) + '%)'
          }"
        />
        <div
          id="right-image"
          :style="{
            backgroundImage: `url(${lookingRight})`,
            'clip-path': 'inset(0 ' + returnClip(percentage, true) + '% 0 0)'
          }"
        />
      </div>
    </div>

    <div
      id="background-wrapper"
      class="columns is-mobile is-centered tablet is-hidden-mobile"
      :style="{ transform: 'translateX(' + 0.25 * translate + 'px)' }"
    >
      <div
        class="column is-6 has-text-right"
        style="overflow: hidden;"
      >
        <p :class="returnOpacityClass(100 - percentage)">
          <business-svg />
        </p>
      </div>
      <div
        class="column is-6"
        style="overflow: hidden;"
      >
        <p class="has-text-weight-bold is-family-code" :class="returnOpacityClass(percentage)">
          <span style="font-size: 1em; margin-left: 60px;">&lt;script></span><br>
          <span style="font-size: 1.2em; margin-left: -10px;">console.log('Nice to meet you')</span><br>
          <span style="font-size: 0.8em; margin-left: 10px;">&lt;programmer height="193"</span><br>
          <span style="font-size: 1.2em; margin-left: 70px;">status="freelancing"</span><br>
          <span style="font-size: 1em; margin-left: 120px;">value="honesty"</span><br>
          <span style="font-size: 0.8em; margin-left: 160px;">&lt;/programmer&gt;</span><br>
          <span style="font-size: 1em; margin-left: 165px;">&lt;/script></span>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import lookingLeft from '~/assets/looking-left.png'
import lookingRight from '~/assets/looking-right.png'
import BusinessSvg from '~/assets/business.svg'

export default {
  components: {
    BusinessSvg
  },
  data () {
    return {
      lookingLeft,
      lookingRight,
      leftIdle: 30,
      rightIdle: 70,
      percentage: 70,
      invertedPercentage: 30,
      oldPercentage: null,
      translate: 0,
      idleTimer: null,
      leftCrossEyed: 46,
      rightCrossEyed: 54,
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
        // console.log('behaveIdle')
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
      if (this.percentage >= this.leftCrossEyed && this.percentage <= this.rightCrossEyed) {
        clearTimeout(this.crossEyedTimer)
        this.crossEyedTimer = setTimeout(() => {
          this.shift(this.leftIdle)
          this.$buefy.toast.open({
            duration: 3000,
            message: 'That just looks silly 😉',
            position: 'is-bottom',
            type: 'is-info'
          })
          this.stopCrossEyed()
        }, 1250)
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
    },
    returnClip (percentage, inverted) {
      if (inverted) {
        return Math.min(100 - percentage, this.rightIdle)
      }
      return Math.max(percentage, this.leftIdle)
    },
    returnOpacityClass (percentage, invisibleOnMobile) {
      if (percentage <= this.leftIdle) {
        return invisibleOnMobile ? 'opacity-off-mobile' : 'opacity-low'
      }
      if (percentage >= this.rightIdle) {
        return 'opacity-full'
      }
      return 'opacity-half'
    }
  }
}
</script>

<style lang="scss">

  #interactive-header {
    /*min-height: 450px;*/
    /*height: 55vh;*/
    position: relative;
    overflow: hidden;
    padding-bottom: 0;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(54,184,163,0.05) 100%);

    & .opacity-off-mobile{
      opacity: 0;
      @include from($tablet) {
        opacity: 0.2;
      }
    }

    & .opacity-low{
      opacity: 0.2;
    }

    & .opacity-half{
      opacity: 0.5;
    }

    & .opacity-full{
      opacity: 1;
    }

    @include from($desktop) {
      & #title-wrapper {
        margin-top: 30px;
      }
    }

    @include until($tablet) {
      & #title-wrapper {
        position: relative;
      }
      & #code-text-column {
        position: absolute;
        top: 0;
        right: 0;
      }
    }

    & .subtitle {
      line-height: 1.5;
    }

    & #image-wrapper {
      z-index: 1;
      position: relative;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);

      @include from($tablet) {
        width: 60vw;
        height: 40vw;
        max-width: 660px;
        max-height: 440px;
        margin-top: -240px;
      }

      & > .translate-wrapper {
        top: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        position: absolute;
        transition: transform 0.5s ease-out;

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

      @include until($tablet) {
        width: 500px;
        height: 500px;
        max-height: 140px;
        overflow:hidden;
        margin-top:-20px;

        & > .translate-wrapper {
          margin-top:-140px;
          height: 500px;
          width: 500px;
        }
      }
    }

    & #background-wrapper {

      position: absolute;
      width: 100%;
      bottom: 0;
      z-index: -1;
      left: 0;
      transition: transform 0.5s ease-out;
      margin-bottom: 0;

      & .column {
        padding: 0 10px;
        white-space: nowrap;
        margin-top: auto;

        @include tablet-only {
          &:nth-child(1){
            transform: scale(0.7);
            margin-bottom: -50px;
            margin-right: -90px;
          }
          &:nth-child(2){
            transform: scale(0.7);
            margin-bottom: -20px;
            margin-left: -70px;
          }
        }
      }

      & svg {
        fill: $grey;
      }

      & p {
        transition: opacity 1s;
      }
    }

    & .opacity-text {
      transition: opacity 1s;
    }

  }

</style>
