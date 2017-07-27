<template>
  <div id="app">
    <app-mobile-header :addZero="addZero"></app-mobile-header>
    <div id="filters" class="flex space_around">
      <router-link @click="changeSelect('selection') " :to="'/'">
        SELECTION
      </router-link>
      <router-link @click="changeSelect('tous')" :to="'/tous'">
        TOUS
      </router-link>
    </div>
    <a href="#" class="color_blue bold" v-if="select === 'selection'">Modifier ma sélection</a>
    <p id="today">{{date}}</p>
    <router-view></router-view>
    <app-bottom-bar></app-bottom-bar>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      date: '',
      select: 'selection'
    }
  },
  created: function () {
    let today = new Date()
    let day = this.addZero(today.getDate())
    let month = this.addZero(today.getMonth())
    let year = this.addZero(today.getFullYear())
    this.date = day + '-' + month + '-' + year
  },
  methods: {
    changeSelect: function (text) {
      this.select = text
    },
    addZero: function (num) {
      if (num < 10) {
        num = '0' + num
      }
      return num
    }
  },
  name: 'app'
}
</script>

<style>
#app {
  width: 100%;
  height: auto;
  font-size: 45px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@media screen and (max-width: 1080px) {
  #filters {
    margin-top: 22vw;
    margin-bottom: 2vw;
  }
}
@media screen and (min-width: 1080px) {
  #filters {
    margin-top: 12vw;
    margin-bottom: 2vw;
  }
}
#today {
  font-size: 40px;
  text-align: left;
  padding: 1% 1% 1% 5%;
  width: 100%;
  background-color: #F2F2F2;
}
a {
  position: relative;
  -o-transition:color .2s ease-in-out;
  -ms-transition:color .2s ease-in-out;
  -moz-transition:color .2s ease-in-out;
  -webkit-transition:color .2s ease-in-out;
  /* ...and now override with proper CSS property */
  transition:color .2s ease-in-out;
  color: #808080;
  text-decoration: none;
}
a:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #1ab2ff;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}
a:focus:before {
  color: #1ab2ff;
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
a:focus {
  color: #1ab2ff;
}
.line-height-0-4 {
  line-height: 0.4;
}
.line-height-0-7 {
  line-height: 0.8;
}
.flex {
display: flex;
}
.space_around {
  justify-content: space-around;
}
.color_blue {
  color: #1ab2ff;
}
</style>
