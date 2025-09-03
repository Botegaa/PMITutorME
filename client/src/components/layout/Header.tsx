import { InlineIcon } from "@iconify/react";
import { useTheme } from "@/hooks/useTheme.ts";
import '@/styles/layout/Header.css';

export default function Header() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <>
      <header>
        <h1>TutorMe</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/design-system">Design System</a>
            </li>
          </ul>
        </nav>
        <button onClick={toggleTheme}>
          <InlineIcon icon="ic:baseline-dark-mode" />
        </button>
      </header>
    </>
  );
}
