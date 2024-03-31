<template>
    <section class="bannerBlog center">
      <div class="bannerBlog__container">
        <img  class="bannerBlog__img" v-if="itemBlog":src="itemBlog.img" alt="Banner" />
        <img class="bannerBlog__img" v-if="itemProject" :src="itemProject.img" alt="Banner" />

        <div class="bannerBlog__intro">
          <h1 class="bannerBlog__title" v-if="itemBlog">{{itemBlog.title}}</h1>
          <h1 class="bannerBlog__title" v-if="itemProject">{{itemProject.title}}</h1>
          <ul class="breadcrumbs">
            <li class="breadcrumbs__item">
              <a class="breadcrumbs__link" href="index.html">Home</a>
            </li>
            <li class="breadcrumbs__item">
              <a class="breadcrumbs__link" href="blog.html" v-if="itemBlog">{{itemBlog.linkName}}</a>
              <a class="breadcrumbs__link" href="blog.html" v-if="itemProject">{{itemProject.linkName}}</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
</template>

<script>
    export default {
        props: {
            itemBlog: Object,
            itemProject: Object,
        },
        data() {
            return {
            }
        }, 
        methods: {
        },
         
    }
</script>

<style scoped lang="scss">
    .bannerBlog {
    display: flex;
    justify-content: center;
    margin-bottom: 200px;
    &__img {
      max-width: 1920px;
    }
    &__container {
        position: relative;
    }
    &__intro {
        position: absolute;
        top: 178px;
        left: 760px;
        padding: 41px 78px 41px 78px;
        gap: 10px;
        border-radius: 37px 37px 0px 0px;
        opacity: 0px;
        background-color:rgba(255, 255, 255, 1);
    }
    &__title {
        font-size: 50px;
        font-weight: 400;
        line-height: 62.5px;
        text-align: left;
        color: rgba(41, 47, 54, 1);
        margin: 0px;
    }
    .breadcrumbs {
        list-style-type: none;
        display: flex;
        justify-content: center;
        padding: 0px;
        &__item:not(:last-child)::after {
            content: "/";
            padding: 0 5px;
        }
        &__link {
            font-size: 22px;
            font-weight: 400;
            line-height: 33px;
            letter-spacing: 0.01em;
            color: rgba(77, 80, 83, 1);
        }
    }   
    }
</style>