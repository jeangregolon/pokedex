import { shallowMount } from "@vue/test-utils";
import PokemonDetails from "@/components/PokemonDetails.vue";

describe("PokemonDetails", () => {
  it("displays the loading component when loading is true", () => {
    const wrapper = shallowMount(PokemonDetails, {
      data() {
        return {
          loading: true,
        };
      },
    });

    expect(wrapper.findComponent({ name: "LoadingComponent" }).exists()).toBe(
      true
    );
    expect(wrapper.find(".pokemon-details").exists()).toBe(false);
    expect(wrapper.find(".error-container").exists()).toBe(false);
  });

  it("displays the Pokemon details when loading is false and pokemon is defined", () => {
    const pokemon = {
      name: "Pikachu",
      id: 25,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png",
      types: ["Electric"],
      abilities: ["static"],
      weight: 6,
      height: 0.4,
      stats: {
        HP: 35,
        attack: 55,
        defense: 40,
        specialAttack: 50,
        specialDefense: 50,
        speed: 90,
      },
    };

    const wrapper = shallowMount(PokemonDetails, {
      data() {
        return {
          loading: false,
          pokemon: pokemon,
        };
      },
    });

    expect(wrapper.findComponent({ name: "LoadingComponent" }).exists()).toBe(
      false
    );
    expect(wrapper.find(".pokemon-details").exists()).toBe(true);
    expect(wrapper.find(".error-container").exists()).toBe(false);

    expect(wrapper.find("h2").text()).toBe("Pikachu");
    expect(wrapper.find("img").attributes("src")).toBe(
      "https://example.com/pikachu.png"
    );
    expect(wrapper.findAll(".type").length).toBe(1);
    expect(wrapper.find(".info").text()).toContain("ID: 25");
    expect(wrapper.find(".info").text()).toContain("Tipo: Electric");
    expect(wrapper.find(".info").text()).toContain("Habilidades: static");
    expect(wrapper.find(".info").text()).toContain("Peso: 6 kg");
    expect(wrapper.find(".info").text()).toContain("Altura: 0.4 m");
    expect(wrapper.find(".stats-table").text()).toContain("HP");
    expect(wrapper.find(".stats-table").text()).toContain("35");
    expect(wrapper.find(".stats-table").text()).toContain("Ataque");
    expect(wrapper.find(".stats-table").text()).toContain("55");
    expect(wrapper.find(".stats-table").text()).toContain("Defesa");
    expect(wrapper.find(".stats-table").text()).toContain("40");
    expect(wrapper.find(".stats-table").text()).toContain("Ataque especial");
    expect(wrapper.find(".stats-table").text()).toContain("50");
    expect(wrapper.find(".stats-table").text()).toContain("Defesa Especial");
    expect(wrapper.find(".stats-table").text()).toContain("50");
    expect(wrapper.find(".stats-table").text()).toContain("Velocidade");
    expect(wrapper.find(".stats-table").text()).toContain("90");
  });

  it("displays the error message when loading is false and pokemon is undefined", () => {
    const wrapper = shallowMount(PokemonDetails, {
      data() {
        return {
          loading: false,
          pokemon: undefined,
        };
      },
    });

    expect(wrapper.findComponent({ name: "LoadingComponent" }).exists()).toBe(
      false
    );
    expect(wrapper.find(".pokemon-details").exists()).toBe(false);
    expect(wrapper.find(".error-container").exists()).toBe(true);
    expect(wrapper.find(".error-container p").text()).toBe(
      "Erro ao carregar os dados do Pokémon."
    );
  });
});
