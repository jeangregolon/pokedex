<template>
  <div class="chart-wrapper">
    <div v-if="loading">
      <LoadingComponent />
    </div>
    <h1>Dashboard</h1>
    <canvas id="typeChart" ref="typeChart"></canvas>
    <canvas id="genderChart" ref="genderChart"></canvas>
    <canvas id="abilityChart" ref="abilityChart"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Chart, registerables } from "chart.js";
import axios from "axios";
import LoadingComponent from "@/components/LoadingComponent.vue";

export default defineComponent({
  data() {
    return {
      loading: true,
      gender: {
        female: 0,
        male: 0,
        genderless: 0,
      },
      type: {
        normal: 0,
        fighting: 0,
        flying: 0,
        poison: 0,
        ground: 0,
        rock: 0,
        bug: 0,
        ghost: 0,
        steel: 0,
        fire: 0,
        water: 0,
        grass: 0,
        electric: 0,
        psychic: 0,
        ice: 0,
        dragon: 0,
        dark: 0,
        fairy: 0,
      },
      ability: {
        stench: 0,
        drizzle: 0,
        speed_boost: 0,
        battle_armor: 0,
        sturdy: 0,
        damp: 0,
        limber: 0,
        sand_veil: 0,
        static: 0,
        volt_absorb: 0,
        water_absorb: 0,
        oblivious: 0,
        cloud_nine: 0,
        compound_eyes: 0,
        insomnia: 0,
        color_change: 0,
        immunity: 0,
        flash_fire: 0,
        shield_dust: 0,
        own_tempo: 0,
      },
    };
  },
  mounted() {
    this.loading = true;
    this.fetchData();
    this.loading = false;
  },
  methods: {
    async fetchGenderData(url: string): Promise<number> {
      try {
        const response = await axios.get(url);
        return Object.keys(response.data.pokemon_species_details).length;
      } catch (error) {
        console.error("Erro ao fazer a solicitação: ", error);
        return 0;
      }
    },
    async fetchPokemonData(url: string): Promise<number> {
      try {
        const response = await axios.get(url);
        return Object.keys(response.data.pokemon).length;
      } catch (error) {
        console.error("Erro ao fazer a solicitação: ", error);
        return 0;
      }
    },
    async fetchData() {
      try {
        //Gender data
        this.gender.female = await this.fetchGenderData(
          "https://pokeapi.co/api/v2/gender/1/"
        );
        this.gender.male = await this.fetchGenderData(
          "https://pokeapi.co/api/v2/gender/2/"
        );
        this.gender.genderless = await this.fetchGenderData(
          "https://pokeapi.co/api/v2/gender/3/"
        );

        //Type data
        this.type.normal = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/type/1/"
        );
        this.type.fighting = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/type/2/"
        );
        this.type.flying = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/type/3/"
        );
        this.type.poison = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/type/4/"
        );
        this.type.ground = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/type/5/"
        );
        this.type.rock = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/type/6/"
        );
        this.type.bug = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/type/7/"
        );
        this.type.ghost = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/type/8/"
        );
        this.type.steel = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/type/9/"
        );
        this.type.fire = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/type/10/"
        );
        this.type.water = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/type/11/"
        );
        this.type.grass = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/type/12/"
        );
        this.type.electric = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/type/13/"
        );
        this.type.psychic = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/type/14/"
        );
        this.type.ice = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/type/15/"
        );
        this.type.dragon = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/type/16/"
        );
        this.type.dark = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/type/17/"
        );
        this.type.fairy = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/type/18/"
        );

        //Ability data
        this.ability.stench = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/ability/1/"
        );
        this.ability.drizzle = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/ability/2/"
        );
        this.ability.speed_boost = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/ability/3/"
        );
        this.ability.battle_armor = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/ability/4/"
        );
        this.ability.sturdy = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/ability/5/"
        );
        this.ability.damp = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/ability/6/"
        );
        this.ability.limber = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/ability/7/"
        );
        this.ability.sand_veil = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/ability/8/"
        );
        this.ability.static = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/ability/9/"
        );
        this.ability.volt_absorb = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/ability/10/"
        );
        this.ability.water_absorb = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/ability/11/"
        );
        this.ability.oblivious = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/ability/12/"
        );
        this.ability.cloud_nine = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/ability/13/"
        );
        this.ability.compound_eyes = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/ability/14/"
        );
        this.ability.insomnia = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/ability/15/"
        );
        this.ability.color_change = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/ability/16/"
        );
        this.ability.immunity = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/ability/17/"
        );
        this.ability.flash_fire = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/ability/18/"
        );
        this.ability.shield_dust = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/ability/19/"
        );
        this.ability.own_tempo = await this.fetchPokemonData(
          "https://pokeapi.co/api/v2/ability/20/"
        );
      } catch (error) {
        console.error("Erro ao buscar dados: ", error);
      } finally {
        this.renderGenderChart();
        this.renderTypeChart();
        this.renderAbilityChart();
      }
    },
    renderGenderChart() {
      const ctx = this.$refs.genderChart as HTMLCanvasElement;

      Chart.register(...registerables);

      new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["Feminino", "Masculino", "Sem Gênero"],
          datasets: [
            {
              label: "Por Gênero",
              data: [
                this.gender.female,
                this.gender.male,
                this.gender.genderless,
              ],
              backgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Pokémons por Gênero",
            },
          },
        },
      });
    },
    renderTypeChart() {
      const ctx = this.$refs.typeChart as HTMLCanvasElement;

      Chart.register(...registerables);

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: [
            "Normal",
            "Fighting",
            "Flying",
            "Poison",
            "Ground",
            "Rock",
            "Bug",
            "Ghost",
            "Steel",
            "Fire",
            "Water",
            "Grass",
            "Electric",
            "Psychic",
            "Ice",
            "Dragon",
            "Dark",
            "Fairy",
          ],
          datasets: [
            {
              label: "Por Tipo",
              data: Object.values(this.type),
              backgroundColor: [
                "rgba(168,168,120,0.3)",
                "rgba(192,48,40,0.3)",
                "rgba(168,144,240,0.3)",
                "rgba(160,64,160,0.3)",
                "rgba(224,192,104,0.3)",
                "rgba(184,160,56,0.3)",
                "rgba(168,184,32,0.3)",
                "rgba(112,88,152,0.3)",
                "rgba(184,184,208,0.3)",
                "rgba(240,128,48,0.3)",
                "rgba(104,144,240,0.3)",
                "rgba(120,200,80,0.3)",
                "rgba(248,208,48,0.3)",
                "rgba(248,88,136,0.3)",
                "rgba(152,216,216,0.3)",
                "rgba(112,56,248,0.3)",
                "rgba(112,88,72,0.3)",
                "rgba(238,153,172,0.3)",
              ],
              borderColor: [
                "rgb(168,168,120)",
                "rgb(192,48,40)",
                "rgb(168,144,240)",
                "rgb(160,64,160)",
                "rgb(224,192,104)",
                "rgb(184,160,56)",
                "rgb(168,184,32)",
                "rgb(112,88,152)",
                "rgb(184,184,208)",
                "rgb(240,128,48)",
                "rgb(104,144,240)",
                "rgb(120,200,80)",
                "rgb(248,208,48)",
                "rgb(248,88,136)",
                "rgb(152,216,216)",
                "rgb(112,56,248)",
                "rgb(112,88,72)",
                "rgb(238,153,172)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: true,
              text: "Pokémons por Tipo",
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },
    renderAbilityChart() {
      const ctx = this.$refs.abilityChart as HTMLCanvasElement;

      Chart.register(...registerables);

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: [
            "Stench",
            "Drizzle",
            "Speed Boost",
            "Battle Armor",
            "Sturdy",
            "Damp",
            "Limber",
            "Sand Veil",
            "Static",
            "Volt Absorb",
            "Water Absorb",
            "Oblivious",
            "Cloud Nine",
            "Compound Eyes",
            "Insomnia",
            "Color Change",
            "Immunity",
            "Flash Fire",
            "Shield Dust",
            "Own Tempo",
          ],
          datasets: [
            {
              label: "Por Habilidade",
              data: Object.values(this.ability),
              backgroundColor: ["rgba(54, 162, 235, 0.8)"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: true,
              text: "Pokémons por Habilidade",
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },
  },
  components: { LoadingComponent },
});
</script>

<style scoped>
.chart-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

canvas {
  margin: 10px;
  border: 1px solid #ccc;
}

#genderChart {
  max-height: 500px !important;
  max-width: 500px !important;
}

h1 {
  font-size: 2rem;
  font-weight: 900;
  padding: 40px 0;
}
</style>
