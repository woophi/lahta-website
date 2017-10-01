<template>
  <div class="hello">
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
    <input v-model="value" placeholder="type here">
    <p>You typed {{ value }}</p>

    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
    <br>
    <span>Picked: {{ picked }}</span>
    <br>
    <!-- Radio Buttons-->
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>

    <br>

    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>

    <br>

    <!-- Select Boxes-->
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>

    <span>Selected: {{ selected }}</span>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      value: '',
      selected: '',
      picked: '',
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
</style>
