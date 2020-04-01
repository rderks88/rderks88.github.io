<template>
  <div id="index-wrapper">
    <interactive-header />

    <section class="section">
      <div class="columns is-centered is-desktop">
        <div class="column is-8">
          <p class="bd-notification is-primary">
            Acht jaar lang heb ik binnen mijn eigen educatieve start-up de rol van CTO vervult, van het prille begin tot
            een effectieve marktpenetratie tot succesvolle verkoop. De ervaring die ik hierin heb opgedaan wil ik delen
            met jou. Laten we samen bouwen aan jouw product. Zet me in als adviseur, product owner of als senior
            programmeur. Hoe kan ik jou helpen?
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <h3 class="title has-text-centered">
        My work
      </h3>
      <div class="columns is-centered is-desktop">
        <div class="column is-4">
          <p>programmers for the planet</p>
        </div>
        <div class="column is-4">
          <p>Yubu</p>
        </div>
      </div>
    </section>

    <section class="section">
      <h3 class="title has-text-centered">
        Skills
      </h3>
      card
    </section>

    <section class="section">
      <h3 class="title has-text-centered">
        Get in contact
      </h3>
      <div class="columns is-centered is-desktop">
        <div class="column is-8">
          <div class="columns is-multiline">
            <div class="column is-half">
              <b-field>
                <b-input placeholder="Naam" type="text" />
              </b-field>
            </div>
            <div class="column is-half">
              <b-field>
                <b-input placeholder="Email" type="email" />
              </b-field>
            </div>
            <div class="column">
              <b-field>
                <b-input
                  type="textarea"
                  placeholder="Maxlength automatically counts characters"
                />
              </b-field>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import InteractiveHeader from '~/components/InteractiveHeader'

export default {
  components: {
    InteractiveHeader
  }
}

</script>

<style lang="scss">
  #index-wrapper > section:nth-child(2n) {
    background: $white-ter;
  }
</style>
