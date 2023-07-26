<template>
  <div class="wrapper q-gutter-md col-12 q-mb-lg q-ml-none">
    <!-- <q-select filled v-model="model" :options="options" label="Filled" /> -->
    <img class="car" src="../assets/main-car.svg" alt="vehicle">
    <div class="wrapper__top q-pb-xl q-ml-none q-mr-none">
      <div class="container q-pl-xl q-pr-xl">
        <q-select class="select bg-white" 
          filled
          behavior="menu"
          label="Тест-драйв"
          transition-show="scale"
          transition-hide="scale"
          :options="testDriveOptions"/>
          <img class="logo" src="../assets/logo.svg" alt="logo">
      </div>
      
    </div>
    <div class="wrapper__bottom q-ma-none"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testDriveOptions: ['Тест драйв 1', 'Тест драйв 2', 'Тест драйв 3']
    }
  }
}
</script>

<style scoped lang="scss">
  .wrapper {
    font-family: "NissanRegular", Helvetica, Arial;
    position: relative;
    background:  
      url('../assets/main-shadow.svg') center no-repeat,
      url('../assets/main-header.svg') 75% 50% no-repeat;
    background-size: 100%, 69%;
    &__top {
      background: 
        url('../assets/main-shadow.svg') center no-repeat, 
        url('../assets/main-header.svg') 62% 50% no-repeat, 
        #0ABAB5;
      background-size: 100%, 64%;
      height: 464px;
    }
    &__bottom {
      height: 40px;
      background-color: #fff;
    }
  }
  .container {
    width: 100%;
    max-width: 1400px;
    height: 100%;
    position: relative;
    z-index: 10;
  }
  .select {
    width: 250px;
    position: absolute;
    bottom: 0;
  }
  .car {
    width: 40%;
    position: absolute;
    right: 120px;;
    bottom: 6px;
  }
  .logo {
    width: 98px;
    position: absolute;
    right: 120px;
    bottom: -140px;
    transform: translate(0,-50%);
  }
  @media (max-width: $breakpoint-md-max) {
    .select {
      width: 200px;
      position: absolute;
      bottom: 0;
    }
    .car {
      width: 45%;
      position: absolute;
      right: 100px;
    }
    .logo {
      right: 100px;
    }
  }
  @media (max-width: $breakpoint-sm-max) {
    .select {
      width: 150px;
      position: absolute;
      bottom: 0;
    }
    .car {
      width: 50%;
      position: absolute;
      right: 60px;
    }
    .logo {
      right: 70px;
    }
  }
    @media (max-width: $breakpoint-xs-max) {
      .select {
      bottom: 0px;
    }
    .car {
      display: none;
    }
    .logo {
      top: 20%;
      right: 30px;
    }
    .wrapper__top {
      height: 296px;
    }
  }
</style>