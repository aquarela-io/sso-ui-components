import { addons } from "@storybook/manager-api";
import { STORY_RENDERED } from "@storybook/core-events";
import AquarelaTheme from "./AquarelaTheme";

addons.register("custom-title", (api) => {
  const setTitle = () => {
    const storyData = api.getCurrentStoryData();
    const title = storyData
      ? `${storyData.title} - ${storyData.name} ⋅ tarsila design system`
      : "tarsila design system";
    document.title = title;
  };
  setTitle();
  api.on(STORY_RENDERED, (story) => {
    setTitle();
  });
});

addons.setConfig({
  theme: AquarelaTheme,
});
