<template>
  <div id="mobile-header">
    <p class="white-color less-margin-top line-height-0-4">{{time}}</p>
    <span class="left"><img src="./../assets/programme.png" alt="nav" v-dropdown:dropdown/></span>
    <v-dropdown id="dropdown">
      <ul>
        <li>
          <a href="#"><img src="./../assets/home.png" alt="Accueil" /></a>
        </li>
        <li>
          <a href="#"><img src="./../assets/settings.png" alt="Réglages" /></a>
        </li>
        <li>
          <a href="#"><img src="./../assets/logout.png" alt="Déconnexion" /></a>
        </li>
      </ul>
    </v-dropdown>
    <span class="line-height-0-4 bold white-color" v-dropdown:dropdown2>Île-de-France</span>
    <v-dropdown id="dropdown2">
      <li>
        <a href="#">Gard</a>
      </li>
      <li>
        <a href="#">Rhônes</a>
      </li>
      <li>
        <a href="#">Ardèche</a>
      </li>
    </v-dropdown>
    <span class="right"><img src="./../assets/notification.png" alt="notification" /></span>
  </div>
</template>

<script>
export default {
  props: ['addZero'],
  data: function () {
    return {
      nav: {
        edge: 'left'
      },
      time: ''
    }
  },
  created: function () {
    let today = new Date()
    let hours = this.addZero(today.getHours())
    let mins = this.addZero(today.getMinutes())
    this.time = hours + ':' + mins
  },
  name: 'app-mobile-header'
}
</script>

<style>
#mobile-header {
  z-index: 10;
  position: fixed;
  width: 100%;
  top: 0;
  padding-top: 30px;
  max-height: 180px;
  background-color: #00ace6;
  font-size: 45px;
}
#mobile-header a {
  font-size: 35px;
}
.left {
  margin-left: 4vw;
  float: left;
}
.right {
  margin-right: 4vw;
  float: right;
}
.bold {
  font-weight: bold;
}
.white-color {
  color: white;
}
.less-margin-top {
  margin-top: -1vw;
}
</style>