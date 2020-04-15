<template>
  <div class="socialButtons buttons">
    <b-tooltip
      v-if="$i18n.locale === 'en'"
      :label="$t('nav.buttonLanguageTooltip')"
      :position="tooltipDirection"
      :type="type === 'is-dark' ? 'is-primary' : 'is-dark'"
      :animated="true"
    >
      <a class="button" :class="type" href="/nl" target="_top">
        <font-awesome-icon :icon="['fas', 'language']"/>
      </a>
    </b-tooltip>
    <b-tooltip
      v-if="$i18n.locale === 'nl'"
      :label="$t('nav.buttonLanguageTooltip')"
      :position="tooltipDirection"
      :type="type === 'is-dark' ? 'is-primary' : 'is-dark'"
      :animated="true"
    >
      <a class="button" :class="type" href="/en" target="_top">
        <font-awesome-icon :icon="['fas', 'language']"/>
      </a>
    </b-tooltip>
    <b-tooltip
      label="hello@robderks.com"
      :position="tooltipDirection"
      :type="type === 'is-dark' ? 'is-primary' : 'is-dark'"
      :animated="true"
    >
      <a class="button" :class="type" href="mailto:hello@robderks.com" target="_top">
        <font-awesome-icon :icon="['fas', 'envelope']"/>
      </a>
    </b-tooltip>
    <b-tooltip
      label="LinkedIn"
      :position="tooltipDirection"
      :type="type === 'is-dark' ? 'is-primary' : 'is-dark'"
      :animated="true"
    >
      <a class="button" :class="type" href="https://www.linkedin.com/in/iamrobderks/" target="_blank">
        <font-awesome-icon :icon="['fab', 'linkedin-in']"/>
      </a>
    </b-tooltip>
    <b-tooltip
      label="GitHub"
      :position="tooltipDirection"
      :type="type === 'is-dark' ? 'is-primary' : 'is-dark'"
      :animated="true"
    >
      <a class="button" :class="type" href="https://github.com/rderks88/rderks88.github.io/tree/development" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']"/>
      </a>
    </b-tooltip>
  </div>
</template>
<script>
export default {
  props: {
    // should be one of Bulma's types
    // e.g. "is-primary" or "is-dark"
    type: {
      required: false,
      type: String,
      default: 'is-primary'
    },
    tooltipDirection: {
      required: false,
      type: String,
      default: 'is-bottom'
    }
  }
}
</script>
<style lang="scss">
  .socialButtons{
    padding-right: 8px;
  }
</style>
