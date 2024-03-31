<template>
    <header class="header center">
        <div class="header__left">
            <router-link class="header__logo" :to="logo">
                <img class="header__img" src="@/assets/img/Logo.jpg" alt="logo">
            </router-link>
        </div>
        <div class="header__right">
            <router-link v-for="link in links" :key="link.id" :to="link.url" class="header__nav">
                {{ link.title }}
            </router-link>
        </div>
    </header>
</template>

<script>
export default {
  data() {
    return {
        logo: "/",
        links: [
            {
                id: 1,
                title: "Home",
                url: "/",
            },
            {
                id: 2,
                title: "Project",
                url: "/project",
            },
            {
                id: 3,
                title: "Blog",
                url: "/blog",
            },
        ]
    }
  },
}
</script>


<style scoped lang="scss">
    .header {
    display: flex;
    justify-content: space-around;
    margin-top: 44px;
    margin-bottom: 57px;
    &__right {
        display: flex;
        align-items: center;
        gap: 50px;
    }
    &__img {
        width: 177px;
        height: 50px;
        gap: 0px;
        opacity: 0px;

    }
    &__nav {
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        text-align: center;
        color: rgba(41, 47, 54, 1);
    }
    }
</style>
