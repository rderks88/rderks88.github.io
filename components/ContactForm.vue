<template>
  <section class="section">
    <div class="columns is-multiline is-centered is-desktop">
      <div class="column is-9-desktop is-6-widescreen">
        <h3 class="title is-4 has-text-centered">
          Get in contact
        </h3>
      </div>
    </div>
    <div class="columns is-multiline is-centered is-desktop">
      <div class="column is-9-desktop is-6-widescreen">
        <div class="columns is-multiline">
          <div class="column is-one-third">
            <b-field>
              <b-input
                v-model="name"
                placeholder="Naam"
                required
                size="is-default"
                validation-message="Dit veld is verplicht."
                icon="user"
                type="text"
              />
            </b-field>
          </div>
          <div class="column is-one-third">
            <b-field>
              <b-input
                v-model="phone"
                placeholder="Telefoon"
                required
                size="is-default"
                validation-message="Dit veld is verplicht."
                icon="phone"
                type="text"
              />
            </b-field>
          </div>
          <div class="column is-one-third">
            <b-field>
              <b-input
                v-model="email"
                placeholder="Email"
                required
                size="is-default"
                validation-message="Dit veld is verplicht en moet een geldig e-mail adres bevatten."
                icon="envelope"
                type="email"
              />
            </b-field>
          </div>
          <div class="column is-12">
            <b-field>
              <b-input
                v-model="comment"
                placeholder="Comment"
                size="is-default"
                validation-message="Dit veld is verplicht."
                type="textarea"
              />
            </b-field>
          </div>
          <div class="column is-12">
            <b-button class="is-primary" :class="{'is-loading': isSending}" :disabled="isSending" @click="sendMail">
              Send message
            </b-button>
          </div>
        </div>
      </div>
    </div>
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
      isSending: false
    }
  },
  methods: {
    sendMail () {
      // validate form

      // start sending procedure
      this.isSending = true

      this.$axios.$post('https://formspree.io/xzbabgkd', {
        name: this.name,
        phone: this.phone,
        email: this.email,
        comment: this.comment
      })
        .then((response) => {
          // console.log(response.data)
          this.output = response.data
          this.isSending = false
        })
        .catch((error) => {
          // console.log(error)
          this.output = error
          this.isSending = false
        })
    }
  }
}
</script>
