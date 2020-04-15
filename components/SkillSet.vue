<template>
  <section
    id="skills"
    class="section"
  >
    <div class="columns is-multiline is-centered is-desktop">
      <div class="column is-7-desktop is-6-widescreen">
        <h3 class="title is-4 has-text-centered">
          {{ $t('skillset.title') }}
        </h3>
        <h4 class="subtitle is-5 has-text-centered">
          {{ $t('skillset.subtitle') }}
        </h4>
      </div>
    </div>
    <div class="columns is-multiline is-centered is-desktop">
      <div class="column is-7-desktop is-6-widescreen">
        <skill-set-tech />
      </div>
    </div>
  </section>
</template>
<script>

import SkillSetTech from '~/components/SkillSetTech'

export default {
  components: {
    SkillSetTech
  }
}
</script>
