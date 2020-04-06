<template>
  <section class="section">
    <div class="columns is-multiline is-centered is-desktop">
      <div class="column is-9-desktop is-6-widescreen">
        <h3 class="title is-4 has-text-centered">
          I'm Rob Derks
        </h3>
        <h4 class="subtitle is-4 has-text-centered">
          A business savvy programmer
        </h4>
      </div>
    </div>
    <div class="columns is-multiline is-centered is-desktop">
      <div class="column is-9-desktop is-6-widescreen">
        <b-carousel :indicator-inside="false" :arrow="false" pause-text="Paused" pause-info-type="is-info">
          <b-carousel-item v-for="(item, i) in testimonials" :key="i">
            <div class="content">
              <blockquote class="has-text-centered">
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
          name: 'Guus Meijer',
          role: 'Co-founder Yubu',
          img: Guus,
          content: '\n' +
            '            Acht jaar lang heb ik binnen mijn eigen educatieve start-up de rol van CTO vervult, van het prille begin\n' +
            '            tot effectieve marktpenetratie tot succesvolle verkoop. De ervaring die ik hierin heb\n' +
            '            opgedaan wil ik delen jou. Laten we samen bouwen aan jouw product. Zet me in als product owner of als\n' +
            '            senior programmeur. Hoe kan ik jou helpen?'
        },
        {
          name: 'Alex Buis',
          role: 'CTO We Are Builders',
          img: Alex,
          content: '\n' +
            '            Acht jaar lang heb ik binnen mijn eigen educatieve start-up de rol van CTO vervult, van het prille begin\n' +
            '            tot effectieve marktpenetratie tot succesvolle verkoop. De ervaring die ik hierin heb\n' +
            '            opgedaan wil ik delen jou. Laten we samen bouwen aan jouw product. Zet me in als product owner of als\n' +
            '            senior programmeur. Hoe kan ik jou helpen?'
        },
        {
          name: 'Kees Meershoek',
          role: 'Co-founder Yubu',
          img: Kees,
          content: '\n' +
            '            Acht jaar lang heb ik binnen mijn eigen educatieve start-up de rol van CTO vervult, van het prille begin\n' +
            '            tot effectieve marktpenetratie tot succesvolle verkoop. De ervaring die ik hierin heb\n' +
            '            opgedaan wil ik delen jou. Laten we samen bouwen aan jouw product. Zet me in als product owner of als\n' +
            '            senior programmeur. Hoe kan ik jou helpen?'
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
</style>
