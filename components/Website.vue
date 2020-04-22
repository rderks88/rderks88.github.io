<template>
  <div
    class="website"
  >
    <slot name="default" />
    <div class="dots">
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
    </div>
    <div class="burgers">
      <div class="burger" />
      <div class="burger" />
      <div class="burger" />
    </div>
  </div>
</template>
<style lang="scss" scoped>

  /* phone */
  .website {
    background-color: $white-ter;
    padding: 40px 0 0;
    border-radius: 2px;
    position: relative;
    margin: 0 0;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);
    line-height: 0;
    width: auto;

    & .dots {
      position: absolute;
      top: 16px;
      left: 16px;

      & .dot {
        float: left;
        width: 8px;
        height: 8px;
        border-radius: 8px;
        margin-right: 5px;
        background: $grey-lighter;
      }
    }

    & .burgers {
      position: absolute;
      top: 12px;
      right: 16px;

      & .burger {
        width: 20px;
        height: 3px;
        border-radius: 8px;
        margin-bottom: 4px;
        background: $grey-lighter;
      }
    }
  }
</style>
