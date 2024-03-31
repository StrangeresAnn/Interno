<template>
    <BannerComponent :itemBlog="itemBlog"/>
    <section class="blogs center">
      <h1 class="post__title">Latest Post</h1>
      <div class="post">
        <div class="post__left">
            <img src="@/assets/img/Post.png" alt="photo" />
          </div>
          <div class="post__right">
            <h2 class="post__subtitle">
                Low Cost Latest Invented Interior Designing Ideas
              </h2>
              <p class="post__text">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
                dignissim maximus.posuere in.Contrary to popular belief.
              </p>
              <p class="post__text">
                Lorem Ipsum is not simply random text. It has roots in a piece of
                classica.
              </p>
              <div class="post__block">
                <p class="post__date">
                    26 December,2022
                </p>
                <router-link :to="linkBlogDetails" class="post__btn">
                    <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="26" cy="26.5" r="26" fill="#F4F0EC"/>
                  <path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </router-link>
              </div>
          </div>
      </div>
      
      <div class="news">
        <h1 class="news__title">Articles & News</h1>
        <ul class="blog__container">   
            <NewsComponent v-for="item in news" :key="item.id" :item="item"/>
        </ul>
      </div>
    </section>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import NewsComponent from '@/components/NewsComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue'
import BannerComponent from '@/components/BannerComponent.vue'


    export default {
        components: {
            HeaderComponent,
            NewsComponent,
            FooterComponent,
            BannerComponent,
        },
        data() {
            return {
                linkBlogDetails: "/blogDetails",
                itemBlog: 
                    {
                        img: require("@/assets/img/Banner_Blog.jpg"),
                        title: "Articles & News",
                        linkName: "Blog"
                    },
                news: [
                    {
                        id: 1,
                        img : require("@/assets/img/news1.svg"),
                        tag: "Kitchan Design",
                        text: "Let’s Get Solution For Building Construction Work",
                        date: "26 December,2022",
                    },
                    {
                        id: 2,
                        img : require("@/assets/img/news2.svg"),
                        tag: "Living Design",
                        text: "Low Cost Latest Invented Interior Designing Ideas.",
                        date: "22 December,2022 ",
                    },
                    {
                        id: 3,
                        img : require("@/assets/img/news3.svg"),
                        tag: "Interior Design",
                        text: "Best For Any Office & Business Interior Solution",
                        date: "25 December,2022",
                    },
                    {
                        id: 4,
                        img : require("@/assets/img/news4.svg"),
                        tag: "Kitchan Design",
                        text: "Let’s Get Solution For Building Construction Work",
                        date: "26 December,2022",
                    },
                    {
                        id: 5,
                        img : require("@/assets/img/news5.svg"),
                        tag: "Living Design",
                        text: "Low Cost Latest Invented Interior Designing Ideas.",
                        date: "22 December,2022",
                    },
                    {
                        id: 6,
                        img : require("@/assets/img/news6.svg"),
                        tag: "Interior Design",
                        text: "Best For Any Office & Business Interior Solution",
                        date: "25 December,2022",
                    },
                ] 
            }
        },
    }
</script>

<style scoped lang="scss">
    * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            transition: all 0.3s;
            
        }
    
    .blogs {
    .post__title {
        font-size: 50px;
        font-weight: 400;
        line-height: 62.5px;
        letter-spacing: 0.02em;
        text-align: left;
        color: rgba(41, 47, 54, 1);
        margin-bottom: 27px;
    }
    .post {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 22px;
        gap: 65px;
        border-radius: 62px;
        border: 1px solid rgba(231, 231, 231, 1);
        margin-bottom: 150px;
        &__right {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            max-width: 469px;
        }
        &__subtitle {
            font-size: 25px;
            font-weight: 400;
            line-height: 31.25px;
            letter-spacing: 0.02em;
            text-align: left;
            color: rgba(41, 47, 54, 1);
            padding-bottom: 22px;
        }
        &__text {
            font-size: 22px;
            font-weight: 400;
            line-height: 33px;
            letter-spacing: 0.01em;
            text-align: left;
            color:rgba(77, 80, 83, 1);
            padding-bottom: 41px;
        }
        &__block {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 290px;
            
        }
        &__date {
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0.01em;
            text-align: left;
            color: rgba(77, 80, 83, 1);
        }
        &__btn {
            background: none;
            border: none;
        }
    }
    }
    .news {
        &__title {
            font-size: 50px;
            font-weight: 400;
            line-height: 62.5px;
            letter-spacing: 0.02em;
            text-align: left;
            color: rgba(41, 47, 54, 1);
            margin-bottom: 30px;
        }
        .blog__container {
            display: flex;
            gap: 27px;
            flex-wrap: wrap;
            margin-bottom: 303px;
        }
    }
</style>