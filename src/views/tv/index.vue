<template>
  <div class="carousel">
    <div class="my-swiper"
         v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide"
             v-for="(v, k) in banners"
             :key="k">
          <img :src="require('@/assets/tv/back/' + v)"
               class="banner">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="skip">
      <router-link to="/tvMade">
        <button>进入设计您的方案</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'carousel',
  data () {
    return {
      swiperOption: {
        loop: true,
        effect: 'fade',
        fade: {
          crossFade: true
        },
        initalSlide: 0,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        speed: 1000, // 滑动速度
        mousewheel: true
      },
      banners: ['01.jpg', '02.jpg', '03.jpg']
    }
  }
}
</script>
<style lang="scss" scoped>
.carousel {
  // min-height: 700px;
  // min-width: 1200px;
  width: 100vw;
  height: 100vh;
  position: relative;
  .my-swiper {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .skip {
    position: absolute;
    left: 0;
    bottom: 10%;
    width: 100%;
    z-index: 9;
    text-align: center;
    button {
      border-radius: 20px;
      border: none;
      padding: 10px 20px;
      letter-spacing: 1px;
      color: #fff;
      background: #4183fe;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
