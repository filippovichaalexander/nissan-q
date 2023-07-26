<template>
<div class="main-wrapper">
  <h2 
  class="title text-h4 text-left 
    text-uppercase text-weight-light 
    q-pl-lg-xl q-pl-sm-lg q-pl-xs-sm">
  Особенности
  </h2>
  <div 
    class="wrapper q-pl-lg-xl q-pl-sm-lg q-pl-xs-sm 
    q-pr-lg-xl q-pr-sm-lg q-pr-xs-sm q-pt-none">
    <div class="row items-start justify-start wrapper"
    >
      <div 
        class="col-md-4 col-sm-6 col-xs-12 card-wrapper" 
        v-for="feature in features" 
        :key="feature.title"> 
        <q-card class="my-card no-border" flat>
          <img 
            class="item-img" 
            :src="feature.image" 
            :alt="feature.image_alt"/>
          <q-card-section class="q-pa-none">
            <p 
              class="content q-pt-lg text-weight-light" 
              :class="fontSize">
              {{feature.description}}
            </p>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <q-btn 
      class="btn absolute q-mt-md" 
      color="primary" 
      text-color="black" 
      label="Добавить особенность" 
      outline 
      @click="addFeature"/>
  </div>
</div>
</template>

<script>
import newImg from '../assets/newImg.png'

import { useQuasar } from 'quasar'

export default {
  data() {
    return {
      quasar: useQuasar(),
    }
  },
  computed: {
    features() {
      if(this.$store.getters.features) {       
        return this.$store.getters.features.filter(f => f.model_name === 'Figaro' && f.description?.length) // nullsafe 
      } else {
       return false;
      }
    },
    fontSize() {
      if(this.quasar.screen.lt.md) {
        return 'text-body2'
      } else {
        return 'text-body1'
      }
    },
  },
  mounted() {
    this.$store.dispatch('getFeatures')
  },
  methods: {
    addFeature() {
      let feature = {
        description: 'Вращение стационарно заставляет иначе взглянуть на то, что такое нестационарный гироскопический стабилизатор.',
        model_name: 'Figaro',
        image: newImg,
        image_alt: 'нестационарный гироскопический стабилизатор'
      }
      this.$store.commit('addFeature', feature)
    }
  }
}
</script>

<style scoped lang="scss">
  .main-wrapper {
    padding-bottom: 90px;
  }
  .title {
    font-family: "NissanLight", Helvetica, Arial;
  }
  .content {
    font-family: "NissanLight", Helvetica, Arial;
    line-height: 25.6px;
    color: #000;
  }
  .item-img {
    object-fit: cover;
    width: 100%;
    height: 71vh;
  }
  .card-wrapper:nth-child(2),
  .card-wrapper:nth-child(5n),
  .card-wrapper:nth-child(8n) {
    padding: 0 0.5rem 0 0.5rem;
  }
  .card-wrapper:nth-child(1),
  .card-wrapper:nth-child(4n),
  .card-wrapper:nth-child(7n) {
    padding: 0 0.5rem 0 0;
  }
  .card-wrapper:nth-child(3),
  .card-wrapper:nth-child(6n),
  .card-wrapper:nth-child(9n) {
    padding: 0 0 0 0.5rem;
  }
  .btn {
    font-family: "NissanRegular", Helvetica, Arial;
    font-size: 1rem;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (max-width: $breakpoint-sm-max) {
      .card-wrapper:nth-child(1) {
        padding: 0 0.5rem 0 0;
      }
      .card-wrapper:nth-child(2) {
        padding: 0 0 0.5rem 0.5rem;
      }
      .card-wrapper:nth-child(3) {
        padding: 0.5rem 0.5rem 0 0;
      }
      .card-wrapper:nth-child(4) {
        padding: 0.5rem 0 0.5rem 0.5rem;
      } 
    }
    @media (max-width: $breakpoint-xs-max) {
      .card-wrapper:nth-child(1) {
        padding: 0 0 0 0;
      }
      .card-wrapper:not(:nth-child(1)) {
        padding: 0.5rem 0 0 0;
      }
    }
</style>