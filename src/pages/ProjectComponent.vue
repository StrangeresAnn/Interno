<template>
    <!-- <BannerComponent :itemProject="itemProject"/>
    <section class="projects center">
        <div class="projects__categories">
            <button class="projects__btn" v-for="category in categories" :key="category.id" @click="newProjects(category.title)">{{ category.title }}</button>
        </div>
        <div class="projects__content">
            <div class="projects__box" v-for="project in newArr" :key="project.id">
                <img class="projects__img" :src="project.img" alt="img">
                <div class="projects__container">
                    <div class="projects__left">
                        <h3 class="projects__title">{{ project.title }}</h3>
                        <p class="projects__subtitle">{{ project.subtitle }}</p>
                    </div>
                    <router-link :to="linkProjectDetails" class="projects__right">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </router-link>
                </div>
            </div>
            
        </div>

    </section> -->
    <BannerComponent :itemProject="itemProject"/>
    <section class="projects center">
        <div class="projects__categories">
            <button class="projects__btn" v-for="category in categories" :key="category.id" @click="newProjects(category.title)">{{ category.title }}</button>
        </div>
        <div class="projects__content">
            <div class="projects__box" v-for="project in paginatedProducts" :key="project.id">
                <img class="projects__img" :src="project.img" alt="img">
                <div class="projects__container">
                    <div class="projects__left">
                        <h3 class="projects__title">{{ project.title }}</h3>
                        <p class="projects__subtitle">{{ project.subtitle }}</p>
                    </div>
                    <router-link :to="linkProjectDetails" class="projects__right">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </router-link>
                </div>
            </div> 
        </div>
        <div v-if="totalPages > 1" class="paginated">    
            <router-link v-for="pageNumber in totalPages" :key="pageNumber" :to="getPageLink(pageNumber)" class="paginatedProducts">
            <span>0{{ pageNumber }}</span>
            </router-link>  
        </div>
    </section>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import BannerComponent from '@/components/BannerComponent.vue'

    export default {
       components: {
        HeaderComponent,
        FooterComponent,
        BannerComponent
       },
       data() {
        return {
            linkProjectDetails: "/projectDetails",
            arrProjects: [],
            itemProject: {
                    img: require("@/assets/img/Banner_Project.jpg"),
                    title: "Our Project",
                    linkName: "Project"
            },
            categories: [
                {
                    id: 1,
                    title: "Bathroom",
                    flag: false,
                },
                {
                    id: 2,
                    title: "Bed Room",
                    flag: true,
                },
                {
                    id: 3,
                    title: "Kitchan",
                    flag: false,
                },
                {
                    id: 4,
                    title: "Living Area",
                    flag: false,
                },
            ],
            projects: [
                {
                    id: 1,
                    type: "Bed Room",
                    img: require("@/assets/img/BedRoom1.png"),
                    title: "Minimal Bedroom",
                    subtitle: "Decor / Artchitecture",
                },
                {
                    id: 2,
                    type: "Bed Room",
                    img: require("@/assets/img/BedRoom2.png"),
                    title: "Minimal Bedroom",
                    subtitle: "Decor / Artchitecture",
                },
                {
                    id: 3,
                    type: "Bed Room",
                    img: require("@/assets/img/BedRoom3.png"),
                    title: "Classic Minimal Bedroom",
                    subtitle: "Decor / Artchitecture",
                },
                {
                    id: 4,
                    type: "Bed Room",
                    img: require("@/assets/img/BedRoom4.png"),
                    title: "Modern Bedroom",
                    subtitle: "Decor / Artchitecture",
                },
                {
                    id: 5,
                    type: "Bed Room",
                    img: require("@/assets/img/BedRoom5.png"),
                    title: "Minimal Bedroom table",
                    subtitle: "Decor / Artchitecture",
                },
                {
                    id: 6,
                    type: "Bed Room",
                    img: require("@/assets/img/BedRoom6.png"),
                    title: "System Table",
                    subtitle: "Decor / Artchitecture",
                },
                {
                    id: 7,
                    type: "Bed Room",
                    img: require("@/assets/img/BedRoom7.png"),
                    title: "Modern Medroom",
                    subtitle: "Decor / Artchitecture",
                },
                {
                    id: 8,
                    type: "Bed Room",
                    img: require("@/assets/img/BedRoom8.png"),
                    title: "Modern Bedroom",
                    subtitle: "Decor / Artchitecture",
                },
                {
                    id: 9,
                    type: "Bathroom",
                    img: require("@/assets/img/BedRoom1.png"),
                    title: "Minimal Bedroom",
                    subtitle: "Decor / Artchitecture",
                },
                {
                    id: 10,
                    type: "Bathroom",
                    img: require("@/assets/img/BedRoom2.png"),
                    title: "Minimal Bedroom",
                    subtitle: "Decor / Artchitecture",
                },
                {
                    id: 11,
                    type: "Bathroom",
                    img: require("@/assets/img/Bathroom_Details.jpeg"),
                    title: "Classic Minimal Bedroom",
                    subtitle: "Decor / Artchitecture",
                },
                {
                    id: 12,
                    type: "Kitchan",
                    img: require("@/assets/img/kitchan2.jpg"),
                    title: "Minimal Bedroom",
                    subtitle: "Decor / Artchitecture",
                },
                {
                    id: 13,
                    type: "Kitchan",
                    img: require("@/assets/img/kitchan1.jpg"),
                    title: "Classic Minimal Bedroom",
                    subtitle: "Decor / Artchitecture",
                },
                {
                    id: 14,
                    type: "Living Area",
                    img: require("@/assets/img/BedRoom5.png"),
                    title: "Minimal Bedroom table",
                    subtitle: "Decor / Artchitecture",
                },
                {
                    id: 15,
                    type: "Living Area",
                    img: require("@/assets/img/BedRoom6.png"),
                    title: "System Table",
                    subtitle: "Decor / Artchitecture",
                },
                {
                    id: 16,
                    type: "Living Area",
                    img: require("@/assets/img/BedRoom7.png"),
                    title: "Modern Medroom",
                    subtitle: "Decor / Artchitecture",
                },
                {
                    id: 17,
                    type: "Kitchan",
                    img: require("@/assets/img/kitchan4.jpg"),
                    title: "Classic Minimal Bedroom",
                    subtitle: "Decor / Artchitecture",
                },
                {
                    id: 18,
                    type: "Bed Room",
                    img: require("@/assets/img/BedRoom1.png"),
                    title: "Minimal Bedroom",
                    subtitle: "Decor / Artchitecture",
                },
                {
                    id: 19,
                    type: "Bed Room",
                    img: require("@/assets/img/BedRoom2.png"),
                    title: "Minimal Bedroom",
                    subtitle: "Decor / Artchitecture",
                },
                {
                    id: 20,
                    type: "Bed Room",
                    img: require("@/assets/img/BedRoom3.png"),
                    title: "Classic Minimal Bedroom",
                    subtitle: "Decor / Artchitecture",
                },
                {
                    id: 21,
                    type: "Bed Room",
                    img: require("@/assets/img/BedRoom4.png"),
                    title: "Modern Bedroom",
                    subtitle: "Decor / Artchitecture",
                },
                {
                    id: 22,
                    type: "Bed Room",
                    img: require("@/assets/img/BedRoom5.png"),
                    title: "Minimal Bedroom table",
                    subtitle: "Decor / Artchitecture",
                },
            ],
            itemsPerPage: 8,
        }
       },
       methods: {
            newProjects(category) {
                this.categories.forEach(e => { 
                    if (e.title == category) {
                        e.flag = true
                    } else if(e.flag == true) {
                        e.flag = false
                    }
                });
            },
            getCurrentPageNumber() {
                const pageNumberParam = parseInt(this.$route.params.pageNumber); 
                return isNaN(pageNumberParam) || pageNumberParam < 1 ? 1 : pageNumberParam;
            },
            getPageLink(pageNumber) {
                return `/project/${pageNumber}`
            }
       },
       computed: {
            newArr(){
                const category = this.categories.find(e => e.flag===true);
                return this.projects.filter(el => el.type === category.title);
            },
            totalPages() {
                return Math.ceil(this.newArr.length / this.itemsPerPage);
            },  
            paginatedProducts() {
                const arr = this.newArr;
                const pageNumber = this.getCurrentPageNumber();
                const startIndex = (pageNumber - 1) * this.itemsPerPage;
                const endIndex = startIndex + this.itemsPerPage;
                return arr.slice(startIndex, endIndex);
            }
       }
    }
</script>

<style scoped lang="scss">
    .center {
        padding-left: calc(50% - 600px);
        padding-right: calc(50% - 600px);
    }
    .projects {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 200px;
        &__categories {
            margin-bottom: 61px;
            display: flex;
            justify-content: center;
            gap: 10px;
            border-radius: 18px;
            border: 1px solid rgba(205, 162, 116, 1);
            max-width: 880px;
            .projects__btn {
            background: none;
            border: none;
            padding: 26px 56px;
            color:rgba(41, 47, 54, 1);
            font-size: 18px;
            font-weight: 600;
            line-height: 22.5px;
            letter-spacing: 0.02em;
            text-align: center;
        }
        .projects__btn:hover {
            background: rgba(205, 162, 116, 1);
            border-radius: 18px;
            color:rgba(255, 255, 255, 1);
        }
        }
        &__content {
            margin-bottom: 61px;
            column-count: 2;
            .projects__box {
                page-break-inside: avoid;
                break-inside: avoid;
            }
            .projects__img {
                max-width: 586px;
            }
            .projects__container {
                display: flex;
                justify-content: space-between;
                margin: 28px 0px 39px 0px;
            }
            .projects__left {
                display: flex;
                flex-direction: column;
                .projects__title {
                    margin: 0px;
                    font-size: 25px;
                    font-weight: 400;
                    line-height: 31.25px;
                    letter-spacing: 0.02em;
                    text-align: left;
                    color: rgba(41, 47, 54, 1);
                }
                .projects__subtitle {
                    margin: 0px;
                    font-size: 22px;
                    font-weight: 400;
                    line-height: 33px;
                    letter-spacing: 0.01em;
                    text-align: left;
                    color: rgba(77, 80, 83, 1);

                }
            }
            .projects__right {
                background: none;
                border: none;

            }
        }
        

    }
    .paginated {
        margin-bottom: 200px;
    }
    .paginatedProducts {
        color: rgba(41, 47, 54, 1);
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        text-align: left;
        border: 1px solid rgba(205, 162, 116, 1);
        border-radius: 50%;
        padding: 16px 15px 14px 17px;
        margin: 10px;
    }
    .paginatedProducts:hover {
        border: none;
        background-color: rgba(244, 240, 236, 1);

    }
</style>