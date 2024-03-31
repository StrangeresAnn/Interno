<template>
    <section class="banner center">
        <img class="banner__img
        " src="@/assets/img/Images.jpg" alt="bannerImg">   
        <div class="banner__info">
            <h1 class="banner__title">Let Your Home <br>Be Unique</h1>
            <p class="banner__text">There are many variations of the passages of
                lorem Ipsum fromavailable, majority.</p>
            <button class="banner__btn">Get Started <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                </svg>
                </button>
        </div>
    </section>
    <section class="product center">
        <div class="product__head">
            <h1 class="product__heading">Follow Our Projects</h1>  
            <p class="product__subtitle">It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>  
        </div>
        <div class="product__container">
            <div v-for="project in projects" :key="project.id">
                <img class="product__img" :src="project.img" alt="photoKitchanModern">
                <div class="product__holder">
                    <div class="product__left">
                        <h3 class="product__title">{{ project.title }}</h3>
                        <p class="product__text">{{ project.subtitle }}</p>
                    </div>
                    <router-link :to="linkProject" class="product__btn">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
    <section class="counter">
        <div class="counter__block"> 
            <h1 class="counter__num">12</h1>
            <h3 class="counter__text">Years Of Experiance</h3>
        </div>
        <div class="counter__block"> 
            <h1 class="counter__num">85</h1>
            <h3 class="counter__text">Success Project</h3>
        </div>
        <div class="counter__block"> 
            <h1 class="counter__num">15</h1>
            <h3 class="counter__text">Active Project</h3>
        </div>
        <div class="counter__block"> 
            <h1 class="counter__num">95</h1>
            <h3 class="counter__text">Happy CUstomers</h3>
        </div>
    </section>
    <section class="blog center">
        <div class="blog__head">
            <h1 class="blog__heading">Articles & News</h1>
            <h3 class="blog__subtitle">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</h3>
        </div>
        <ul class="blog__container">
            <NewsComponent v-for="item in news.slice(0,3)" :key="item.id" :item="item"/>
            <!-- <NewsComponent/> -->

        </ul>
    </section>
</template>

<script>
import NewsComponent from '@/components/NewsComponent.vue'

    export default {
        components: {
            NewsComponent,
        },
        data() {
            return {
                linkProject: "/project",
                projects: [
                    {
                        id: 1,
                        title: "Modern Kitchan",
                        subtitle: "Decor / Artchitecture",
                        img: require("@/assets/img/kitchan1.jpg")
                    },
                    {
                        id: 2,
                        title: "Modern Kitchan",
                        subtitle: "Decor / Artchitecture",
                        img: require("@/assets/img/kitchan2.jpg")
                    },
                    {
                        id: 3,
                        title: "Modern Kitchan",
                        subtitle: "Decor / Artchitecture",
                        img: require("@/assets/img/kitchan3.jpg")
                    },
                    {
                        id: 4,
                        title: "Modern Kitchan",
                        subtitle: "Decor / Artchitecture",
                        img: require("@/assets/img/kitchan4.jpg")
                    },
                ],
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
        methods: {
            
        }
    }
</script>

<style scoped lang="scss">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: all 0.3s;
        
    }
    
    .center {
        padding-left: calc(50% - 600px);
        padding-right: calc(50% - 600px);
    }

    .banner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &__info {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: start;
        max-width: 434px;
        left: 52px;
        margin-left: calc(50% - 600px);
    }
    &__title {
        font-size: 65px;
        font-weight: 400;
        line-height: 81.25px;
        text-align: left;
        color: $colorSelect;
        margin-bottom: 18px;
    }
    &__text {
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.01em;
        text-align: left;
        color: rgba(77, 80, 83, 1);
        margin-bottom: 21px;
    }
    &__btn {
        padding: 26px 49px 26px 48px;
        display: flex;
        gap: 10px;
        border-radius: 18px;
        color: white;
        background-color: rgba(41, 47, 54, 1);
        font-size: 18px;
        font-weight: 600;
        line-height: 22.5px;
        letter-spacing: 0.02em;
        text-align: center;

    }
    }
    .product {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 96px;
        margin-bottom: 93px;
        &__head {
            max-width: 737px;
            display: flex;
            flex-direction: column;
            margin-bottom: 93px;
        }
        &__heading {
            font-size: 50px;
            font-weight: 400;
            line-height: 62.5px;
            letter-spacing: 0.02em;
            text-align: center;
            color: rgba(41, 47, 54, 1);
        }
        &__subtitle {
            font-size: 22px;
            font-weight: 400;
            line-height: 33px;
            letter-spacing: 0.01em;
            text-align: center;
            color: rgba(77, 80, 83, 1);
        }
        &__container {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            gap: 104px;
            justify-content: center;
        }
        &__img {
            max-width: 525px;
        }
        &__holder {
            margin-top: 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__btn {
            background: none;
            border: none;
        }
        &__title {
            font-size: 25px;
            font-weight: 400;
            line-height: 31.25px;
            letter-spacing: 0.02em;
            text-align: left;
            color: rgba(41, 47, 54, 1);
            
        }
        &__text {
            font-size: 22px;
            font-weight: 400;
            line-height: 33px;
            letter-spacing: 0.01em;
            text-align: left;
            color: rgba(77, 80, 83, 1);
        }
    }
    .counter {
        padding-top: 151px;
        padding-bottom: 151px;
        display: flex;
        justify-content: center;
        gap: 76px;
        background-color: rgba(244, 240, 236, 1);
        &__block {
            display: flex;
            flex-direction: column;
            align-items: center;
            border-right: 1px solid rgba(205, 162, 116, 1);
            padding-right: 76px;
        }
        &__num {
            font-size: 85px;
            font-weight: 400;
            line-height: 106.25px;
            letter-spacing: 0.02em;
            text-align: left;
            color:rgba(205, 162, 116, 1);
            margin-bottom: 16px;
        }
        &__text {
            font-size: 22px;
            font-weight: 400;
            line-height: 33px;
            letter-spacing: 0.01em;
            text-align: left;
            color: rgba(77, 80, 83, 1);
        }
    }
    .blog {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 96px;
        margin-bottom: 96px;
        &__head {
            display: flex;
            flex-direction: column;
            gap: 12px;
            align-items: center;
            margin-bottom: 52px;
            max-width: 881px;
        }
        &__heading {
            font-size: 50px;
            font-weight: 400;
            line-height: 62.5px;
            letter-spacing: 0.02em;
            text-align: center;
            color: rgba(41, 47, 54, 1);

        }
        &__subtitle {
            font-size: 22px;
            font-weight: 400;
            line-height: 33px;
            letter-spacing: 0.01em;
            text-align: center;
            color: rgba(77, 80, 83, 1);
        }
        &__container {
            display: flex;
            gap: 27px;
            flex-wrap: wrap;
            
        }
    }
</style>