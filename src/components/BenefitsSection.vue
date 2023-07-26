<template>
  <div class="benefits wrapper 
  q-pl-lg-xl q-pl-sm-lg q-pl-xs-sm 
    q-pr-lg-xl q-pr-sm-lg q-pr-xs-sm" style="width: 100%;">
    <h1 
    class="benefits__title text-h3 text-left text-uppercase text-weight-light"
    :class="fontSize">Мы ценим Ваше время и комфорт! 
Запишитесь на сервис Nissan онлайн</h1>
    <swiper
      :loop="true"
      :navigation="true"
      :swipe="true"
      :slidesPerView="4"
      :spaceBetween="10"
      :modules="modules"
      :breakpoints="{ 1440: {slidesPerView: 4}, 1024: {slidesPerView: 3},600: {slidesPerView: 2},300: {slidesPerView: 1} }"
      class="mySwiper q-guttr-md" 
    >
      <swiper-slide class="col-5 swiper--slide benefits__item-title" v-for="benefit in benefits" :key="benefit.title">
        <q-card class="benefits__item row justify-center q-pa-sm" flat>
          <div class="img-wrapper row justify-center">
            <img class="benefits__item-icon" :src="benefit.icon" :alt="benefit.alt">
          </div>
          <q-card-section class="q-pt-md benefits__item-section">
            <h3 class="text-h6 text-weight-bold text-center">{{benefit.title}}</h3>
            <p class="text-center text-uppercase benefits__item-content">{{benefit.content}}</p>
          </q-card-section>
        </q-card>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'


  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/navigation';

  import '../css/app.scss';

  // import required modules
  import { Navigation } from 'swiper/modules';

export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        modules: [Navigation],
        quasar: useQuasar(),
        
      }
    },
    computed: {
      fontSize() {
        if(this.quasar.screen.lt.md) {
          return 'text-h5'
        } else {
          return 'text-h3'
        }
      },
      benefits() {
        return this.$store.getters.benefits
      }
    },
    mounted() {
      this.benefits
    }
  }
</script>

<style scoped lang="scss">
.swiper-button-next, .swiper-button-prev {
  opacity: 1;
  transition: 0.5s ease-in-out;
}   
.swiper-button-disabled {
  visibility: hidden;
  opacity: 0;
  transition: 0.5s ease-in-out;
}
.mySwiper {
  padding: 0.2rem;
}
.swiper--slide {
  padding-bottom: 2rem;
}
.img-wrapper {
  height: 250px;
  width: 90%;
}
  .benefits {
    &__title {
      font-family: "NissanLight", Helvetica, Arial;
      line-height: 4rem;
      position: relative;
        &:before {
        position: absolute;
        left: 0;
        top: -2rem;
        content: '';
        width: 77.83px;
        height: 4px;
        background-color: #C10933;
      }
    }
    &__item {
      min-height: 420px;
    }
    &__item-title {
      font-family: "NissanBold", Helvetica, Arial;
      font-size: 1.3rem;
    }
    &__item-section {
      height: 142px;
    }
    &__item-content {
      font-family: "NissanRegular", Helvetica, Arial;
      font-size: 1rem;
    }
    &__item-icon {
      max-width: 84%;
      object-fit: contain !important;
    }
    .font-size--sm {
      font-size: 12px;
    }
    @media (max-width: $breakpoint-md-max) {
     .benefits {
      &__item-section {
        height: 193px;
      }
      &__title {
        line-height: 1.5;
      } 
     }
     .img-wrapper {
        height: 180px;
      }
    }
    @media (max-width: $breakpoint-sm-max) {
      .benefits {
        &__item-section {
          height: 112px;
        }
      }
    }
  }

</style>