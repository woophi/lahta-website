<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
    <div>map</div>
    <div>
      193091, Санкт-Петербург, Октябрьская наб., д. 6, лит. М, пом. 10-Н,
      ИНН 7811598377 КПП 781101001
      тел/факс +7 (812) 240-21-42
    </div>
  </div>
</template>

<script>
export default {
  name: 'contacts',
  data() {
    return {
      msg: 'Welcome to the Contacts Page',
    };
  },
};
</script>
