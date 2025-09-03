import "@/styles/layout/Footer.css";

export default function Footer() {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} TutorMe. All rights reserved.
      </p>
      <nav>
        <ul>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms">Terms of Service</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
