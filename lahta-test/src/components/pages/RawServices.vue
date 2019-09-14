<template>
  <div class="row dark-accent">
    <div class="cards-column">
        <div class="card-container dark-aa mt-2">
            <div class="card-content white-text">Разрабатываем оптимальную схему доставки груза «от двери до двери»</div>
        </div>
        <div class="card-container white-back">
            <div class="card-img">
                <img :src="Track" class="img" alt="Logistics image">
            </div>
            <div class="card-content">Информируем о местонахождении груза</div>
        </div>
    </div>
    <div class="cards-column">
        <div class="card-container white-back">
            <div class="card-img">
                <img :src="Docs" class="img" alt="Logistics image">
            </div>
            <div class="card-content">Оформляем транспортные и таможенные документы</div>
        </div>
        <div class="card-container white-back mt-2">
            <div class="card-content">Хранение сыпучих грузов, охлажденных товаров</div>
        </div>
        <div class="card-container white-back mt-2">
            <div class="card-content">Хранение при высокой заморозке</div>
        </div>
        <div class="card-container white-back mt-2">
            <div class="card-content">Хранение грузов небольших объемов</div>
        </div>
    </div>
    <div class="cards-column">
        <div class="card-container green-color mt-2">
            <div class="card-content white-text">Гарантируем качество и надежность предоставляемых услуг</div>
        </div>
        <div class="card-container white-back">
            <div class="card-img">
                <img :src="Gruz" class="img" alt="Logistics image">
            </div>
            <div class="card-content">Осуществляем погрузочно-разгрузочные работы</div>
        </div>
    </div>
  </div>
</template>

<script>
import Track from '@/assets/track.png';
import Gruz from '@/assets/gruz.png';
import Docs from '@/assets/docs.png';

export default {
  name: 'rawServices',
  metaInfo: {
    title: 'LAHTA SPB',
    titleTemplate: '%s | Широкий спектр услуг | Логистика. Поставки ингредиентов пищевой и парфюмерной промышленности.',
    meta: [
      { name: 'description', content: 'LAHTA SPB предоставляет логистические услуги по РФ, производим доставку грузов из ЕС и КНР.' },
      { name: 'keywords', content: 'доставки груза «от двери до двери»; местонахождение груза; транспортные и таможенные документы; качество и надежность' },
    ],
  },
  data() {
    return {
      Track,
      Gruz,
      Docs
    };
  },
};
</script>

<style scoped lang="stylus">
.card-container
    width: 100%;
    border-radius: .5rem;
    display: inline-block;
    color: #16141A;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    position: relative;
    margin-bottom: 2rem;
    margin-top: 2rem;
    background-color  #fff;
.card-img
    max-height 282px
    position: relative;
    overflow: hidden;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: -2rem;
    border-radius: .5rem;
    box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
.card-content
    padding: 1rem 2rem;
    font-size 18px
    font-weight 500
    text-align left
.img
    max-width: 100%;
    max-height: 100%;
    align-self: center;
    display: flex;
    object-fit: cover;
    width 100%
.cards-column
    width: 20%;
    margin: 0 1rem;
    display flex
    flex-direction column
    flex-wrap wrap
    min-width 320px
.row
    display: flex;
    flex-wrap: wrap;
    height 100%
    width 100%
    min-height calc(100vh - 90px)
    justify-content center
.box
  display: flex;
  overflow: hidden;
  border-radius: 6px
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  margin-bottom 2rem
  transition .2s ease-in-out
  &:hover
    transform scale(1.05)
</style>
