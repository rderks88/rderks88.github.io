<template>
  <div id="index-wrapper">
    <interactive-header />
    <testimonials />
    <my-work />
    <skill-set />
    <contact-form />
  </div>
</template>

<script>

import InteractiveHeader from '~/components/InteractiveHeader'
import Testimonials from '~/components/Testimonials'
import MyWork from '~/components/MyWork'
import SkillSet from '~/components/SkillSet'
import ContactForm from '~/components/ContactForm'

export default {
  components: {
    InteractiveHeader,
    Testimonials,
    MyWork,
    SkillSet,
    ContactForm
  }
}

</script>

<style lang="scss">

  @import "~assets/scss/variables";

  #index-wrapper > section {
    position: relative;

    // Give every second section a slightly darker background
    &:nth-child(2n) {
      background: $white-ter;
    }

    // Give every section a small shadow
    // Done with linear gradient to prevent weird drop shadow corners
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

</style>
