<template>
  <b-navbar :fixed-top="true" type="is-primary" :spaced="isAtTopOfPage" :mobile-burger="true">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="~/assets/logo.png" width="35" height="35" alt="Logo Rob Derks">
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item
        v-for="sectionId in sectionIds"
        :key="'navItem' + sectionId"
        v-smooth-scroll
        :href="'#' + sectionId"
        :class="{'is-active-custom': activeSection === sectionId}"
        @click="activeSection = sectionId"
      >
        <b-tooltip
          :label="$t('nav.sections.' + sectionId + '.tooltip')"
          position="is-bottom"
          type="is-dark"
          :animated="true"
        >
          {{ $t('nav.sections.' + sectionId + '.anchor') }}
        </b-tooltip>
      </b-navbar-item>
    </template>

    <template slot="end">
      <social-buttons type="is-primary" />
    </template>
  </b-navbar>
</template>
<script>
import SocialButtons from '~/components/SocialButtons'

export default {
  components: {
    SocialButtons
  },
  data () {
    return {
      isAtTopOfPage: true,
      activeSection: 'interactiveHeader',
      sectionIds: [
        'testimonials',
        'myWork',
        'skills',
        'contactForm'
      ],
      offSetTops: {},
      scrollTimer: null
    }
  },
  mounted () {
    // add a throttler to make sure this is not handled all the time during scroll
    window.addEventListener('scroll', () => {
      clearTimeout(this.scrollTimer)
      this.scrollTimer = setTimeout(() => {
        // save all distances from the top for all the sections
        this.sectionIds.forEach((id) => {
          this.offSetTops[id] = document.getElementById(id).offsetTop
        })

        // handle scroll and set activeSection
        this.handleScroll()
      }, 100)
    })
  },
  methods: {
    handleScroll () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      this.isAtTopOfPage = scrollTop < 50

      // check if at top of the page, if so set no active section
      if (scrollTop === 0) {
        this.activeSection = null
        return
      }

      // check if at bottom of the page, if so set last sectionId as active
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        this.activeSection = this.sectionIds[this.sectionIds.length - 1]
        return
      }

      // loop trough sections to check which is active
      this.sectionIds.some((id) => {
        const yPosition = this.offSetTops[id]
        if (scrollTop < yPosition + 300 && scrollTop > yPosition - 300) {
          // set new activeSection
          this.activeSection = id
          this.$forceUpdate()
          return id
        }
      })
    }
  }
}
</script>
<style lang="scss">
  .navbar {
    transition: padding 0.5s;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.6);

    @include touch {

      & .navbar-menu {
        background: $primary;
        max-height: 1000px;
        overflow: visible !important;

        & .navbar-item {
          padding: 10px 1.75rem;

          & span {
            border-bottom: solid thin rgba(white, 0.3);
          }

          &:before {
            content: '>';
            display: inline-block;
            color: white;
            left: -15px;
            margin-right: 8px;
          }
        }

        & .socialButtons {
          padding: 10px 1.9rem;
        }
      }

    }

    & .navbar-item {
      margin-right: 10px;
      font-weight: bold;
      transition: color 0.5s;

      &.is-active-custom{
        color: $white !important;
      }
    }
  }
</style>
