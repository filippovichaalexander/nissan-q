<template>
  <q-page class="row wrap justify-center items-start content-start">
    <MainSection />
    <!-- <p>www</p> -->
    <BenefitsSection />
    <FeaturesSection />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

import MainSection from '../components/MainSection.vue'
import BenefitsSection from '../components/BenefitsSection.vue'
import FeaturesSection from '../components/FeaturesSection.vue'


export default defineComponent({
  name: 'IndexPage',
  components: {
    MainSection,
    BenefitsSection,
    FeaturesSection
  }
})
</script>
