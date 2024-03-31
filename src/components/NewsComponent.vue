<template>
    <div class="blog__list">    
        <div class="blog__box" >
            <img :src="item.img" alt="blogImg">
            <p class="blog__tag">{{item.tag}}</p>
            <h2 class="blog__title">{{item.text}}</h2>
            <div class="blog__holder">
                <p class="blog__date">{{item.date}}</p>
                <router-link :to="linkBtn" class="blog__btn">
                    <svg  width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle class="blog__btn-color" cx="26" cy="26.267" r="26" fill="#F4F0EC"/>
                    <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </router-link>
            </div>
        </div>
    </div>               
</template>

<script>
    export default {
        props: {
                    item: Object,
                },
        data() {
            return {
                linkBtn: "/blogDetails",
            }
        },
    }
</script>

<style scoped lang="scss">
.blog__list {
    max-width: 382px;
}
    .blog__box {
        border: 1px solid rgba(231, 231, 231, 1);
        border-radius: 50px ;
        padding: 21px;
        
        position: relative;
    }
    .blog__tag {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.01em;
        text-align: left;
        color: rgba(77, 80, 83, 1);
        position: absolute;
        background-color: rgba(255, 255, 255, 1);
        top: 233px;
        left: 41px;
        border-radius: 8px 8px 8px 0px;
        padding: 8px 11px 8px 11px;

    }
    .blog__title {
        font-size: 25px;
        font-weight: 400;
        line-height: 31.25px;
        letter-spacing: 0.02em;
        text-align: left;
        color: rgba(41, 47, 54, 1);
        margin: 21px 35px 30px 0px;
    }
    .blog__holder {
        display: flex;
        justify-content: space-between;
    }
    .blog__date {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.01em;
        text-align: left;
        color: rgba(77, 80, 83, 1);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .blog__btn {
        background: none;
        border: none;
    }
    .blog__box:hover .blog__btn-color {
        fill: white;
    }
    .blog__box:hover{
        background-color: rgba(244, 240, 236, 1);
    }
</style>