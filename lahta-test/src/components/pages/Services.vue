<template>
  <div>
    <div class="main-wrapper">
      <progressive-img  class="sxema" :src="Sxema" />
      <div class="main-card-flex">
        <div class="main-card">
          <p>
            <v-icon>fa-check</v-icon>
            вентиляция
          </p>
          <p>
            <v-icon>fa-check</v-icon>
            кондиционирование
          </p>
          <p>
            <v-icon>fa-check</v-icon>
            отопление
          </p>
          <p>
            <v-icon>fa-check</v-icon>
            водоснабжение
          </p>
          <p>
            <v-icon>fa-check</v-icon>
            автоматизация
          </p>
        </div>
      </div>
    </div>
    <div class="about-text">
      <p>ООО «ЛАХТА ИНЖИНИРИНГ СПБ» имеет большой опыт работ по организации инженерных систем промышленных зданий, крупных Бизнес Центров и специализированных объектов. Своевременная доставка материалов в сочетании с профессионализмом монтажников и инженерно-технического персонала позволяет нам выполнять работы в срок и без превышения утверждённого бюджета. Особое внимание уделяется организации СКВ в элитном и малоэтажном строительстве. Для данного направления компания привлекает к сотрудничеству производителей из Российской Федерации и  Европейского Союза и предлагает клиентам проверенные временем решения. Высокая экономичность, надёжность,  простота в использовании, компактность и низкие шумовые характеристики оборудования позволяют найти решения для самых взыскательных Заказчиков.</p>
      <p>ООО «ЛАХТА ИНЖИНИРИНГ СПБ» предлагает Заказчику услуги по аудиту выполненных внутренних инженерных сетей, оптимизации затрат и последующей эффективной эксплуатации.</p>
    </div>
  </div>
</template>

<script>
import Sxema from '@/assets/sxhema.jpg';

export default {
  name: 'services',
  data() {
    return {
      Sxema,
    };
  },
};
</script>

<style scoped lang="stylus">
.about-text
  display flex
  flex-direction column
  align-items center
  margin 1rem 3rem

.about-text > p
  display flex
  margin 1rem
  flex-wrap wrap
  text-align justify
  max-width 1000px
  min-width 250px
  border-left 5px solid #1976d2
  padding 1rem 0 1rem 24px
  font-size 18px
  font-weight 500
  box-sizing border-box

.main-wrapper
  justify-content center
  display flex
  padding 0.5rem
  flex-wrap wrap
  flex 1
  flex-grow 1

.main-card-flex
  margin 0

.sxema
  width 25%
  min-width 250px
</style>
