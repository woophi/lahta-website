<template>
  <div>
    <h1>Онлайн заявка</h1>
    <v-form v-model="valid" ref="form">
      <v-text-field
        label="Имя"
        v-model="name"
        :rules="nameRules"
        :counter="50"
        required
        class="input-group--focused"
      ></v-text-field>
      <v-text-field
        label="E-mail"
        v-model="email"
        :rules="emailRules"
        required
        class="input-group--focused"
      ></v-text-field>
      <v-text-field
        label="Сообщение"
        v-model="text"
        :rules="textRules"
        multi-line
        rows="6"
        required
        class="input-group--focused"
      ></v-text-field>
      <v-btn
      v-if="!valid"
      disabled
      color="grey"
      class="btn-submit"
      >
        Отправить
      </v-btn>
      <v-btn
      v-else
      @click="submit"
      outline
      color="info"
      class="btn-submit"
      >
        Отправить
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'shares',
  data() {
    return {
      valid: false,
      name: '',
      nameRules: [
        (v) => !!v || 'Имя обязательно к заполнению',
        (v) => v.length <= 50 || 'Имя не должно быть больше 50 символов',
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail обязателен к заполнению',
        (v) => /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail должен быть действительным',
      ],
      text: '',
      textRules: [
        (v) => !!v || 'Пожалуйста, укажите ваше сообщение',
      ],
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post('/mail.php', {
          name: this.name,
          email: this.email,
          text: this.text,
        });
      }
    },
  },
};
</script>

<style lang="stylus">

form
  display flex
  flex-direction column
  min-width 250px
  max-width 500px
  padding 0.5rem
  margin 1rem auto

.btn-submit
  display flex
  margin auto


textarea
  resize none !important
  height 200px
</style>

