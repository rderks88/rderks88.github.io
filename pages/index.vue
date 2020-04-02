<template>
  <div id="index-wrapper">
    <interactive-header />

    <section class="section">
      <div class="columns is-multiline is-centered is-desktop">
        <div class="column is-9-desktop is-7-widescreen column-title-wrapper">
          <h3 class="title is-4 has-text-centered is-uppercase">
            About me
          </h3>
        </div>
      </div>
      <div class="columns is-multiline is-centered is-desktop">
        <div class="column is-9-desktop is-7-widescreen">
          <p class="bd-notification is-primary">
            Acht jaar lang heb ik binnen mijn eigen educatieve start-up de rol van CTO vervult, van het prille begin tot
            een effectieve marktpenetratie tot succesvolle verkoop. De ervaring die ik hierin heb opgedaan wil ik delen
            met jou. Laten we samen bouwen aan jouw product. Zet me in als adviseur, product owner of als senior
            programmeur. Hoe kan ik jou helpen?
          </p>
        </div>
      </div>
    </section>

    <my-work />

    <section class="section">
      <div class="columns is-multiline is-centered is-desktop">
        <div class="column is-9-desktop is-7-widescreen column-title-wrapper">
          <h3 class="title is-4 has-text-centered is-uppercase">
            Skillset
          </h3>
        </div>
      </div>
      <div class="columns is-multiline is-centered is-desktop">
        <div class="column is-9-desktop is-7-widescreen">
          hallo
        </div>
      </div>
    </section>

    <contact-form />
  </div>
</template>

<script>

import InteractiveHeader from '~/components/InteractiveHeader'
import MyWork from '~/components/MyWork'
import ContactForm from '~/components/ContactForm'

export default {
  components: {
    InteractiveHeader,
    MyWork,
    ContactForm
  }
}

</script>

<style lang="scss">
  #index-wrapper > section {
    position: relative;

    &:nth-child(2n) {
      background: $white-ter;
    }

    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 4px;
      top: 0;
      left: 0;
      background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.15) 100%);
    }
  }

  .column-title-wrapper {

    position: relative;
    text-align: center;
    padding-bottom: 40px;
    padding-top: 30px;

    &::after {
      content: '';
      display: block;
      width: calc( 100% - 40px);
      height: 1px;
      left: 20px;
      top: calc(50% - 10px);
      background: $grey-lighter;
      position: absolute;
      z-index:1;
    }

    & h3 {
      display: inline-block;
      font-weight: 100 !important;
      color: $grey-dark;
      position: relative;
      padding: 0 30px;
      background: $white;
      z-index:2;
    }
  }

  #index-wrapper > section {
    &:nth-child(2n) {
      & h3 {
        background: $white-ter;
      }
    }
  }
</style>
