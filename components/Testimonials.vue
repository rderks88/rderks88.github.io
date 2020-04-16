<template>
  <section
    id="testimonials"
    class="section"
  >
    <div class="columns is-multiline is-centered is-desktop">
      <div class="column is-9-desktop is-6-widescreen">
        <h3 class="title is-4 has-text-centered">
          {{ $t('testimonials.title') }}
        </h3>
        <h4 class="subtitle is-5 has-text-centered">
          {{ $t('testimonials.subtitle') }}
        </h4>
      </div>
    </div>
    <div class="columns is-multiline is-centered is-desktop">
      <div class="column is-9-desktop is-6-widescreen">
        <b-carousel :indicator-inside="false" :arrow="false" pause-text="Paused" pause-info-type="is-info">
          <b-carousel-item v-for="(item, i) in testimonials" :key="i">
            <div class="content">
              <blockquote class="has-text-centered testimonial-content">
                {{ getTestimonial(i) }}
              </blockquote>
            </div>
          </b-carousel-item>
          <template slot="indicators" slot-scope="props">
            <div class="reference has-text-centered">
              <div
                class="avatar"
                :style="{
                  backgroundImage: `url(${getImg(props.i)})`
                }"
              />
              <h4 class="title is-5">
                {{ getName(props.i) }}
              </h4>
              <h5 class="subtitle is-5">
                {{ getRole(props.i) }}
              </h5>
            </div>
          </template>
        </b-carousel>
      </div>
    </div>
  </section>
</template>

<script>
import Guus from '~/assets/guus.jpg'
import Kees from '~/assets/kees.jpg'
import Alex from '~/assets/alex.jpg'

export default {
  data () {
    return {
      testimonials: [
        {
          name: this.$t('testimonials.guus.name'),
          role: this.$t('testimonials.guus.role'),
          img: Guus,
          content: this.$t('testimonials.guus.content')
        },
        {
          name: this.$t('testimonials.alex.name'),
          role: this.$t('testimonials.alex.role'),
          img: Alex,
          content: this.$t('testimonials.alex.content')
        },
        {
          name: this.$t('testimonials.kees.name'),
          role: this.$t('testimonials.kees.role'),
          img: Kees,
          content: this.$t('testimonials.kees.content')
        }
      ]
    }
  },
  methods: {
    getName (value) {
      return this.testimonials[value].name
    },
    getRole (value) {
      return this.testimonials[value].role
    },
    getTestimonial (value) {
      return this.testimonials[value].content
    },
    getImg (value) {
      return this.testimonials[value].img
    }
  }
}
</script>

<style lang="scss">

  .reference {
    opacity: 0.5;
    text-align: center;
    transition: opacity 0.3s, transform 0.3s;
    padding: 5px;
    transform: scale(0.8);

    & .avatar {
      width: 80px;
      height: 80px;
      background-repeat: no-repeat;
      background-size: cover;
      padding: 8px;
      border: solid 6px $white-ter;
      box-shadow: 0 0 0 3px $primary;
      border-radius: 100%;
      overflow: hidden;
      margin-bottom: 15px;
      display: inline-block;
    }

    & h4,
    & h5 {
      transition: opacity 1s;
      opacity: 0;
    }
  }

  .reference:hover,
  .is-active .reference {
    opacity: 1;
    transform: scale(1);

    & h4,
    & h5 {
      opacity: 1;
    }
  }

  .testimonial-content{
    min-height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
