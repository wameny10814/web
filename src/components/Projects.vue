<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import react from '../assets/react.png'
import resume from '../assets/resume.png'
import cut from '../assets/cut.png'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'

const projectRefs = []
const activeIndex = ref(0)
let observer = null

const projects = ref([
    {
        image: react,
        text: `採用前後端分離，實作甜甜圈店商平台。功能包含首頁、頁面跳轉、商品選購、結帳、寄信客服、後台管理等。`,
        projectname: '恬圈_Redux 電商系統',
        frontlink: 'https://github.com/wameny10814/resumeredux',
        backlink: 'https://github.com/wameny10814/resumebackendpay/blob/main/routes/admin2.js',
        demolink: 'https://wameny10814.github.io/resumeredux/',
        fronttext: '前端程式碼',
        backtext: '後端程式碼',
        hashtag:'#react #redux #nodejs #express #Mysql'
    },
    {
        image: resume,
        text: "以vue3 composition api實作個人履歷網站，包含首頁、經歷、作品集等頁面。",
        projectname: 'YuChen 個人履歷網站',
        frontlink: 'https://github.com/wameny10814/resumeredux',
        demolink: 'https://wameny10814.github.io/resumeredux/',
        fronttext: '前端程式碼',
        hashtag:'#VUE3 #VITE #VUE-ROUTE'
       
    },
    {
        image: cut,
        text: "以HTML、CSS實作國家戲劇院仿切版。",
        projectname: '國家戲劇院仿切版',
        demolink: 'https://wameny10814.github.io/resume_css01/',
        hashtag:'#HTML #CSS'
    }
])

onMounted(() => {
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = projectRefs.findIndex(el => el === entry.target)
                    if (index !== -1) {
                        activeIndex.value = index
                    }
                }
            })
        },
        {
            root: null,
            threshold: 0.5, // 元素有一半進入 viewport 就算觸發
        }
    )

    projectRefs.forEach(el => {
        if (el) observer.observe(el)
    })
})

onUnmounted(() => {
    if (observer) {
        observer.disconnect()
    }
})
</script>
<template>
    <div class="projects">
        <div v-for="(item, index) in projects" :key="index" class="projects__cards" :ref="el => projectRefs[index] = el">
            <template v-if="index % 2 === 0">
                <!-- 偶數：圖片左，文字右 -->
                <div class="projects__item columngap">
                    <div class="projects__image">
                        <img :src="item.image" alt="" />
                    </div>
                    <div class="projects__text">
                        <p><span class="highlight">{{ item.projectname }}</span></p>
                        <p>{{ item.text }}</p>
                        <p class="codefront">
                            <a :href="item.frontlink" target="_blank">
                                {{ item.fronttext }}
                            </a>
                        </p>
                        <p class="codeback">
                            <a :href="item.backlink" target="_blank" rel="noopener noreferrer">
                              {{ item.backtext }}
                            </a>
                        </p>
                    </div>

                </div>
                <div class="project_tech">
                    <p>{{ item.hashtag }} <a :href="item.demolink" target="_blank" rel="noopener noreferrer">DEMO LINK</a></p>
                </div>

            </template>

            <template v-else>
                <div class="projects__item columngap">
                    <!-- 奇數：文字左，圖片右 -->
                    <div class="projects__text">
                        <p><span class="highlight">{{ item.projectname }}</span></p>
                        <p>{{ item.text }}</p>
                        <p class="codefront">
                            <a :href="item.frontlink" target="_blank">
                                {{ item.fronttext }}
                            </a>
                        </p>
                        <p class="codeback">
                            <a :href="item.backlink" target="_blank" rel="noopener noreferrer">
                                {{ item.backtext }}
                            </a>
                        </p>
                      
                    </div>
                    <div class="projects__image">
                        <img :src="item.image" alt="" />
                    </div>

                </div>

                <div class="project_tech_right">
                    <p>{{ item.hashtag }} <a :href="item.demolink" target="_blank" rel="noopener noreferrer">DEMO LINK</a></p>
                </div>

            </template>
        </div>

        <div class="projects__dots">
            <span v-for="(dot, index) in projects.length" :key="index" class="dot"
                :class="{ active: index === activeIndex }"></span>
        </div>
    </div>
</template>






<style scoped>
.projects {
    padding: 40px 20px;
    color: white;
    font-size: 16px;
    line-height: 1.6;
    position: relative;
}
.projects__cards {
    background: rgba(217, 217, 217, 0.38);
    width: 80%;
    margin: 0 auto;
    border: 1px solid #fff;
    border-radius: 10px;
    position: relative;
    margin-bottom: 60px;
    padding: 40px;
}

.projects__item {
    display: flex;
    align-items: center;
    justify-content: center;
}

.columngap {
    column-gap: 5rem;
}

.projects__image {
    width: 40%;
    height: 300px;
    background-color: white;
    flex-shrink: 0;
}

.projects__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.projects__text {
    max-width: 40%;
    width: 40%;
}
.codefront a{
    color: #fff;
   
}
.codeback a{
    color: #fff;

}
.codefront a:hover{
    color: orange;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
}
.codeback a:hover{
    color: orange;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
}
.project_tech{
    text-align: end;
}
.project_tech a{
    color: #eab59e;

    margin-left: 10px;
}
.project_tech_right{
    padding-left: 4.5rem;
}
.project_tech_right a{
    color: #eab59e;
    text-decoration: underline;
    margin-left: 10px;
}
.highlight {
font-size: 1.5rem;
}

.projects__dots {
    position: fixed;
    right: 5%;
    top: 40%;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.dot {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #f3c4a7;
    transition: background-color 0.3s;
}

.dot.active {
    background-color: orange;
}
</style>