<template>
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
        <div class="columns">
          <div class="column is-6">
            <h4 class="title is-4">
              Technisch onderlegd
            </h4>
            <p>
              Lorum ipsum dolor
            </p>
            <ul>
              <li>Php</li>
              <li>Javascript</li>
            </ul>
          </div>
          <div class="column is-6">
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
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
    width: 100%;
    padding-top: 100%;
    position: relative;

    & .sticker {
      position: absolute;

      & svg {
        & path {
          transform: scale(0.6) translate(5%, 25%);
        }
        max-width: 150px;
        max-height: 150px;
      }

      & svg:nth-child(1) {
        position: absolute;
        filter: drop-shadow( 1px 1px 0 rgba(0, 255, 255, .5)) drop-shadow( 3px 3px 4px rgba(0, 0, 0, .5));

        & path {
          fill: none;
          stroke: white;
          stroke-width: 25px;
          stroke-linejoin: round;
        }
      }

      &.larger svg {
        max-width: 200px;
        max-height: 200px;
      }

      &.smaller svg {
        max-width: 120px;
        max-height: 120px;
      }

      & svg:nth-child(2) {
        position: absolute;
      }

      // Android
      &:nth-child(1) {
        top: -5%;
        left: 10%;
      }

      // Chrome
      &:nth-child(2) {
        top: 75%;
        left: 20%;
      }

      // Composer
      &:nth-child(3) {
        top: -3%;
        left: -6%;
      }

      // Css
      &:nth-child(4) {
        top: 32%;
        left: 7%;
      }

      // Docker
      &:nth-child(5) {
        top: 10%;
        left: 25%;
        z-index:2;
      }

      // Git
      &:nth-child(6) {
        top: 70%;
        left: 1%;
        z-index:1;
      }

      // Github
      &:nth-child(7) {
        top: 28%;
        left: 44%;
        z-index:1;
      }

      // Html5
      &:nth-child(8) {
        top: 75%;
        left: 50%;
      }

      // Javascript
      &:nth-child(9) {
        top: 25%;
        left: 60%;
      }

      // Laravel
      &:nth-child(10) {
        top: 60%;
        left: 27%;
      }

      // Linux
      &:nth-child(11) {
        top: 15%;
        left: 78%;
      }

      // Mysql
      &:nth-child(12) {
        top: -3%;
        left: 45%;
      }

      // Nodejs
      &:nth-child(13) {
        top: 4%;
        left: 30%;
      }

      // Php
      &:nth-child(14) {
        top: 50%;
        left: 60%;
      }

      // Phpstorm
      &:nth-child(15) {
        top: 40%;
        left: 80%;
      }

      // Postgresql
      &:nth-child(16) {
        top: 45%;
        left: -3%;
      }

      // Postman
      &:nth-child(17) {
        top: 50%;
        left: 60%;
      }

      // Stack
      &:nth-child(18) {
        top: 70%;
        left: 68%;
      }

      // Vue
      &:nth-child(19) {
        top: 1%;
        left: 65%;
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
