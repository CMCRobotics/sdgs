<template>
  <div id="app">
  <nav-bar></nav-bar>

    <b-container style="margin:10px 5px">
      <transition name="slide">
        <router-view></router-view>
      </transition>
    </b-container>
    
    <b-container fluid  style="padding-top:20px;">
        <b-img left src="@/assets/images/addictlab-logo.png"></b-img>
    </b-container>
  </div>
</template>

<script>
import Vue from 'vue'
 

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import titleMixin from './mixins/titleMixin'
Vue.mixin(titleMixin)

import NavBar from '@/components/NavBar'

export default {
  name: 'app',
  title: 'SDG Stadium',
  components: {
      NavBar
  },
  data(){
    return {
      brand: "SDG"
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}
html, body {
  margin: 0;
}


</style>