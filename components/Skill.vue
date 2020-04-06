<template>
  <div class="columns is-gapless is-mobile" style="margin-bottom: 25px">
    <div class="column is-narrow">
      <b-tooltip
        :label="$slots.default[0].text + ': ' + proficiency + '/5'"
        type="is-dark"
        :animated="true"
        position="is-top"
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
    <div class="column" style="padding-left: 15px !important;">
      <slot />
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
