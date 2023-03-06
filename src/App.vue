<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import router from "./router/index"

function logout() {
  localStorage.clear();
  router.push("/")
}

</script>

<template>
  <div>
    <nav>
      <div>
        <RouterLink to="/">Авторизация</RouterLink>
        <RouterLink to="/document">Документ</RouterLink>
      </div>
      <button @click="logout" class="logout-btn">Logout</button>
    </nav>
  </div>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logout-btn {
  padding: 6px 10px;
  width: 150px;
  background-color: red;
  color: #ffffff;
  font-size: 21px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
}

nav a.router-link-exact-active {
  color: #00805f;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  color: black;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
