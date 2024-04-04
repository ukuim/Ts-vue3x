<template>
  <div class="main" :style="{ height: WindowHeight }">
    H1
  </div>
</template>
  
  <script setup>
const WindowHeight = window.innerHeight + "px";
</script>
  
  <style>
.main {
  margin-left: 5%;
  margin-right: 5%;
  background-image: linear-gradient(0deg, #fbc2eb 0%, #a6c1ee 100%);
}
</style>