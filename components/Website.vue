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
<style lang="scss">

  /* phone */
  #phone {
    width: 310px;
    height: 640px;
    border: 2px solid #ccc;
    border-radius: 30px;
    position: relative;
    margin: 0 0;
    background: #fff;
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
    border: 1px solid #ccc;
    position: absolute;
    bottom: 10px;
    left: 50%;
    margin: 0 -18px;
    border-radius: 50%;
  }
  #speaker {
    width: 50px;
    height: 6px;
    border: 1px solid #ccc;
    border-radius: 6px;
    position: absolute;
    left: 50%;
    top: 25px;
    margin: 0 -25px;
  }

  .pages {
    z-index: 1;
    position: absolute;
    width: 318px;
    height: 100%;
  }
</style>
