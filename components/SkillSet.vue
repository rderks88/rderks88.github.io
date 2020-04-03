<template>
  <section class="section">
    <div class="columns is-multiline is-centered is-desktop">
      <div class="column is-9-desktop is-6-widescreen column-title-wrapper">
        <h3 class="title is-4 has-text-centered is-uppercase">
          Skillset
        </h3>
      </div>
    </div>
    <div class="columns is-multiline is-centered is-desktop">
      <div class="column is-9-desktop is-6-widescreen">
        <skill-set-tech/>

        <div class="columns">
          <div class="column is-6">
            <animate-on-visible-wrapper position="left">
              <img src="~/assets/skill-business.png" alt="Vector art business skills">
            </animate-on-visible-wrapper>
          </div>
          <div class="column is-6">
            <h4 class="title is-4">
              Commercieel inzicht
            </h4>
            <div class="content">
              <p>
                Juist op het raakvlak van commercie en techniek voel ik me thuis. Zie me als een
                techneut met interesse en affiniteit voor de commerciele kant van een bedrijf. Ik schakel eenvoudig
                tussen de verschillende disciplines en denk eenvoudig scenario's door. Inzicht in gevolgen van
                conceptuele wijzigingen op verschillende abstractieniveau denk ik eenvoudig door binnen de
                verschillende disciplines. Het uitwerken van cash-flow prognoses laat ik wél aan collega's over.
              </p>
            </div>
            <skill :proficiency="4.5">
              Business development
            </skill>
            <skill :proficiency="4.5">
              The lean startup
            </skill>
            <skill :proficiency="4.5">
              Positionering
            </skill>
          </div>
        </div>

        <div class="columns">
          <div class="column is-6">
            <h4 class="title is-4">
              Productontwikkeling
            </h4>
            <div class="content">
              <p>
                Jarenlange ervaring in web-based product ontwikkeling. Mijn overtuiging is dat je simpelweg niet zomaar
                weet wat je klant wil. Usertesten is noodzakelijk, maar zoek wel een balans.
              </p>
            </div>
            <skill :proficiency="4.5">
              Dev-ops
            </skill>
            <skill :proficiency="4.5">
              Prototyping
            </skill>
            <skill :proficiency="4.5">
              User testing
            </skill>
          </div>
          <div class="column is-6">
            <animate-on-visible-wrapper position="right">
              <img src="~/assets/skill-business.png" alt="Vector art business skills">
            </animate-on-visible-wrapper>
          </div>
        </div>

        <div class="columns">
          <div class="column is-6">
            <animate-on-visible-wrapper position="left">
              <img src="~/assets/skill-business.png" alt="Vector art business skills">
            </animate-on-visible-wrapper>
          </div>
          <div class="column is-6">
            <h4 class="title is-4">
              Gezonde set softskills
            </h4>
            <div class="content">
              <p>
                Zonder uitzondering zullen mensen met wie ik gewerkt heb onderstaande bevestigen. Flexibiliteit heb
                ik op elk vlak, behalve op de normen en waarden waar ik naar leef.
              </p>
            </div>
            <skill :proficiency="5">
              Eerlijk
            </skill>
            <skill :proficiency="4.5">
              Communicatief
            </skill>
            <skill :proficiency="4.5">
              Flexibel
            </skill>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

import AnimateOnVisibleWrapper from '~/components/AnimateOnVisibleWrapper'
import SkillSetTech from '~/components/SkillSetTech'
import Skill from '~/components/Skill'

export default {
  components: {
    AnimateOnVisibleWrapper,
    SkillSetTech,
    Skill
  }
}
</script>
