<template>
  <nav
    class="navbar is-fixed-top is-primary"
    :class="{'is-spaced': isAtTopOfPage}"
    role="navigation"
    :mobile-burger="false"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="https://robderks.com">
        <img src="~/assets/logo.png" width="35" height="35" alt="Logo Rob Derks">
      </a>
    </div>

    <div class="navbar-menu">
      <b-navbar-item
        v-for="sectionId in sectionIds"
        :key="'navItem' + sectionId"
        v-smooth-scroll
        :href="'#' + sectionId"
        :class="{'is-active': activeSection === sectionId}"
        @click="'javascript:void(0)'"
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

      <div class="navbar-end">
        <social-buttons type="is-primary"></social-buttons>
      </div>
    </div>
  </nav>
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
      activeSection: null,
      sectionIds: [
        'testimonials',
        'myWork',
        'skills',
        'contactForm'
      ],
      offSetTops: {}
    }
  },
  mounted () {
    // add a throttler if page would behave slowly
    window.addEventListener('scroll', () => {
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
      this.sectionIds.forEach((id) => {
        const yPosition = this.offSetTops[id]
        if (scrollTop < yPosition + 150 && scrollTop > yPosition - 150) {
          this.activeSection = id
        }
      })
    })

    // save all distances from the top for all the sections
    this.sectionIds.forEach((id) => {
      this.offSetTops[id] = document.getElementById(id).offsetTop
    })
  }
}
</script>
<style lang="scss">
  .navbar {
    transition: padding 0.5s;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.6);

    & .navbar-item {
      margin-right: 10px;
      font-weight: bold;
      transition: color 0.5s;
    }
  }
</style>
