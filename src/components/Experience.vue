<script setup>
import ChangeWise from './ChangeWise.vue';
</script>

<template>
    <ChangeWise>
        <div class="all-panels">
            <div class="panel panel-1">
                <section class="content">
                    <div class="left-section">
                        <img src="../assets/secretery.svg" alt="avatar" class="avatar" />
                        <img src="../assets/workwild.svg" alt="avatar" class="avatar" />
                        <img src="../assets/computer.svg" alt="avatar" class="avatar large" />
                    </div>
                    <div class="right-section">
                        <p class="greeting">Hey it’s my <span class="highlight">experience page</span>.</p>
                        <p class="description">Start from now and <br />slowly go back to where had I been.</p>
                    </div>
                    <div class="timeline">
                        <div class="dot"></div>
                        <div class="now-label">NOW</div>
                        <div class="line"></div>
                    </div>
                </section>
                <div class="scroll-tip">scroll to explore more</div>
            </div>
            <div class="panel panel-2">Panel 2 Content</div>
            <div class="panel panel-3">Panel 3 Content</div>
        </div>
    </ChangeWise>
</template>

<style scoped>
.all-panels {
    display: flex;
}

.panel {
    flex-shrink: 0;
    width: 100vw;
    height: 100vh;
}

.panel-1 {
    background: #de5c5c;
}

.panel-2 {
    background: #7e762e;
}

.panel-3 {
    background: #aa5c01;
}


.experience-page {
  background-color: #719ad4;
  color: white;
  height: 100vh;
  padding: 2rem;
  position: relative;
  font-family: sans-serif;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80%;
  position: relative;
}

.left-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.avatar.large {
  width: 100px;
  height: 100px;
}

.right-section {
  max-width: 500px;
}

.greeting {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.highlight {
  color: #e6b27e;
}

.description {
  font-size: 1.25rem;
  line-height: 1.6;
}

.timeline {
  position: absolute;
  right: 2rem;
  top: 2rem;
  text-align: center;
  color: white;
}

.dot {
  width: 20px;
  height: 20px;
  background-color: #ffb200;
  border-radius: 50%;
  margin: 0 auto;
}

.now-label {
  margin-top: 0.5rem;
  font-size: 1rem;
}

.line {
  width: 2px;
  height: 200px;
  background-color: #ffb200;
  margin: 1rem auto 0;
}

.scroll-tip {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.2rem;
  color: white;
}
</style>
