<template>
  <section class="section">
    <div class="columns is-multiline is-centered is-desktop">
      <div class="column is-9-desktop is-6-widescreen column-title-wrapper">
        <h3 class="title is-4 has-text-centered is-uppercase">
          Most important work
        </h3>
      </div>
    </div>
    <div class="project-wrapper columns is-multiline is-centered is-desktop">
      <div class="column is-9-desktop is-6-widescreen">
        <div class="columns is-multiline is-variable is-8 reverse-columns">
          <div class="column is-6">
            <animate-on-visible-wrapper position="left">
              <website>
                <img src="~/assets/screencapture-yubu.png" alt="Screenshot van de Yubu-website">
              </website>
            </animate-on-visible-wrapper>
          </div>
          <div class="column">
            <h5 class="subtitle is-6 has-text-grey-light">
              <b-icon
                icon="calendar"
                custom-size="mdi-18px"
              />
              2008 - 2019<br><br>
            </h5>
            <h3 class="title is-4 has-text-grey-dark">
              CTO Yubu
            </h3>
            <h5 class="subtitle is-5 has-text-grey-dark">
              SaaS solution voor studiekeuze van middelbare scholieren
            </h5>
            <p class="has-text-justified">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="project-wrapper columns is-multiline is-centered is-desktop">
      <div class="column is-9-desktop is-6-widescreen">
        <div class="columns is-multiline is-variable is-8">
          <div class="column is-6">
            <h5 class="subtitle has-text-grey-light has-text-right">
              2020 - current project
              <b-icon
                icon="calendar"
                custom-size="mdi-18px"
              />
              <br><br>
            </h5>
            <h3 class="title is-4 has-text-grey-dark has-text-right">
              Founder greenlancers
            </h3>
            <h5 class="subtitle is-5 has-text-grey-dark has-text-right">
              NGO to mobilize growing number of freelancers for positive impact on sustainability
            </h5>
            <p class="has-text-justified">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </div>
          <div class="column is-6 has-text-right">
            <animate-on-visible-wrapper position="right">
              <phone>
                <img src="~/assets/screencapture-greenlancers.png" alt="Screenshot van de Greenlancers-app">
              </phone>
            </animate-on-visible-wrapper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

import Website from '~/components/Website'
import Phone from '~/components/Phone'
import AnimateOnVisibleWrapper from '~/components/AnimateOnVisibleWrapper'

export default {
  components: {
    Website,
    Phone,
    AnimateOnVisibleWrapper
  }
}
</script>

<style lang="scss">
  .project-wrapper {
    padding-bottom: 50px;
  }
</style>
