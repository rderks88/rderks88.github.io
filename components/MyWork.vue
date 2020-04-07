<template>
  <section class="section">
    <div class="columns is-multiline is-centered is-desktop">
      <div class="column is-9-desktop is-6-widescreen">
        <h3 class="title is-4 has-text-centered">
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
              <font-awesome-icon :icon="['fas', 'calendar-check']" />&nbsp;
              2008 - 2019<br><br>
            </h5>
            <h3 class="title is-4 has-text-grey-dark">
              CTO Yubu
            </h3>
            <h5 class="subtitle is-5 has-text-grey-dark">
              SaaS solution voor studiekeuze van middelbare scholieren
            </h5>
            <p class="has-text-justified">
              In 2008 I launched the first version of StudieID which, after that company merged with BeInvolved,
              became to be Yubu in 2012. After a significant market penetration our competitor decided to rather buy us
              out. After a year long process of handing the company over I closed the chapter. <br>
              In this 12 year process I learned valuable lessons for every stage of a company. From the early
              start-up days to the growth fase to eventually your exit.
              During this project I got to learn from some of the best in the fields. I got code-tutored by `We Are
              Builders` (a successfull start-up studio from Rotterdam). During our investment rounds
              and during the selling of my business I got to learn from some experienced
              investors which gave me insight in some higher level business-strategies.
              All in all, the time spent working on Yubu made me the business savvy programmer I am today.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="project-wrapper columns is-multiline is-centered is-desktop">
      <div class="column is-9-desktop is-6-widescreen">
        <div class="columns is-multiline is-variable is-8">
          <div class="column is-6">
            <h5 class="subtitle is-6 has-text-grey-light has-text-right">
              2020 - current project&nbsp;
              <font-awesome-icon :icon="['fas', 'calendar-check']" />
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
