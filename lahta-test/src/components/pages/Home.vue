<template>
  <div class="hello">
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
    <div>Слайдер</div>
    <div>Акции: Кондиционеры из Японии от 10000</div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.form-control.error {
  border-color: #FF3333;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(255, 71, 71, 0.6);
}
</style>
