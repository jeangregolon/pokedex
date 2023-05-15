import { shallowMount } from "@vue/test-utils";
import SearchBar from "@/components/SearchBar.vue";

describe("SearchBar", () => {
  it("renders correctly", () => {
    const wrapper = shallowMount(SearchBar);

    expect(wrapper.find(".search-input").exists()).toBe(true);

    expect(wrapper.find("#itemsPerPage").exists()).toBe(true);

    expect(wrapper.find(".search-icon").exists()).toBe(true);
  });

  it("emits the correct events on input and select change", async () => {
    const wrapper = shallowMount(SearchBar);

    await wrapper.find(".search-input").setValue("pikachu");

    expect(wrapper.vm.$data.searchTerm).toBe("pikachu");

    await wrapper.find("#itemsPerPage").setValue("24");

    expect(wrapper.vm.$data.itemsPerPage).toBe(24);

    const changePageMethod = jest.spyOn(wrapper.vm as any, "changePage");
    await wrapper.find("#itemsPerPage").trigger("change");

    expect(changePageMethod).toHaveBeenCalledWith(1);
  });
});
