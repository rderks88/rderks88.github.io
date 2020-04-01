<template>
  <nav
    class="navbar is-fixed-top is-primary"
    :class="{'is-spaced': isAtTopOfPage}"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="~/assets/code.png" width="35" height="35" alt="Logo Rob Derks">
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          Home
        </a>

        <a class="navbar-item">
          Documentation
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              About
            </a>
            <a class="navbar-item">
              Jobs
            </a>
            <a class="navbar-item">
              Contact
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Report an issue
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <b-tooltip
              label="Email"
              position="is-bottom"
            >
              <a class="button is-primary">
                <b-icon
                  icon="email"
                  size="is-small"
                />
              </a>
            </b-tooltip>
            <b-tooltip
              label="LinkedIn"
              position="is-bottom"
            >
              <a class="button is-primary">
                <b-icon
                  icon="linkedin"
                  size="is-small"
                />
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
      console.log(scrollTop)
    })
  }
}
</script>
<style lang="scss">
  .navbar{
    transition: padding 0.5s;
  }
</style>
