<template>
  <div class="columns is-multiline is-mobile is-variable is-8">
    <div class="column is-12">
      <div class="content">
        <p>
          {{ $t('skillset.content') }}
        </p>
      </div>
    </div>
    <div class="column is-12-desktop">
      <div class="columns is-mobile is-gapless stickers-wrapper is-multiline">
        <div v-for="(skill, i) in skills" :key="i" class="column is-4-mobile is-3-tablet is-2-desktop">
          <b-tooltip
            :label="skill"
            position="is-bottom"
            type="is-dark"
            :animated="true"
          >
            <div class="sticker" @click="showMoreInfo(skill)">
              <component :is="skill" :class="skill + '-logo'" />
              <component :is="skill" :class="skill + '-logo'" />
            </div>
          </b-tooltip>
        </div>
      </div>
    </div>
  </div>
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
  },

  data () {
    return {
      skills: [
        'Android',
        'Chrome',
        'Composer',
        'Css',
        'Docker',
        'Git',
        'Github',
        'Html5',
        'Javascript',
        'Laravel',
        'Linux',
        'Mysql',
        'Nodejs',
        'Php',
        'Phpstorm',
        'Postgresql',
        'Postman',
        'Stack',
        'Vue'
      ]
    }
  },

  methods: {
    showMoreInfo (skill) {
      this.$buefy.dialog.alert({
        title: this.$t('skillset.skills.' + skill.toLowerCase() + '.name'),
        message: this.$t('skillset.skills.' + skill.toLowerCase() + '.description'),
        confirmText: 'Cool!'
      })
    }
  }
}
</script>

<style lang="scss">
  .stickers-wrapper {
    width: 100%;
    position: relative;

    $stickerSize: 130px;
    $stickerSizeDesktop: 90px;

    & .sticker {
      position: relative;
      width: $stickerSize;
      height: $stickerSize;

      @include desktop {
        width: $stickerSizeDesktop;
        height: $stickerSizeDesktop;
      }

      transition: transform 0.5s;

      & svg {
        width: 100%;
        height: 100%;
        transition: filter 0.5s;
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

      &:hover {
        transform: scale(1.1) rotate(3deg);
        cursor: pointer;

        & svg:nth-child(1) {
          filter: drop-shadow(2px 2px 8px rgba(0, 0, 0, .3));
        }
      }

      //make sure the 2nd instance of the svg is positioned the same as the first
      & svg:nth-child(2) {
        position: absolute;
      }
    }
  }
</style>
