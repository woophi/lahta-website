<template>
  <div>
    <v-form v-model="valid" ref="form">
      <v-text-field
        label="Имя"
        v-model="name"
        :rules="nameRules"
        :counter="50"
        required
        class="input-group--focused"
        :color="color || 'primary'"
      ></v-text-field>
      <v-text-field
        label="E-mail"
        v-model="email"
        :rules="emailRules"
        required
        class="input-group--focused"
        :color="color || 'primary'"
      ></v-text-field>
      <v-text-field
        label="Сообщение"
        v-model="text"
        :rules="textRules"
        multi-line
        rows="6"
        required
        class="input-group--focused"
        :color="color || 'primary'"
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
        :color="color ? 'green darken-3' : 'info'"
        class="btn-submit"
      >
        Отправить
      </v-btn>
    </v-form>
    <v-dialog v-model="sent" class="dialog-form">
      <v-card>
        <v-card-title class="card-title-form">
          <b class="card-header">Спасибо {{name}}, за Ваше сообщение. С Вами свяжутся в ближайщее время.</b>
          <v-btn class="card-btn-absolute" @click.stop="clear"><v-icon>fa-times</v-icon></v-btn>
        </v-card-title>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'shares',
  props: ['color'],
  data() {
    return {
      valid: false,
      sent: false,
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
        axios.post('/mail.php', {
          name: this.name,
          email: this.email,
          text: this.text,
        })
          .then(
            this.sent = true,
          );
      }
    },
    clear() {
      this.sent = false;
      this.name = '';
      this.email = '';
      this.text = '';
    },
  },
};
</script>

<style lang="stylus">

form
  display flex
  flex-direction column
  min-width 250px
  width 100%

.btn-submit
  display flex
  margin auto

.dialog
  max-width 900px !important
  overflow hidden !important

.card-title-form
  justify-content space-between !important
  position relative
  padding-bottom 2rem

.card-header
  margin-right 5rem
  text-align left

.card-btn-absolute
  position absolute
  min-width 40px
  height 40px
  top 8px
  right 8px

textarea
  resize none !important
  height 200px
</style>
