// scrollbarPlugin.js
const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities, theme, e }) {
  const scrollbarTrackColors = theme("scrollbarTrack", {});
  const scrollbarThumbColors = theme("scrollbarThumb", {});

  const newUtilities = {};

  Object.entries(scrollbarTrackColors).forEach(([key, value]) => {
    newUtilities[`.scrollbar-track-${e(key)}`] = {
      "::-webkit-scrollbar-track": {
        background: value,
      },
    };
  });

  Object.entries(scrollbarThumbColors).forEach(([key, value]) => {
    newUtilities[`.scrollbar-thumb-${e(key)}`] = {
      "::-webkit-scrollbar-thumb": {
        background: value,
      },
    };
  });

  addUtilities(newUtilities, ["responsive", "hover"]);
});
