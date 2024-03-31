<template>
    <div class="banner-details center">
      <img src="@/assets/img/Banner_details.jpg" alt="bunner" />
    </div>
    <div id="app">
        <section  class="blog-details center">
      
      <div class="blog-details__left" v-for="item in tags.filter(e => e.flag == true)" :key="item.id"
      >
      <h1 class="blog-details__title">
        Let’s Get Solution for Building Construction Work
      </h1>
      <img class="blog-details__img" :src="item.img" alt="" />
      <div class="blog-details__block">
        <div class="blog-details__date">
          <p class="blog__date">26 December,2022</p>
        </div>
        <div class="blog-details__breadcrumbs">
          <ul class="breadcrumbs">
            <li class="breadcrumbs__item">
              <a class="breadcrumbs__link" href="details.html">Interior</a>
            </li>
            <li class="breadcrumbs__item">
              <a class="breadcrumbs__link" href="index.html">Home</a>
            </li>
            <li class="breadcrumbs__item">
              <a class="breadcrumbs__link" href="details.html">Decore</a>
            </li>
          </ul>
        </div>
      </div>
      <p class="details-text">
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
        turpmaximus.posuere in.Contrary to popular belief.There are many
        variations of passages of Lorem Ipsum available, but the majority have
        suffered alteration in some form, by injecthumour, or randomised words
        which don't look even slightly believable.Embarrassing hidden in the
        middle of text. All the Lorem Ipsum generators on the Internet tend to
        repeat predefined chunks as necessary.
      </p>
      <div class="quote">
        <h1 class="quote__symbol">“</h1>
        <h3 class="quote__text">
          The details are not the details.<br />
          They make the design.
        </h3>
      </div>
      <div class="design">
        <h1 class="design__title">Design sprints are great</h1>
        <p class="design__text details-text">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
          turpmaximus.posuere in.Contrary to popular belief.There are many
          variations of passages of Lorem Ipsum available, but the majority
          have suffered.
        </p>
        <ul class="design__list">
          <li class="design__li details-text">
            <span class="details-text"
              >Contrary to popular belief.There are many variations of
              passages of Lorem Ipsum available, but the majority have
              suffered.</span
            >
          </li>
          <li class="design__li details-text">
            <span class="details-text"
              >Contrary to popular belief.There are many variations of
              passages of Lorem Ipsum available, but the majority have
              suffered.</span
            >
          </li>
          <li class="design__li details-text">
            <span class="details-text"
              >Contrary to popular belief.There are many variations of
              passages of Lorem Ipsum available, but the majority have
              suffered.</span
            >
          </li>
        </ul>
        <div class="subContent">
          <img class="subContent__img" src="@/assets/img/subContent.svg" alt="photo" />
          <p class="details-text">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
            turpmaximus.posuere in.Contrary to popular belief.There are many
            variations of passages of Lorem Ipsum available, but the majority
            have suffered.
          </p>
        </div>
      </div>
    </div>
  
        <div class="blog-details__right">
          <div class="tags">
            <h3 class="tags__title">Tags</h3>
          </div>
        
          <div class="tags__tag">
              <button v-for="item in tags" :key="item.id"  
              @click="newTag(item.id)"
              class="tags__btn">{{item.tag}}</button>
          </div>
  
        </div>
      </section>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
    export default {
        components: {
            HeaderComponent,
            FooterComponent,
        },
        data() {
            return { 
                tags: [
                    {
                        id: 1,
                        tag:'Kitchen',
                        img: require('@/assets/img/Kitchen_Details.svg'),
                        flag: true
                    },
                    {
                        id: 2,
                        tag:'Bedroom',
                        img: require('@/assets/img/Badroom_details.webp'),
                        flag: false
                    },
                    {
                        id: 3,
                        tag:'Building',
                        img: require('@/assets/img/Building_Details.jpeg'),
                        flag: false
                    },
                    {
                        id: 4,
                        tag:'Architecture',
                        img: require('@/assets/img/Architecture_Details.jpg'),
                        flag: false
                    },
                    {
                        id: 5,
                        tag:'Kitchen Planning',
                        img: require('@/assets/img/Kitchen_Planning_Details.jpeg'),
                        flag: false
                    },
                    {
                        id: 6,
                        tag:'Bathroom',
                        img: require('@/assets/img/Bathroom_Details.jpeg'),
                        flag: false
                    },
                ] 
            }
        },
        methods: {
            newTag(id) {
                this.tags.forEach(e => { 
                    if (e.id == id) {
                        e.flag = true
                    } else if(e.flag == true) {
                        e.flag = false
                    }
                });
            }
        },

    }
</script>

<style scoped lang="scss">
    .banner-details {
  display: flex;
  justify-content: center;
  margin-bottom: 200px;
}
.blog-details {
    display: flex;
    justify-content: center;
    margin-bottom: 96px;
    gap: 52px;
    &__left {
        display: flex;
        flex-direction: column;
        max-width: 799px;
    }
    &__img {
        margin-bottom: 46px;
    }
    &__title {
        font-size: 50px;
        font-weight: 400;
        line-height: 62.5px;
        letter-spacing: 0.02em;
        text-align: left;
        color: rgba(41, 47, 54, 1);
        margin-bottom: 21px;
    }
    &__block {
        display: flex;
        justify-content: space-between;
        .breadcrumbs {
        margin-bottom: 48px;
        padding-right: 70px;
        list-style-type: none;
        display: flex;
        justify-content: center;
        &__item:not(:last-child)::after {
            content: "/";
            padding: 0 5px;
        }
        &__link {
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0.01em;
            color: rgba(77, 80, 83, 1);
        }
        }
    }
    .details-text{
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.01em;
        text-align: left;
        color: rgba(77, 80, 83, 1);
    }
    .quote {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 144px 227px 53px 227px;
        border-radius: 50px;
        background-color: rgba(244, 240, 236, 1);
        margin-bottom: 27px;
        margin-top: 35px;
        position: relative;
        &__symbol {
            font-size: 200px;
            font-style: italic;
            // font-weight: 400;
            line-height: 250px;
            letter-spacing: 0.02em;
            text-align: center;
            color: rgba(205, 162, 116, 1);
            rotate: 180deg;
            width: 106px;
            height: 133px;
            margin: 0;
            position: absolute;
            top: 58px;

        }
        &__text {
            font-size: 25px;
            font-style: italic;
            font-weight: 400;
            line-height: 31.25px;
            letter-spacing: 0.02em;
            text-align: center;
            color: rgba(205, 162, 116, 1);
            margin: 0px;
        }
    }
    .design {
        &__title {
            font-size: 50px;
            font-weight: 400;
            line-height: 62.5px;
            letter-spacing: 0.02em;
            text-align: left;
            color: rgba(41, 47, 54, 1);
            margin-bottom: 22px;
        }
        &__text {
            margin-bottom: 24px;
        }
        &__list {
            display: flex;
            flex-direction: column;
            gap: 32px;
            padding-left: 20px;
            margin-bottom: 44px;
        }
        &__li {
            list-style-type: decimal;
        }
        li {
            color:rgba(205, 162, 116, 1);
        }
    }
    .subContent {
        &__img {
            margin-bottom: 35px;
        }
    }
    &__right {
        .tags {
            &__title {
            font-size: 25px;
            font-weight: 400;
            line-height: 31.25px;
            letter-spacing: 0.02em;
            text-align: left;
            color: rgba(41, 47, 54, 1);
            margin-bottom: 24px;
            }
            &__tag {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
            }
            &__btn {
                font-size: 18px;
                font-weight: 400;
                line-height: 22.5px;
                letter-spacing: 0.02em;
                text-align: center;
                padding: 9px 30px 9px 30px;
                gap: 10px;
                border-radius: 10px;
                background-color:rgba(244, 240, 236, 1);
                border: 0px;
            }
            &__btn:hover {
              background-color: rgba(41, 47, 54, 1);
              color: rgba(255, 255, 255, 1);
            }
        }
    }
}
</style>