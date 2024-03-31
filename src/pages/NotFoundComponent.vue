<template>
    <section class="notFound">
        <div class="notFound__left">
            <h1 class="notFound__title">404</h1>
            <p class="notFound__subtitle">We are sorry, but the page
            you requested was not found</p>
            <router-link :to="linkHome" class="notFound__btn">
                Back To Home <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
            </svg>
            </router-link>
        </div>
        <div class="notFound__right">
            <img src="@/assets/img/BunnerNotFound.png" alt="banner">
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                linkHome: "/",
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
    .notFound {
        display: flex;
        justify-content: center;
        gap: 81px;
        align-items: center;
        margin-bottom: 50px;
        &__left {
            display: flex;
            flex-direction: column;
            gap: 20px;
            max-width: 569px;
            .notFound__title {
                font-size: 250px;
                font-weight: 400;
                line-height: 312.5px;
                text-align: left;
                color: rgba(205, 162, 116, 1);
            }
            .notFound__subtitle {
                font-size: 35px;
                font-weight: 400;
                line-height: 52.5px;
                letter-spacing: 0.01em;
                text-align: left;
                color: rgba(41, 47, 54, 1);
            }
            .notFound__btn {
                height: 75px;
                width: 253px;
                gap: 10px;
                border-radius: 18px;
                background: rgba(41, 47, 54, 1);
                font-size: 18px;
                font-weight: 600;
                line-height: 22.5px;
                letter-spacing: 0.02em;
                text-align: center;
                color: rgba(255, 255, 255, 1);
                display: flex;
                justify-content: center;
                align-items: center;
                box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
            }
        }

        &__right {

        }
    }
</style>