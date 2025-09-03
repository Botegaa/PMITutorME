import "@/styles/DesignSystem/ColorPalette/colorPalette.css";

import BgPalette from "@/pages/DesignSystem/ColorPalette/paletteBg.tsx";
import BorderPalette from "@/pages/DesignSystem/ColorPalette/paletteBorder";
import IconPalette from "@/pages/DesignSystem/ColorPalette/paletteIcon";
import TxtPalette from "@/pages/DesignSystem/ColorPalette/paletteTxt";
import ExamplePalette from "@/pages/DesignSystem/ColorPalette/examplePalette";

export default function ColorPalette() {
  return (
    <section className="color-palette">
      <h3>Color Palette</h3>
      <p>
        The color palette is a collection of colors derived from the color
        primitives. These colors are used for various UI elements to ensure a
        cohesive look and feel.
      </p>
      <div className="palette">
        <BgPalette />
        <BorderPalette />
        <IconPalette />
        <TxtPalette />
        <ExamplePalette />
      </div>
    </section>
  );
}
