<template>
  <div class="header">
    <nav>
      <h1>Pokédex</h1>
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
}

nav {
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1366px;
  margin: 0 auto;
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

nav h1 {
  color: #fca311;
  font-size: 32px;
  font-weight: 900;
}
</style>
