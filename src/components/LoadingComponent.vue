<template>
  <div className="loading-container">
    <img className="loading-image" src="/pokeball.png" alt="Carregando" />
    <p class="message">Carregando...</p>
  </div>
</template>

<style scoped>
.loading-container {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 32px 0;
}

.loading-image {
  width: 200px;
  height: auto;
  animation: rotation 5s infinite linear;
}

p.message {
  font-size: 1.5rem;
  padding-top: 12px;
}
</style>
