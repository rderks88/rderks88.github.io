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

    <div id="navbarBasicExample" class="navbar-menu">
      <!--<div class="navbar-start">
        <a class="navbar-item">
          Business
        </a>

        <a class="navbar-item">
          Code
        </a>
      </div>-->
      <!--<div class="navbar-start">
        <h1 class="title is-4 has-text-white is-marginless upper">
          &nbsp;Rob Derks
        </h1>
      </div>-->

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <b-tooltip
              label="hello@robderks.com"
              position="is-bottom"
              type="is-dark"
              :animated="true"
            >
              <a class="button is-primary" href="mailto:hello@robderks.com" target="_top">
                <font-awesome-icon :icon="['fas', 'envelope']" />
              </a>
            </b-tooltip>
            <b-tooltip
              label="LinkedIn"
              position="is-bottom"
              type="is-dark"
              :animated="true"
            >
              <a class="button is-primary" href="https://www.linkedin.com/in/iamrobderks/" target="_blank">
                <font-awesome-icon :icon="['fab', 'linkedin-in']" />
              </a>
            </b-tooltip>
            <b-tooltip
              v-if="$i18n.locale === 'en'"
              :label="$t('nav.buttonLanguageTooltip')"
              position="is-bottom"
              type="is-dark"
              :animated="true"
            >
              <a class="button is-primary" href="/nl" target="_top">
                <font-awesome-icon :icon="['fas', 'language']" />
              </a>
            </b-tooltip>
            <b-tooltip
              v-if="$i18n.locale === 'nl'"
              :label="$t('nav.buttonLanguageTooltip')"
              position="is-bottom"
              type="is-dark"
              :animated="true"
            >
              <a class="button is-primary" href="/en" target="_top">
                <font-awesome-icon :icon="['fas', 'language']" />
              </a>
            </b-tooltip>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data () {
    return {
      isAtTopOfPage: true
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      this.isAtTopOfPage = scrollTop < 50
    })
  }
}
</script>
<style lang="scss">
  .navbar {
    transition: padding 0.5s;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.6);
  }
</style>
