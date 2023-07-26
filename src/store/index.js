import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */
import benefitsIcon from '../assets/benefits-icon.svg' 
import topicalIcon from '../assets/topical-icon.svg' 
import chooseIcon from '../assets/choose-icon.svg' 
import serviceIcon from '../assets/service-icon.svg' 

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      // example
    },
    state: {
      features: [],
      benefits: [
        {
          icon: benefitsIcon,
          alt: 'benefits',
          title: 'Выгода',
          content: 'Узнайте о выгодных сервисных предложениях Nissan именно для вашего автомобиля'
        },
        {
          icon: topicalIcon,
          alt: 'topical',
          title: 'Актуальность',
          content: 'Выберите актуальные для вас сервисные предложения'
        },
        {
          icon: chooseIcon,
          alt: 'choose',
          title: 'Широкий выбор',
          content: 'Выберите дилера, который вам подходит'
        },
        {
          icon: serviceIcon,
          alt: 'service',
          title: 'Онлайн обслуживание',
          content: 'Отправьте дилеру данные о вашем автомобиле в форме удобной анкеты'
        }
      ]
    },
    actions: {
      async getFeatures(context, data) {
        const res = await fetch('https://test-task-frontend-2023.slava.digital', {
          method: 'POST',
          headers: {
            "Content-Type" : "appication/json;charset=utf-8"
          },
          body: JSON.stringify(data)
        })
        if (res.ok) {
          let result = await res.json();
          console.log(result)
          context.commit("setFeatures", result);
        }
        return res.ok;
      },
    },
    mutations: {
      setFeatures(state, data) {
        const assetsDomain = data.assets_domain
        state.features = data.features?.filter(f => f.image).map(f => (Object.assign(f, { image: `${assetsDomain}${f.image}` })))
      },
      addFeature(state, newFeature) {
        state.features.splice(1, 0, newFeature)
        console.log('state.features', state.features)
      },
    },
    getters: {
      features (state) {
        return state.features
      },
      benefits (state) {
        return state.benefits
      }
    },
    

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
