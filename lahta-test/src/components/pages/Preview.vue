<template>
  <div id="scrolling-div" class="scrollingDiv">
    <div class="present">
      <div id="main-title" class="main-title">
        <h1 class="main-title-header">Организация внутренних инженерных систем, зданий и сооружений.</h1>
        <p class="main-title-subheader">ООО "ЛАХТА ИНЖИНИРИНГ СПБ"</p>
        <div>
          <a href="tel:+78122402142">
            <v-btn
              flat
            >
              <v-icon>fa-phone</v-icon>&nbsp;
              +7 (812) 240-21-42
            </v-btn>
          </a>
        </div>
        <div class="scroll-downs">
          <div class="mousey">
            <div class="scroller"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'preview',
  methods: {
    onScrolling() {
      const previewDiv = document.getElementById('scrolling-div');
      const titleDiv = document.getElementById('main-title');
      const promise = new Promise((resolve) => {
        if (titleDiv && previewDiv && window.scrollY > 99) {
          window.removeEventListener('scroll', this.onScrolling);
          previewDiv.classList.add('nullableDiv');
          previewDiv.classList.remove('scrollingDiv');
          titleDiv.remove();
          setTimeout(() => {
            resolve();
          }, 1500);
        }
      });
      promise
        .then(
          () => {
            previewDiv.remove();
            window.scrollTo(0, 0);
          },
        );
    },
  },
  created() {
    window.addEventListener('scroll', this.onScrolling);
  },
};
</script>

<style lang="stylus" scoped>

.scrollingDiv
  background-color #2e7bb3
  background-image url('../../assets/backgroundMain.jpg')
  background-size cover
  width 100%
  height 100vh

.nullableDiv
  height 0
  transition ease 2s
  background-color rgba(46, 123, 179, .7)

.present
  background-color rgba(46, 123, 179, .7)
  width 100%
  height 100%
  display flex
  padding 0.5rem
  flex-wrap wrap
  flex 1
  flex-grow 1
  color #fff

.scroll-downs {
  margin: auto;
  width :34px;
  height: 55px;
}
.mousey {
  width: 3px;
  padding: 10px 15px;
  height: 35px;
  border: 2px solid #fff;
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;
}
.scroller {
  width: 3px;
  height: 10px;
  border-radius: 25%;
  background-color: #fff;
  animation-name: scroll;
  animation-duration: 2.2s;
  animation-timing-function: cubic-bezier(.15,.41,.69,.94);
  animation-iteration-count: infinite;
}
@keyframes scroll {
  0% { opacity: 0; }
  10% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(15px); opacity: 0;}
}

</style>
