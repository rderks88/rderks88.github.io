<template>
  <div class="columns">
    <div class="column is-6-desktop">
      <h4 class="title is-4">
        Technisch
      </h4>
      <div class="content">
        <p>
          Fullstack developer: zeer comfortabel in een favoriete set technieken maar sta altijd open voor nieuwe
          technieken.
        </p>
        <skill :proficiency="4.5">
          Php
        </skill>
        <skill :proficiency="4.5">
          Laravel
        </skill>
        <skill :proficiency="4">
          Javascript
        </skill>
        <skill :proficiency="4">
          Vue
        </skill>
        <skill :proficiency="3.5">
          Symphony
        </skill>
        <skill :proficiency="3">
          Angular
        </skill>
      </div>
    </div>
    <div class="column is-6-desktop">
      <animate-on-visible-wrapper position="right">
        <div class="stickers-wrapper">
          <div class="sticker">
            <android class="android-logo" />
            <android class="android-logo" />
          </div>
          <div class="sticker">
            <chrome class="chrome-logo" />
            <chrome class="chrome-logo" />
          </div>
          <div class="sticker larger">
            <composer class="composer-logo" />
            <composer class="composer-logo" />
          </div>
          <div class="sticker">
            <css class="css-logo" />
            <css class="css-logo" />
          </div>
          <div class="sticker larger">
            <docker class="docker-logo" />
            <docker class="docker-logo" />
          </div>
          <div class="sticker larger">
            <git class="git-logo" />
            <git class="git-logo" />
          </div>
          <div class="sticker larger">
            <github class="github-logo" />
            <github class="github-logo" />
          </div>
          <div class="sticker">
            <html5 class="html5-logo" />
            <html5 class="html5-logo" />
          </div>
          <div class="sticker smaller">
            <javascript class="javascript-logo" />
            <javascript class="javascript-logo" />
          </div>
          <div class="sticker smaller">
            <laravel class="laravel-logo" />
            <laravel class="laravel-logo" />
          </div>
          <div class="sticker ">
            <linux class="linux-logo" />
            <linux class="linux-logo" />
          </div>
          <div class="sticker">
            <mysql class="mysql-logo" />
            <mysql class="mysql-logo" />
          </div>
          <div class="sticker smaller">
            <nodejs class="nodejs-logo" />
            <nodejs class="nodejs-logo" />
          </div>
          <div class="sticker">
            <php class="php-logo" />
            <php class="php-logo" />
          </div>
          <div class="sticker smaller">
            <phpstorm class="phpstorm-logo" />
            <phpstorm class="phpstorm-logo" />
          </div>
          <div class="sticker smaller">
            <postgresql class="postgresql-logo" />
            <postgresql class="postgresql-logo" />
          </div>
          <div class="sticker">
            <postman class="postman-logo" />
            <postman class="postman-logo" />
          </div>
          <div class="sticker">
            <stack class="stack-logo" />
            <stack class="stack-logo" />
          </div>
          <div class="sticker">
            <vue class="vue-logo" />
            <vue class="vue-logo" />
          </div>
        </div>
      </animate-on-visible-wrapper>
    </div>
  </div>
</template>
<script>
import AnimateOnVisibleWrapper from '~/components/AnimateOnVisibleWrapper'
import Skill from '~/components/Skill'
import Android from '~/assets/logos/android.svg'
import Chrome from '~/assets/logos/chrome.svg'
import Composer from '~/assets/logos/composer.svg'
import Css from '~/assets/logos/css.svg'
import Docker from '~/assets/logos/docker.svg'
import Git from '~/assets/logos/git.svg'
import Github from '~/assets/logos/github-octocat.svg'
import Html5 from '~/assets/logos/html-5.svg'
import Javascript from '~/assets/logos/javascript.svg'
import Laravel from '~/assets/logos/laravel.svg'
import Linux from '~/assets/logos/linux-tux-1.svg'
import Mysql from '~/assets/logos/mysql.svg'
import Nodejs from '~/assets/logos/nodejs-icon.svg'
import Php from '~/assets/logos/php.svg'
import Phpstorm from '~/assets/logos/phpstorm.svg'
import Postgresql from '~/assets/logos/postgresql.svg'
import Postman from '~/assets/logos/postman.svg'
import Stack from '~/assets/logos/stack-overflow.svg'
import Vue from '~/assets/logos/vue-js.svg'

export default {
  components: {
    AnimateOnVisibleWrapper,
    Skill,
    Android,
    Chrome,
    Composer,
    Css,
    Docker,
    Git,
    Github,
    Html5,
    Javascript,
    Laravel,
    Linux,
    Mysql,
    Nodejs,
    Php,
    Phpstorm,
    Postgresql,
    Postman,
    Stack,
    Vue
  }
}
</script>

<style lang="scss">
  .stickers-wrapper {
    width: 80%;
    padding-top: 80%;
    position: relative;
    margin-bottom: 80px;
    margin-left:10%;

    & .sticker {
      position: absolute;
      width: 100%;
      height: 100%;

      & svg {
        & path {
          transform: scale(0.6) translate(5%, 25%);
        }

        max-width: 52%;
        max-height: 52%;
      }

      & svg:nth-child(1) {
        position: absolute;
        filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, .5));

        & path {
          fill: none;
          stroke: white;
          stroke-width: 25px;
          stroke-linejoin: round;
        }
      }

      &.larger svg {
        max-width: 61%;
        max-height: 61%;
      }

      &.smaller svg {
        max-width: 47%;
        max-height: 47%;
      }

      & svg:nth-child(2) {
        position: absolute;
      }

      // Android
      &:nth-child(1) {
        top: -5%;
        left: 9%;
      }

      // Chrome
      &:nth-child(2) {
        top: 68%;
        left: 18%;
      }

      // Composer
      &:nth-child(3) {
        top: 2%;
        left: -14%;
      }

      // Css
      &:nth-child(4) {
        top: 24%;
        left: 6%;
      }

      // Docker
      &:nth-child(5) {
        top: 10%;
        left: 23%;
        z-index: 2;
      }

      // Git
      &:nth-child(6) {
        top: 80%;
        left: -4%;
        z-index: 1;
      }

      // Github
      &:nth-child(7) {
        top: 38%;
        left: 36%;
        z-index: 1;
      }

      // Html5
      &:nth-child(8) {
        top: 60%;
        left: 50%;
        z-index: 1;
      }

      // Javascript
      &:nth-child(9) {
        top: 3%;
        left: 54%;
      }

      // Laravel
      &:nth-child(10) {
        top: 45%;
        left: 29%;
      }

      // Linux
      &:nth-child(11) {
        top: 11%;
        left: 76%;
        z-index: 1;
      }

      // Mysql
      &:nth-child(12) {
        top: -12%;
        left: 29%;
      }

      // Nodejs
      &:nth-child(13) {
        top: 4%;
        left: 27%;
      }

      // Php
      &:nth-child(14) {
        top: 50%;
        left: 54%;
      }

      // Phpstorm
      &:nth-child(15) {
        top: 45%;
        left: 65%;
      }

      // Postgresql
      &:nth-child(16) {
        top: 45%;
        left: -3%;
      }

      // Postman
      &:nth-child(17) {
        top: 50%;
        left: 54%;
      }

      // Stack
      &:nth-child(18) {
        top: 55%;
        left: 78%;
      }

      // Vue
      &:nth-child(19) {
        top: 1%;
        left: 59%;
      }

      //seemingly random rotate
      &:nth-child(2n) {
        transform: rotate(-8deg);
      }

      &:nth-child(3n) {
        transform: rotate(8deg);
      }

      &:nth-child(7n) {
        transform: rotate(15deg);
      }

      &:nth-child(9n) {
        transform: rotate(-15deg);
      }
    }
  }
</style>
