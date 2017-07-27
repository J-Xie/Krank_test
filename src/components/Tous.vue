<template>
  <div class="select">
    <p><img class="scale" src="./../assets/maintenance.png" alt="maintenance" /></p>
    <p>
      Actualisation... 
      <v-progress-linear indeterminate></v-progress-linear>
    </p>
  </div>
</template>

<script>
export default {
  name: 'tous'
}
</script>

<style>
.scale {
  width: 100%;
  height: auto;
}
</style>