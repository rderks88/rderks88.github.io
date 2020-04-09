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
              {{ $t('myWork.yubu.date') }}<br><br>
            </h5>
            <h3 class="title is-4 has-text-grey-dark">
              {{ $t('myWork.yubu.role') }}
            </h3>
            <h5 class="subtitle is-5 has-text-grey-dark">
              {{ $t('myWork.yubu.title') }}
            </h5>
            <p class="has-text-justified" v-html="$t('myWork.yubu.content')" />
          </div>
        </div>
      </div>
    </div>
    <div class="project-wrapper columns is-multiline is-centered is-desktop">
      <div class="column is-9-desktop is-6-widescreen">
        <div class="columns is-multiline is-variable is-8">
          <div class="column is-6">
            <h5 class="subtitle is-6 has-text-grey-light has-text-right">
              {{ $t('myWork.greenlancers.date') }}
              <font-awesome-icon :icon="['fas', 'calendar-check']" />
              <br><br>
            </h5>
            <h3 class="title is-4 has-text-grey-dark has-text-right">
              {{ $t('myWork.greenlancers.role') }}
            </h3>
            <h5 class="subtitle is-5 has-text-grey-dark has-text-right">
              {{ $t('myWork.greenlancers.title') }}
            </h5>
            <p class="has-text-justified" v-html="$t('myWork.greenlancers.content')" />
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
