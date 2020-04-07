<template>
  <div id="phone">
    <div id="screen">
      <div class="pages">
        <slot name="default" />
      </div>
    </div>
    <div id="home" />
    <div id="speaker" />
  </div>
</template>
<style lang="scss" scoped>

  @import "~assets/scss/variables";

  /* phone */
  #phone {
    width: 310px;
    height: 640px;
    border-radius: 30px;
    position: relative;
    margin: 0 0;
    background: $white-ter;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);
  }
  #screen {
    width: 290px;
    height: 520px;
    border: 1px solid #ccc;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -260px -145px;
    box-sizing: border-box;
    overflow: hidden;
  }
  #home {
    width: 36px;
    height: 36px;
    background: $grey-lighter;
    position: absolute;
    bottom: 10px;
    left: 50%;
    margin: 0 -18px;
    border-radius: 50%;
    box-shadow: inset 0 0 5px 0 rgba(0, 0, 0, 0.1);
  }
  #speaker {
    width: 50px;
    height: 6px;
    background: $grey-lighter;
    border-radius: 6px;
    position: absolute;
    left: 50%;
    top: 25px;
    margin: 0 -25px;
    box-shadow: inset 0 0 5px 0 rgba(0, 0, 0, 0.1);
  }

  .pages {
    z-index: 1;
    position: absolute;
    width: 318px;
    height: 100%;
  }
</style>
