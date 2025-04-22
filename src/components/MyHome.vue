<script setup>
import { ref, onMounted } from 'vue';
import Header from './Header.vue';

const projects = ref([
  {
    title: 'React',
    image: '../assets/react.png',
    link: 'https://wameny10814.github.io/resumeredux/'
  },
  {
    title: 'Cut the Rope',
    image: '../assets/cut.png',
    link: 'https://wameny10814.github.io/cut-the-rope/'
  },
  {
    title: 'Resume',
    image: '../assets/resume.png',
    link: 'https://wameny10814.github.io/resume_css01/'
  }
]);
const show = ref(true);

const showSkills = ref(false);
const skillSection = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        showSkills.value = true;
        observer.disconnect(); // 一旦觸發就不再觀察，避免重複
      }
    },
    {
      threshold: 0.8, // 80% 可視區出現才觸發
    }
  );

  if (skillSection.value) {
    observer.observe(skillSection.value);
  }
});




</script>
<template>
  <div>
    <section class="intro">
      <img class="avatar" src="../assets/avatar.png" alt="avatar" />
      <div class="intro-text">

        <p>Hi! I’m YuChen, <br> front-end engineer driven by the joy of discovery.</p>


        <p>
          My curiosity for the unknown guided me into the garden of front-end — where logic meets creativity, and ideas
          come to life.</p>
      </div>
    </section>
    <section class="projects">
      <h2 class="project-title">PROJECTS</h2>
      <div class="project-cards">
        <div class="project-card">
          <a href="https://wameny10814.github.io/resumeredux/">
            <img src="../assets/react.png" alt="project1" />
          </a>
        </div>
        <div class="project-card">
          <a href="https://wameny10814.github.io/resume_css01/">
            <img src="../assets/cut.png" alt="project2" />
          </a>
        </div>
        <div class="project-card">
          <a href="https://wameny10814.github.io/web/">
            <img src="../assets/resume.png" alt="project3" />
          </a>
        </div>
      </div>
    </section>
    <section class="skills" ref="skillSection">
      <h2 class="skills-title">PROFESSIONAL</h2>


      <TransitionGroup name="fade" tag="div" class="skills-grid">
        <div v-if="showSkills" key="html" class="skill-item">HTML</div>
        <div v-if="showSkills" key="css" class="skill-item">CSS</div>
        <div v-if="showSkills" key="js" class="skill-item">JavaScript</div>
        <div v-if="showSkills" key="react" class="skill-item">REACT</div>
        <div v-if="showSkills" key="vue3" class="skill-item">VUE3</div>
        <div v-if="showSkills" key="figma" class="skill-item">Figma</div>
        <div v-if="showSkills" key="node" class="skill-item">Node.js</div>
        <div v-if="showSkills" key="github" class="skill-item">GitHub</div>
      </TransitionGroup>

    </section>

    <section class="contact">
      <h2 class="contact-title">CONTACT ME</h2>

      <div class="contact-info">
        <p>E-mail: wameny10814@gmail.com</p>


        <p>GitHub: <a href="https://github.com/wameny10814">https://github.com/wameny10814</a></p>
      </div>

    </section>

  </div>




</template>

<style scoped>
.intro {
  position: relative;
  background: transparent;
  /* padding: 100px 10% 40px; */
  display: flex;
  align-items: center;
  gap: 10%;
  padding: 6%;
  color: white;
  justify-content: center;
}

.avatar {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  background: white;
  padding: 10px;
}

.intro-text p {
  font-size: 24px;
  line-height: 2;
  color: black;
}

.projects {
  background-color: rgba(217, 217, 217, 0.38);
  padding: 60px 20px;
  text-align: center;
  border-top: 1px solid #fff;
}


.project-title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 5rem;
  color: #fff;
}

.project-cards {
  display: flex;
  justify-content: space-around;
  gap: 50px;
  margin-bottom: 3rem;
}

.project-card {
  width: 300px;
  height: 200px;

}

.project-card:hover {
  transform: scale(1.2);
  transition: all 0.5s ease-in-out;
}

.project-card img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.skills-title {
  border-top: 1px solid #fff;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 5rem;
  margin-top: 0%;
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: #fff;
}

.skills {
  /* background: #6d99d1; */
  /* padding: 60px 20px; */
  text-align: center;
}

.skill-item:hover {
  background: white;
  color: orange;
  transition: all 0.3s ease;
  animation: fadeIn 0.5s ease;
  transform: scale(1.1);
}

.skills-grid {
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 200px);
  justify-content: space-around;
  gap: 30px;
  border-radius: 10%;
}

.skills-grid div {
  background: white;
  color: black;
  padding: 10px;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
}

.contact {
  background: rgba(217, 217, 217, 0.38);
  padding: 60px 30px;
  text-align: center;
  margin: 10%;
  position: relative;
  border: 1px solid #fff;
  border-radius: 10px;
}

.contact-title {
  position: absolute;
  top: -50px;
  left: 40%;
  /* color: #fff; */
  font-size: 32px;
  font-weight: bold;
  padding: 20px 40px;
  background: #fff;
  border-radius: 10px;
}

.diverder {
  border: 1px solid #fff;
}

.contact-form {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;
  flex-wrap: wrap;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 40%;
}

input,
textarea {
  padding: 10px;
  font-size: 16px;
}

button {
  padding: 10px;
  font-size: 16px;
  background: white;
  color: orange;
  border: none;
  font-weight: bold;
  cursor: pointer;
}

.contact-info {
  text-align: left;
  display: flex;
  justify-content: space-around;
}

.contact-info p {
  margin-bottom: 15px;
  color: #fff;
}

.contact-info a {
  color: #fff;
}

.contact-info a:hover {
  color: orange;
}


.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/* 淡入過場動畫 for skills-grid */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 1024px) {
  .intro {
    flex-direction: column;
    gap: 30px;
    padding: 10%;
    text-align: center;
  }

  .intro-text p {
    font-size: 20px;
  }

  .project-cards {
    flex-direction: column;
    align-items: center;
  }

  .project-card {
    width: 90%;
    height: auto;
  }

  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  .skill-item{
      margin: 0 10%;
  }

  .contact-info {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .contact-title {
    left: 25%;
    font-size: 24px;
  }

  form {
    width: 80%;
  }
}

@media (max-width: 600px) {
  .avatar {
    width: 200px;
    height: 200px;
  }

  .intro-text p {
    font-size: 18px;
  }

  .project-title,
  .skills-title,
  .contact-title {
    font-size: 24px;
    margin-bottom: 2rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .skill-item {
    font-size: 16px;
    margin: 0 10%;
  }

  .contact {
    margin: 5%;
    padding: 40px 20px;
    margin-top:30%;
  }

  .contact-title {
    left: 15%;
  }

  .contact-info p,
  .contact-info a {
    font-size: 14px;
  }
}

</style>