<template>
  <div class="licences">
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
    <img src="../../assets/licence1.jpg" alt="licence-1">
    <img src="../../assets/licence2.jpg" alt="licence-1">
  </div>
</template>

<script>
export default {
  name: 'licence',
  data() {
    return {
      msg: 'Welcome to the Licence Page',
    };
  },
};
</script>

<style scoped>
.licences > img{
  width: 250px;
  height: 300px;
}
</style>
