<template>
  <section
    id="contactForm"
    class="section"
  >
    <div class="columns is-multiline is-centered is-desktop">
      <div class="column is-9-desktop is-6-widescreen">
        <h3 class="title is-4 has-text-centered">
          {{ $t('contactForm.title') }}
        </h3>
        <h4 class="subtitle is-5 has-text-centered">
          {{ $t('contactForm.subtitle') }}
        </h4>
      </div>
    </div>
    <div class="columns is-multiline is-centered is-desktop">
      <div class="column is-9-desktop is-6-widescreen">
        <div class="columns is-multiline">
          <div class="column is-one-third">
            <b-field
              :type="{'is-danger': errorName}"
              :message="errorName ? errorName : ''"
            >
              <b-input
                v-model="name"
                :placeholder="$t('contactForm.placeholders.name')"
                required
                size="is-default"
                :validation-message="$t('contactForm.validation.name')"
                icon="user"
                type="text"
                @input="errorName = null"
              />
            </b-field>
          </div>
          <div class="column is-one-third">
            <b-field
              :type="{'is-danger': errorPhone}"
              :message="errorPhone ? errorPhone : ''"
            >
              <b-input
                v-model="phone"
                :placeholder="$t('contactForm.placeholders.phone')"
                required
                size="is-default"
                :validation-message="$t('contactForm.validation.phone')"
                icon="phone"
                type="text"
                @input="errorPhone = null"
              />
            </b-field>
          </div>
          <div class="column is-one-third">
            <b-field
              :type="{'is-danger': errorEmail}"
              :message="errorEmail ? errorEmail : ''"
            >
              <b-input
                v-model="email"
                :placeholder="$t('contactForm.placeholders.email')"
                required
                size="is-default"
                :validation-message="$t('contactForm.validation.email')"
                icon="envelope"
                type="email"
                @input="errorEmail = null"
              />
            </b-field>
          </div>
          <div class="column is-12">
            <b-field
              :type="{'is-danger': errorComment}"
              :message="errorComment ? errorComment : ''"
            >
              <b-input
                v-model="comment"
                :placeholder="$t('contactForm.placeholders.comment')"
                required
                size="is-default"
                :validation-message="$t('contactForm.validation.comment')"
                type="textarea"
                @input="errorComment = null"
              />
            </b-field>
          </div>
          <div class="column is-12">
            <b-button
              class="is-primary is-pulled-right"
              :class="{'is-loading': isSending}"
              :disabled="isSending || formHasErrors"
              @click="sendMail"
            >
              {{ $t('contactForm.submit') }}
            </b-button>
          </div>
        </div>
      </div>
    </div>

    <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by2">
            <img src="~assets/thank-you.jpg" alt="Thanks">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">
                {{ $t('contactForm.thanks.title') }}
              </p>
              <p class="subtitle is-6">
                {{ $t('contactForm.thanks.subtitle') }}
              </p>
            </div>
          </div>

          <div class="content">
            <small><i>Disclaimer: {{ $t('contactForm.thanks.disclaimer') }}</i></small>
          </div>
        </div>
      </div>
    </b-modal>
  </section>
</template>
<script>

export default {
  data () {
    return {
      name: '',
      phone: '',
      email: '',
      comment: '',
      errorName: null,
      errorPhone: null,
      errorEmail: null,
      errorComment: null,
      isSending: false,
      isCardModalActive: false
    }
  },
  computed: {
    formHasErrors () {
      return this.errorName || this.errorPhone || this.errorEmail || this.errorComment
    }
  },
  methods: {
    validateEmail (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    },
    resetFormInput () {
      this.name = ''
      this.phone = ''
      this.email = ''
      this.comment = ''
    },
    sendMail () {
      // quickly validate form for basics
      // rather do it like this for this one form then to implement v-validate completely
      if (!this.name) {
        this.errorName = this.$t('contactForm.validation.name')
      }
      if (!this.phone) {
        this.errorPhone = this.$t('contactForm.validation.phone')
      }
      if (!this.email) {
        this.errorEmail = this.$t('contactForm.validation.email')
      } else if (!this.validateEmail(this.email)) {
        this.errorEmail = this.$t('contactForm.validation.invalidEmail')
      }
      if (!this.comment) {
        this.errorComment = this.$t('contactForm.validation.comment')
      }

      // if any errors are set, stop here
      if (this.formHasErrors) {
        this.$buefy.toast.open({
          duration: 5000,
          message: this.$t('contactForm.validation.toast'),
          position: 'is-bottom',
          type: 'is-info'
        })
        return
      }

      // start sending procedure
      this.isSending = true

      if (process.env.isLocal) {
        // Give positive feedback without sending request to formSpree
        this.isCardModalActive = true
        this.resetFormInput()
        this.isSending = false
      } else {
        this.$axios.$post('https://formspree.io/xzbabgkd', {
          name: this.name,
          phone: this.phone,
          email: this.email,
          comment: this.comment
        })
          .then((response) => {
            // Give positive feedback
            this.isCardModalActive = true
            this.resetFormInput()
            this.isSending = false
          })
          .catch(() => {
            // Should never happen. If it does, ask the user to send an email directly.
            this.$buefy.dialog.alert({
              title: this.$t('contactForm.fallBackAlert.title'),
              message: this.$t('contactForm.fallBackAlert.message'),
              confirmText: this.$t('contactForm.fallBackAlert.confirmText'),
              type: 'is-info'
            })

            this.isSending = false
          })
      }
    }
  }
}
</script>
