<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import react from '../assets/react.png'
import resume from '../assets/resume.png'
import cut from '../assets/cut.png'

const projectRefs = []
const activeIndex = ref(0)
let observer = null
let isMobile = ref(false)

const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

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
        hashtag:'#React #Redux #Node.js #Express #MySQL'
    },
    {
        image: resume,
        text: "以vue3 composition api實作個人履歷網站，包含首頁、經歷、作品集等頁面。",
        projectname: 'YuChen 個人履歷網站',
        frontlink: 'https://github.com/wameny10814/web',
        demolink: 'https://wameny10814.github.io/web/',
        fronttext: '前端程式碼',
        hashtag:'#Vue.js 3 #Vite #Vue Router'
       
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

    updateIsMobile();

    window.addEventListener('resize', () => {
        updateIsMobile()
    })
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
//  奇數：圖片左，文字右、偶數相反
//RWD 圖片上文字下
<template>
   
    <div class="projects">
        <div v-for="(item, index) in projects" :key="index" class="projects__cards" :ref="el => projectRefs[index] = el">
        
            <template v-if="index % 2 === 1 && isMobile==false">

                <div class="projects__item columngap">
            
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
                    <a :href="item.demolink" target="_blank" rel="noopener noreferrer">
                        <img :src="item.image" alt="" />
                    </a>
                    <div class="projects__image_mask"></div>
                        
                    </div>

                </div>
                <div class="project_tech_right">
                    <p>{{ item.hashtag }} <a :href="item.demolink" target="_blank" rel="noopener noreferrer">DEMO LINK</a></p>
                </div>
             

            </template>

            <template v-else>
           



                   <div class="projects__item columngap">
                    <div class="projects__image">
                    <a :href="item.demolink" target="_blank" rel="noopener noreferrer">
                        <img :src="item.image" alt="" />
                    </a>
                    <div class="projects__image_mask"></div>
                        
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
.projects__image_mask{
    width: 100%;
    height: 300px;
    background-color: rgba(217, 217, 217, 0.50);
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px;

}

.projects__image {
    width: 40%;
    height: 300px;
    background-color: white;
    flex-shrink: 0;
    border-radius: 10px;
    position: relative;
}
.projects__image:hover{
  transform: scale(1.1);
  transition: all 0.5s ease-in-out;

}
.projects__image:hover .projects__image_mask{
    opacity: 0;
    transition: all 0.1s ease-in-out;
    z-index: -1;
}


.projects__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
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
        background:#fff;
    padding:10px;
    width:fit-content;
     border-radius: 5px;
    
}
.project_tech a:hover{
    color:orange;
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

@media (max-width: 768px) {
    .projects__cards {
        width: 90%;
        padding: 20px;
    }

    .projects__item {
        flex-direction: column;
        text-align: center;
    }

    .projects__image,
    .projects__text {
        width: 100%;
        max-width: 100%;
    }

    .projects__image {
        height: auto;
        margin-bottom: 20px;
    }

    .columngap {
        column-gap: 2rem;
    }

    .project_tech,
    .project_tech_right {
        text-align: center;
        padding-left: 0;
        margin-top: 10px;
    }

    .projects__dots {
        right: 10px;
        top: auto;
        bottom: 10%;
        flex-direction: row;
        gap: 8px;
    }

    .dot {
        width: 10px;
        height: 10px;
    }

    .highlight {
        font-size: 1.2rem;
    }

    .codefront a,
    .codeback a {
        display: inline-block;
        margin-top: 10px;
    }
}



</style>



