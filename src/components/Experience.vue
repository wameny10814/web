<script setup>
import ChangeWise from './ChangeWise.vue';
import { ref } from 'vue';
const open = ref(false);
const modalcontext = ref('');
const jobitem = ref('');
const showModal = (key) => {
  console.log(key);
  open.value = true;
  jobitem.value = key;
  switch (key) {
    case '1':
      modalcontext.value = '撰寫內部問題回報系統，將dataTables套件改用JavaScript 以點擊分頁按鈕呼叫 API 當頁資料之模式，修正頁面一次載入過多資料反應時間過長之問題。';
      break;
    case '2':
      modalcontext.value = '因應公司員工旅遊需組團進行，完成組團公告系統，設計後端資料、撰寫API至前端畫面與資料之完成，幫助員工跨部門組團';
      break;
    case '3':
      modalcontext.value = '使用 Figma 設計公司現有內部網站之 style guide，並完成畫面之切版，使內部網站畫面統一協調，減少內部員工無法理解網站使用流程而call in 資訊部之作業。';
      break;
    case '4':
      modalcontext.value = '設計流程、開發人資員工資料分析系統，利用搜尋區間及部門搜尋機制，並使用Chart JS 做資料之呈現，縮短人資人員製作報表之工作時間。';
      break;
    case '5':
      modalcontext.value = '建立公司內部網站之側邊欄選單管理系統，使用前端拖曳功能及設定該選單之名稱與路徑，使資訊部管理網站時不需進去資料庫操作。';
      break;
    case 'SCHOOL-1':
      modalcontext.value = '負責網站靜態頁面切版，使用 HTML5 與 CSS 進行語意化結構及樣式，根據國家戲劇院之網站進行切版。';
      break;
    case 'SCHOOL-2':
      modalcontext.value = '使用 MySQL 完成基礎會員資料 CRUD，並使用 node.js 連接 MySQL 資料庫，完成會員註冊、登入、修改密碼、忘記密碼、修改密碼、登出等功能。';
      break;
    case 'SCHOOL-3':
      modalcontext.value = '與團隊協作開發前後端分離之電商網站，負責前端使用 React 串接後端 API，實作會員系統相關功能；後端使用 Node.js 及 Express 架設伺服器，連接 MySQL 完成資料處理，並整合 Git 進行版本管理與協作流程。';
      break;    
    case 'Secretary-1':
      modalcontext.value = '使用 ERP 系統進行訂單處理與流程追蹤，從確認訂單內容、交期至貨物狀況，培養細緻邏輯與流程思維，強化對資訊流程的掌控能力，為日後系統設計與使用者體驗優化奠定基礎。';
      break;
    case 'Secretary-2':
      modalcontext.value = '主動與客戶、工程師、物流與行政等部門協調需求與資源，確保訂單如期完成，建立良好溝通橋樑，累積大量跨職能協作經驗，能快速理解需求並轉換為具體執行項目，為前端開發中需求釐清與跨部門合作提供優勢。';
      break;                    
    case 'Secretary-3':
      modalcontext.value = '擔任半導體展覽主辦人，獨立完成資料提交、設計廠商協調、預算控管與內部人員整合，從無到有推進整體展務流程，過程中累積溝通與專案管理能力，也養成對視覺設計、動線配置的敏感度，有助於日後網頁介面與互動設計的判斷';
      break;
  }
};
const handleOk = e => {
  open.value = false;
};

</script>

<template>
  <ChangeWise>
    <div class="all-panels">
      <div class="panel panel-1">
        <section class="content">
          <div class="left-section">
            <img src="../assets/secretery.svg" alt="avatar" class="avatar secretery" />
            <img src="../assets/workwild.svg" alt="avatar" class="avatar workwild" />
            <img src="../assets/computer.svg" alt="avatar" class="avatar computer large" />
          </div>
          <div class="right-section">
            <p class="greeting">Hey it’s my <span class="highlight">experience page</span>.</p>
            <p class="description">Timeline starts from now and <br />slowly go back to where had I been.</p>
            <p class="scroll-tip">scroll to explore more</p>
          </div>
          <div class="timeline">
            <div class="timeline-container">
              <div class="dot"></div>
              <div class="line"></div>
            </div>

            <div class="now-label">NOW</div>

          </div>
        </section>

      </div>
      <div class="panel panel-2">
        <div class="experience-timeline">

          <div class="timeline-2">
            <div class="line-2"></div>
            <div class="dot-wrapper left">
              <div class="dot"></div>
              <div class="year">2024/7</div>
            </div>
            <div class="dot-wrapper right">
              <div class="dot"></div>
              <div class="year">2023/5</div>
            </div>
          </div>

          <div class="job-info">
            <div class="job-title">
              前端工程師 <span class="emoji">👩🏻‍💻</span>
            </div>
            <div class="company">
              兆基管理顧問股份有限公司（不動產經營業 500人以上）
            </div>
            <div class="job-tech"> 主要技術：Larevel 、JavaScript 、jQuery</div>
            <ul class="job-tasks">
              <a-button @click="showModal('1')">• 內部問題回報系統</a-button>
              <a-button @click="showModal('2')">• 完成組團公告系統</a-button>
              <a-button @click="showModal('3')">• 設計內部網站之 style guid</a-button>
              <a-button @click="showModal('4')">• 設計、開發人資員工資料分析系統</a-button>
              <a-button @click="showModal('5')">• 建立內部網站之側邊欄選單管理</a-button>
            </ul>
          </div>


          <div>
            <a-modal v-model:open="open" title="詳細內容" @ok="handleOk">
              <p>{{ modalcontext }}</p>
            </a-modal>
          </div>
        </div>
      </div>
      <div class="panel panel-3">
        <div class="experience-timeline">

          <div class="timeline-2">
            <div class="line-2"></div>
            <div class="dot-wrapper left">
              <div class="dot"></div>
              <div class="year">2022/8</div>
            </div>
            <div class="dot-wrapper right">
              <div class="dot"></div>
              <div class="year">2022/3</div>
            </div>
          </div>

          <div class="job-info">
            <div class="job-title">
              前端工程師養成班 學員 <span class="emoji">👩🏻‍💻</span>
            </div>
            <div class="company">
              資展國際股份有限公司（電腦軟體服務業 30~100人）
            </div>
            <div class="job-tech"> 主要技術：：HTML 、CSS 、JavaScript 、jQuery、React、node.js、MySQL</div>
            <ul class="job-tasks">
              <a-button @click="showModal('SCHOOL-1')">• 完成 HTML、CSS 靜態切版網站</a-button>
              <a-button @click="showModal('SCHOOL-2')">• 使用 MySQL 完成基礎會員資料 CRUD</a-button>
              <a-button @click="showModal('SCHOOL-3')">• 開發 React 前端及 Node.js 後端之甜甜圈電商網站</a-button>
            </ul>
          </div>


          <div>
            <a-modal v-model:open="open" title="詳細內容" @ok="handleOk">
              <p>{{ modalcontext }}</p>
            </a-modal>
          </div>
        </div>
      </div>
      <div class="panel panel-4">
        <div class="experience-timeline">

          <div class="timeline-2">
            <div class="line-2"></div>
            <div class="dot-wrapper left">
              <div class="dot"></div>
              <div class="year">2022/3</div>
            </div>
            <div class="dot-wrapper right">
              <div class="dot"></div>
              <div class="year">2020/3</div>
            </div>
          </div>

          <div class="job-info">
            <div class="job-title">
              業務祕書 <span class="emoji">👩‍💼</span>
            </div>
            <div class="company">
              資騰科技股份有限公司（其他半導體相關業 100~500人）
            </div>
            <div class="job-tech">主要技術：ERP 系統、EXCEL報表管理、WORD、PPT</div>
            <ul class="job-tasks">
              <a-button @click="showModal('Secretary-1')">• 以使用者角度處理訂單流程，強化邏輯與細節掌控力</a-button>
              <a-button @click="showModal('Secretary-2')">• 跨部門溝通協作，提升團隊協作與需求整合經驗</a-button>
              <a-button @click="showModal('Secretary-3')">• 獨立主導展覽專案，培養專案管理與視覺溝通經驗</a-button>
            </ul>
          </div>


          <div>
            <a-modal v-model:open="open" title="詳細內容" @ok="handleOk">
              <p>{{ modalcontext }}</p>
            </a-modal>
          </div>
        </div>
      </div>
    </div>
  </ChangeWise>
</template>

<style scoped>
.all-panels {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}

.panel {
  flex-shrink: 0;
  width: 100vw;
  /* height: 100vh; */
  scroll-snap-align: start;
}
/* 
.panel-1 {
  background: #719BD5;
}

.panel-2 {
  background: #719BD5;
}

.panel-3 {
  background: #719BD5;
} */


.experience-page {
  /* background-color: #719ad4; */
  color: white;
  height: 100vh;
  padding: 2rem;
  position: relative;
  font-family: sans-serif;
}

.content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80%;
  position: relative;
  align-content: stretch;
}

.left-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.secretery {
  position: absolute;
  top: -8rem;
  left: -5rem;
}

.workwild {
  position: absolute;
  top: -3rem;
  left: 10rem;
}

.computer {
  position: absolute;
  top: 8rem;
  left: 0rem;
}



.right-section {
  max-width: 40%;
  width: 40%;
}

.greeting {
  font-size: 32px;
  margin-bottom: 1rem;
  color: #fff;
}

.highlight {
  color: #e6b27e;
}

.description {
  font-size: 32px;
  line-height: 1.6;
  color: #fff;
}

.scroll-tip {
  font-size: 32px;
  line-height: 1.6;
  color: white;
  animation: scroll-tip 3s ease-in-out infinite;
  margin-top: 10rem;
}

@keyframes scroll-tip {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(5px);
  }
}

.timeline {
  position: absolute;
  right: 0;
  top: 2rem;
  text-align: center;
  color: white;
}

.timeline-container {
  position: relative;
  display: flex;
  gap: 0;
  align-items: center;
}

.dot {
  width: 50px;
  height: 50px;
  background-color: #ffb200;
  border-radius: 50%;
  margin: 0 auto;
}

.now-label {
  margin-top: 1rem;
  font-size: 32px;
  font-weight: 600;
  text-align: left;
}

.line {
  width: 10vw;
  height: 2px;
  background-color: #ffb200;
  display: block;

}

/* //panel-2 樣式 */
.experience-timeline {
  /* background: #719BD5; */
  color: white;
  font-family: sans-serif;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
}


.timeline-2 {
  position: relative;
  height: 2px;
  background-color: #aaa;
  margin: 3.5rem 0;
}

.line-2 {
  width: 100%;
  height: 2px;
  background-color: #aaa;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.dot-wrapper {
  position: absolute;
  top: -1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dot-wrapper.left {
  left: 0;
}

.dot-wrapper.right {
  right: 0;
}


.year {

  margin-top: 1rem;
  font-size: 32px;
  font-weight: 600;
  text-align: left;
  padding: 0 3rem;
}

.job-info {
  margin-top: 6rem;
  text-align: center;
}

.job-title {
  font-size: 32px;
  color: #ffb200;
  margin-bottom: 1.5rem;
}

.company {
  font-size: 28px;
  margin-bottom: 1.5rem;
}

.job-tech {
  font-size: 28px;
  color: #fff;
  text-align: center;
}

.job-tasks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  list-style: none;
  padding: 0;
  margin: 3rem;
  margin-top: 5rem;
}

.job-tasks a-button {
  background: white;
  color: black;
  padding: 1rem 1rem;
  border-radius: 999px;
  font-size: 0.9rem;
}

.job-tasks a-button:hover {
  background: white;
  color: orange;
  transition: all 0.3s ease;
  animation: fadeIn 0.5s ease;
  transform: scale(1.1);
  cursor: pointer;
}
</style>