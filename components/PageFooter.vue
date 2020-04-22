<template>
  <section id="pageFooter" class="section has-background-dark">
    <div class="columns is-multiline is-centered is-desktop">
      <div class="column is-9-desktop is-6-widescreen">
        <div class="columns is-multiline is-variable is-8">
          <div class="column is-6">
            <div class="columns is-multiline is-mobile is-variable">
              <div class="column is-narrow is-12-tablet">
                <img src="~/assets/logo.png" width="60" height="60" alt="Logo Rob Derks">
              </div>
              <div class="column is-12-tablet">
                <h3 class="title is-4 has-text-white-ter">
                  {{ $t('footer.title') }}
                </h3>
                <h4 class="subtitle is-5 has-text-grey-light">
                  {{ $t('footer.subtitle') }}
                </h4>
                <social-buttons type="is-dark" tooltip-direction="is-top" />
              </div>
            </div>
          </div>
          <div id="detailsColumn" class="column">
            <h5 class="subtitle is-6 has-text-white-ter">
              Rob Derks Projects & Investments BV
            </h5>
            <h5 class="subtitle is-7 has-text-grey-light">
              <font-awesome-icon :icon="['fab', 'slack-hash']" />&nbsp;&nbsp;&nbsp;
              KVK: 59494255
            </h5>
            <h5 class="subtitle is-7 has-text-grey-light">
              <font-awesome-icon :icon="['fab', 'slack-hash']" />&nbsp;&nbsp;&nbsp;
              BTW: NL853525511B01
            </h5>
            <h5 class="subtitle is-7 has-text-grey-light">
              <font-awesome-icon :icon="['fas', 'piggy-bank']" />&nbsp;&nbsp;&nbsp;
              Bank: NL34INGB0006325166
            </h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SocialButtons from '~/components/SocialButtons'
export default {
  components: {
    SocialButtons
  }
}
</script>

<style lang="scss">
  @include mobile {
    #detailsColumn {
      margin-top: 20px;
    }
  }
</style>
