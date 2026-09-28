import { pixelBasedPreset, type TailwindConfig } from "react-email";

export default {
  presets: [pixelBasedPreset],
  theme: {
    extend: {
      colors: {
        centreline: {
          red: "#ed1c24",
          ink: "#151515",
          soft: "#f2f1ed",
          muted: "#666666",
        },
      },
    },
  },
} satisfies TailwindConfig;

