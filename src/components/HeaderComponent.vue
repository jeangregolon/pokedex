<template>
  <div class="header">
    <nav class="container">
      <router-link to="/" class="logo">Pokédex</router-link>
      <div class="links">
        <router-link to="/">Dashboard</router-link> |
        <router-link to="/pesquisa">Pesquisa</router-link>
      </div>
    </nav>
  </div>
</template>

<style scoped>
div.header {
  background: #14213d;
  -webkit-box-shadow: 0px 8px 18px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 8px 18px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 8px 18px 0px rgba(0, 0, 0, 0.75);
}

nav {
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #fe6f20;
  text-decoration: underline;
  font-weight: 900;
}

.logo {
  color: #fca311;
  font-size: 32px;
  font-weight: 900;
}

.logo.router-link-exact-active {
  color: #fca311;
  text-decoration: none;
}
</style>
