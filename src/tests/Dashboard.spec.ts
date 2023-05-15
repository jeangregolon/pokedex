import { shallowMount } from "@vue/test-utils";
import Dashboard from "../views/DashboardView.vue";

describe("Dashboard", () => {
  it("renders loading component when loading is true", () => {
    const wrapper = shallowMount(Dashboard, {
      data() {
        return {
          loading: true,
        };
      },
    });

    expect(wrapper.findComponent({ name: "LoadingComponent" }).exists()).toBe(
      true
    );
  });

  it("renders charts when loading is false", () => {
    const wrapper = shallowMount(Dashboard, {
      data() {
        return {
          loading: false,
        };
      },
    });

    expect(wrapper.find(".chart-wrapper").classes()).not.toContain("hide");
    expect(wrapper.findAll("canvas").length).toBe(3);
  });
});
