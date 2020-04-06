<template>
  <div class="columns is-mobile" style="margin-bottom: 5px">
    <div class="column">
      <slot />
    </div>
    <div class="column is-narrow">
      <b-tooltip
        :label="$slots.default[0].text + ': ' + proficiency + '/5'"
        type="is-dark"
        :animated="true"
        position="is-right"
      >
        <b-progress
          size="is-small"
          :value="proficiency"
          :max="5"
          :show-value="false"
          style="width: 130px;"
        />
      </b-tooltip>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    proficiency: {
      required: true,
      type: Number,
      validate (value) {
        return value >= 1 && value <= 5
      }
    }
  }
}
</script>
