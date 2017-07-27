<template>
  <div id="bottom-bar" class="line-height-0-4">
    <a href="#" @click="'/profil'">
      <div id="profil">
        <p><img src="./../assets/avatar.png" alt="profil" /></p>
        <p>Profil</p>
      </div>
    </a>
    <a href="#" @click="'/programme'">
      <div id="programme">
        <p><img src="./../assets/list.png" alt="programme" /></p>
        <p>Programme</p>
      </div>
    </a>
    <a href="#" @click="'/matchs'">
      <div id="matchs">
        <p><img src="./../assets/matchs.png" alt="matchs" /></p>
        <p>Mes matchs</p>
      </div>
    </a>
    <a href="#" @click="'/creer'">
      <div id="creer">
        <p><img src="./../assets/creer.png" alt="créer" /></p>
        <p>Créer</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'nav'
}
</script>

<style>
#bottom-bar {
  border-top: 5px solid;
  border-top-color: #1ab2ff;
  z-index: 10;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  height: 235px;
  background-color: #F5F5F5;
  font-size: 45px;
  display: flex;
  justify-content: space-around;
}

#bottom-bar a:focus {
  color: #3399ff;
}
</style>