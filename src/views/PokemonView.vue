<template>
  <div v-if="loading" class="loading-container">
    <p>Carregando...</p>
  </div>
  <div v-else-if="pokemon" class="pokemon-details container">
    <h2>{{ pokemon.name }}</h2>
    <img :src="pokemon.image" :alt="pokemon.name" />
    <div class="details-body">
      <div class="info">
        <p>ID: {{ pokemon.id }}</p>
        <div class="type-list">
          <p>Tipo:</p>
          <p v-for="type in pokemon.types" :key="type" :class="['type', type]">
            {{ type }}
          </p>
        </div>
        <p>Habilidades: {{ pokemon.abilities.join(", ") }}</p>
        <p>Peso: {{ pokemon.weight }} kg</p>
        <p>Altura: {{ pokemon.height }} m</p>
      </div>

      <div class="table">
        <table class="stats-table">
          <tbody>
            <tr>
              <td>HP</td>
              <td>{{ pokemon.stats.HP }}</td>
            </tr>
            <tr>
              <td>Ataque</td>
              <td>{{ pokemon.stats.attack }}</td>
            </tr>
            <tr>
              <td>Defesa</td>
              <td>{{ pokemon.stats.defense }}</td>
            </tr>
            <tr>
              <td>Ataque especial</td>
              <td>{{ pokemon.stats.specialAttack }}</td>
            </tr>
            <tr>
              <td>Defesa Especial</td>
              <td>{{ pokemon.stats.specialDefense }}</td>
            </tr>
            <tr>
              <td>Velocidade</td>
              <td>{{ pokemon.stats.speed }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div v-else class="error-container">
    <p>Erro ao carregar os dados do Pokémon.</p>
  </div>
</template>

<script lang="ts">
import axios from "axios";

interface Status {
  HP: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

interface Pokemon {
  name: string;
  id: number;
  image: string;
  types: string[];
  abilities: string[];
  weight: number;
  height: number;
  stats: Status;
}

export default {
  data(): {
    pokemon: Pokemon;
    loading: boolean;
  } {
    return {
      pokemon: {
        name: "",
        id: 0,
        image: "",
        types: [],
        abilities: [],
        weight: 0,
        height: 0,
        stats: {
          HP: 0,
          attack: 0,
          defense: 0,
          specialAttack: 0,
          specialDefense: 0,
          speed: 0,
        },
      },
      loading: true,
    };
  },
  mounted() {
    this.fetchPokemon();
  },
  computed: {},
  methods: {
    fetchPokemon() {
      this.loading = true;

      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.name}`)
        .then((response) => {
          let pokemon = response.data;
          this.pokemon.id = pokemon.id;
          this.pokemon.name = pokemon.name.replace(/-/g, " ");
          this.pokemon.image = pokemon.sprites.other.home.front_default;
          this.pokemon.weight = pokemon.weight;
          this.pokemon.height = pokemon.height;
          this.pokemon.types = pokemon.types.map(
            (typeObject: any) => typeObject.type.name
          );
          this.pokemon.stats = {
            HP: pokemon.stats[0].base_stat,
            attack: pokemon.stats[1].base_stat,
            defense: pokemon.stats[2].base_stat,
            specialAttack: pokemon.stats[3].base_stat,
            specialDefense: pokemon.stats[4].base_stat,
            speed: pokemon.stats[5].base_stat,
          };
          this.pokemon.abilities = pokemon.abilities.map(
            (abilitiesObj: any) => abilitiesObj.ability.name
          );
        })
        .catch((error) => {
          console.error("Erro ao fazer a solicitação: ", error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>
.loading-container,
.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.pokemon-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
}

.pokemon-details p {
  margin-bottom: 10px;
}

.details-body {
  display: flex;
  justify-content: center;
  width: 100%;
}

div.info {
  margin-right: 60px;
}

h2,
li {
  text-transform: capitalize;
}

.pokemon-details h2 {
  font-size: 2rem;
  font-weight: 900;
}

.pokemon-details img {
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
}

.error-container {
  color: red;
}

img {
  animation: floating 3s ease-in-out infinite;
}

.type-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.type {
  margin-left: 10px;
  text-transform: capitalize;
  font-weight: 900;
}

.stats-table {
  width: 100%;
  border-collapse: collapse;
}

.stats-table th {
  padding: 8px;
  text-align: left;
  background-color: #f2f2f2;
}

.stats-table td {
  padding: 8px;
  text-align: center;
  border: 1px solid #ddd;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.stat-name {
  font-weight: bold;
}

.stat-value {
  margin-top: 4px;
}

@keyframes floating {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

@media (max-width: 767px) {
  .details-body {
    flex-direction: column;
    justify-content: center;
    width: auto;
  }
}

.normal {
  color: #a8a878;
}

.fire {
  color: #f08030;
}

.water {
  color: #6890f0;
}

.electric {
  color: #f8d030;
}

.grass {
  color: #78c850;
}

.ice {
  color: #98d8d8;
}

.fighting {
  color: #c03028;
}

.poison {
  color: #a040a0;
}

.ground {
  color: #e0c068;
}

.flying {
  color: #a890f0;
}

.psychic {
  color: #f85888;
}

.bug {
  color: #a8b820;
}

.rock {
  color: #b8a038;
}

.ghost {
  color: #705898;
}

.dragon {
  color: #7038f8;
}

.dark {
  color: #705848;
}

.steel {
  color: #b8b8d0;
}

.fairy {
  color: #ee99ac;
}
</style>
