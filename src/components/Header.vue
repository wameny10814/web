<script setup>
// Component logic will go here
</script>

<template>
  <header class="header">
    <nav>
      <ul>
        <li>
          <RouterLink to="/" active-class="active" class="nav-link">   HOME</RouterLink>
        </li>
        <li>
          <RouterLink to="/experience" active-class="active" class="nav-link">   EXPERIENCE</RouterLink>
        </li>
        <li>
          <RouterLink to="/projects" active-class="active" class="nav-link">   PROJECTS</RouterLink>
        </li>
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
.header a{
  text-decoration: none;
}

.nav-link {
  color: white;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
}


.active{
  color: orange;
  border-bottom: 2px solid orange;
  padding-right: 5px;
  padding-left: 5px;
}
</style>


