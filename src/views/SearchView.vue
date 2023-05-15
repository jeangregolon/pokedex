<template>
  <div class="search-bar">
    <div class="container bar">
      <div class="search">
        <label>Pesquisa por nome:</label>
        <input
          type="text"
          placeholder="Digite o nome"
          v-model="searchTerm"
          class="search-input"
        />
        <span class="search-icon"><i class="fas fa-search"></i></span>
      </div>
      <div>
        <label for="itemsPerPage">Itens por página:</label>
        <select
          id="itemsPerPage"
          v-model="itemsPerPage"
          @change="changePage(1)"
          class="select-input"
        >
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="36">36</option>
        </select>
      </div>
    </div>
  </div>

  <div v-if="loading">
    <LoadingComponent />
  </div>

  <div
    v-if="!loading && filteredPokemonList.length === 0"
    className="not-found-container"
  >
    <img
      className="not-found-image"
      src="/sad-pokemon.png"
      alt="Não encontrado"
    />
    <p class="message">Nenhum Pokémon encontrado. Tente novamente.</p>
  </div>

  <div
    v-if="!loading && filteredPokemonList.length > 0"
    class="cards-container"
  >
    <router-link
      v-for="(pokemon, index) in filteredPokemonList"
      :key="index"
      :to="`/pokemon/${pokemon.name}`"
      class="router-link"
    >
      {{ pokemon.name.replace(/-/g, " ") }}
    </router-link>
  </div>

  <div class="pagination" v-if="!loading && filteredPokemonList.length">
    <button @click="changePage(1)" :disabled="currentPage === 1">
      &lt;&lt;
    </button>
    <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">
      &lt;
    </button>
    <span>Página {{ currentPage }} de {{ totalPages }}</span>
    <button
      @click="changePage(currentPage + 1)"
      :disabled="currentPage === totalPages"
    >
      &gt;
    </button>
    <button
      @click="changePage(totalPages)"
      :disabled="currentPage === totalPages"
    >
      &gt;&gt;
    </button>
  </div>
</template>

<script lang="ts">
import LoadingComponent from "@/components/LoadingComponent.vue";
import axios from "axios";
import { defineComponent } from "vue";

interface Pokemon {
  name: string;
  id: number;
}

export default defineComponent({
  data(): {
    pokemonList: Pokemon[];
    itemsPerPage: number;
    currentPage: number;
    totalPages: number;
    searchTerm: string;
    loading: boolean;
  } {
    return {
      pokemonList: [],
      itemsPerPage: 12,
      currentPage: 1,
      totalPages: 1,
      searchTerm: "",
      loading: true,
    };
  },
  mounted() {
    this.fetchPokemonList();
  },
  computed: {
    filteredPokemonList(): Pokemon[] {
      const filteredList = this.pokemonList.filter((pokemon: Pokemon) =>
        pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + Number(this.itemsPerPage);
      if (startIndex < 0 || startIndex >= filteredList.length) {
        return [];
      }
      return filteredList.slice(
        startIndex,
        Math.min(endIndex, filteredList.length)
      );
    },
  },
  methods: {
    fetchPokemonList() {
      this.loading = true;
      axios
        .get("https://pokeapi.co/api/v2/pokemon/?limit=1300")
        .then((response) => {
          this.pokemonList = response.data.results;
          this.pokemonList.sort((a: Pokemon, b: Pokemon) =>
            a.name.localeCompare(b.name)
          );
          this.totalPages = Math.ceil(
            this.pokemonList.length / this.itemsPerPage
          );
        })
        .catch((error) => {
          console.error("Erro ao fazer a solicitação: ", error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    changePage(page: number) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
  },
  components: { LoadingComponent },
});
</script>

<style scoped>
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
div.search-bar {
  background: #78a1bb;
  padding: 10px 30px;
}

.bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div.search {
  display: flex;
  align-items: center;
  position: relative;
}

label {
  margin-right: 12px;
}

div.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
}

div.pagination span {
  padding: 0 15px;
}

.router-link {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  width: 315px;
  padding: 10px 0;
  cursor: pointer;
  background-color: #ffffff;
  font-size: 1.5rem;
  text-align: center;
  margin: 10px;
  text-transform: capitalize;
  background: #f2f2f2;
}

.router-link:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  background: #e5e5e5;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1366px;
  width: 100%;
  padding: 18px 0;
  margin: 0 auto;
}

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

.not-found-container {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 32px 0;
}

.not-found-image {
  width: 200px;
  height: auto;
}

.router-link {
  text-decoration: none;
  color: black;
}

.search-input {
  border: none;
  border-radius: 4px;
  padding: 10px;
  font-size: 1rem;
  background-color: #f1f1f1;
  width: 200px;
}

.select-input {
  border: none;
  border-radius: 4px;
  padding: 10px;
  font-size: 1rem;
  background-color: #f1f1f1;
  width: 80px;
}

.select-input:focus {
  outline: none;
}

button {
  border: none;
  border-radius: 4px;
  padding: 10px 10px;
  font-size: 1rem;
  cursor: pointer;
  background-color: #4caf50;
  color: #fff;
  transition: background-color 0.3s;
  margin: 0 6px;
}

button:hover {
  background-color: #45a049;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: #888;
  cursor: pointer;
}

.search-icon:hover {
  color: #333;
}

@media (max-width: 767px) {
  .bar {
    flex-direction: column;
  }

  .search {
    margin-bottom: 12px;
  }
}
</style>
