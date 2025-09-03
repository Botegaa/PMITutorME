import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "@/styles/DesignSystem/DesignSystem.css";

import ColorPrims from "@/pages/DesignSystem/colorPrimitives";
import ColorPalette from "@/pages/DesignSystem/ColorPalette/colorPalette";

export default function DesignSystem() {
  return (
    <>
      <Header />
      <main>
        <h1>Design System</h1>
        <section className="vars">
          <h2>Variables</h2>
          <p>
            Here are our design system variables. These variables are used
            throughout the application to maintain consistency in design.
          </p>
          <ColorPrims />
          <ColorPalette />
        </section>
      </main>
      <Footer />
    </>
  );
}
