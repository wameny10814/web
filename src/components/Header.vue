<script setup>
// Component logic will go here
</script>

<template>
  <header class="header">
    <nav>
      <ul>
    
        <RouterLink to="/">   <li>HOME</li></RouterLink>
        <RouterLink to="/experience">   <li>EXPERIENCE</li></RouterLink>
    
     
        <li>PROJECTS</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  padding: 20px;
  position: relative;
}

nav ul {
  display: flex;
  justify-content: center;
  gap: 40px;
  list-style: none;
  padding-top: 10px;
}

nav li {
  color: white;
  font-size: 18px;
  cursor: pointer;
}

nav li.active {
  color: orange;
}
</style>


