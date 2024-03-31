<template>
    <div class="banner-details center">
      <img src="@/assets/img/BannerProjectDetails.jpg" alt="bunner" />
    </div>
    <div class="project center">
        <div class="project__content">
            <h1 class="title">{{ title }}</h1>
            <p class="subtitle">{{ subtitle1 }}</p>
            <p class="subtitle">{{ subtitle2 }}</p>
        </div> 
        <div class="swiper">
        <swiper
            :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
            }"
            :zoom="true"
            :navigation="true"
            :pagination="{
            clickable: true,
            }"
            :modules="modules"
            class="mySwiper"
        >
        <swiper-slide v-for="item in images" :key="item.id">
        <div class="swiper-zoom-container">
            <img :src="item.img" />
        </div> 
        </swiper-slide>
        </swiper>
    </div>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { mapState } from "vuex";
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './style.css';

// import required modules
import { Zoom, Navigation, Pagination } from 'swiper/modules';

export default {
    data() {
        return {
        }
    },
    components: {
        HeaderComponent,
        FooterComponent,
        Swiper,
        SwiperSlide,
    },
    computed: {
        ...mapState(["title","subtitle1","subtitle2", "images"])
    },
    setup() {
      return {
        modules: [Zoom, Navigation, Pagination],
      };
    },
}
</script>

<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.center {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
}
.banner-details {
  display: flex;
  justify-content: center;
  margin-bottom: 200px;
}
.project {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    &__content {
        display: flex;
        flex-direction: column;
        max-width: 658px;
        margin-bottom: 100px;
        .title {
            font-size: 50px;
            font-weight: 400;
            line-height: 62.5px;
            letter-spacing: 0.02em;
            text-align: left;
            color: rgba(41, 47, 54, 1);
        }
        .subtitle {
            font-size: 22px;
            font-weight: 400;
            line-height: 33px;
            letter-spacing: 0.01em;
            text-align: left;
            color: rgba(77, 80, 83, 1);
        }
    }
    .swiper {
    max-width: 1201px;
    margin-bottom: 200px;
    }
}


</style>