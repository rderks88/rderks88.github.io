<template>
  <div id="index-wrapper">
    <interactive-header/>

    <section class="section">
      <div class="columns is-multiline is-centered is-desktop">
        <div class="column is-8 column-title-wrapper">
          <h3 class="title is-4 has-text-centered is-uppercase">
            About me
          </h3>
        </div>
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
      <div class="columns is-multiline is-centered is-desktop">
        <div class="column is-8 column-title-wrapper">
          <h3 class="title is-4 has-text-centered is-uppercase">
            My work
          </h3>
        </div>
        <div class="column is-8">
          <div class="columns">
            <div class="column is-6">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">John Smith</p>
                      <p class="subtitle is-6">@johnsmith</p>
                    </div>
                  </div>

                  <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href="#">#css</a> <a href="#">#responsive</a>
                    <br>
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-6">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">John Smith</p>
                      <p class="subtitle is-6">@johnsmith</p>
                    </div>
                  </div>

                  <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href="#">#css</a> <a href="#">#responsive</a>
                    <br>
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="columns is-multiline is-centered is-desktop">
        <div class="column is-8 column-title-wrapper">
          <h3 class="title is-4 has-text-centered is-uppercase">
            Skills
          </h3>
        </div>
        <div class="column is-8">
        </div>
      </div>
    </section>

    <section class="section">
      <div class="columns is-multiline is-centered is-desktop">
        <div class="column is-8 column-title-wrapper">
          <h3 class="title is-4 has-text-centered is-uppercase">
            Get in contact
          </h3>
        </div>
        <div class="column is-8">
          <div class="columns is-multiline">
            <div class="column is-half">
              <b-field>
                <b-input placeholder="Naam" type="text"/>
              </b-field>
            </div>
            <div class="column is-half">
              <b-field>
                <b-input placeholder="Email" type="email"/>
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
  #index-wrapper > section {
    position: relative;

    &:nth-child(2n) {
      background: $white-ter;
    }

    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 4px;
      top: 0;
      left: 0;
      background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.15) 100%);
    }
  }

  .column-title-wrapper {

    position: relative;
    text-align: center;
    padding-bottom: 20px;

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      left: 0;
      top: calc(50% - 5px);
      background: $grey-lighter;
      position: absolute;
      z-index:1;
    }

    & h3 {
      display: inline-block;
      font-weight: 100 !important;
      color: $grey-dark;
      position: relative;
      padding: 0 30px;
      background: $white;
      z-index:2;
    }
  }

  #index-wrapper > section {
    &:nth-child(2n) {
      & h3 {
        background: $white-ter;
      }
    }
  }
</style>
