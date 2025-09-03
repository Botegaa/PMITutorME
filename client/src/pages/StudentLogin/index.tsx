import "@/styles/StudentLogin/StudentLogin.css";

import GlassBg from "@/components/layout/GlassBg.tsx";
import LoginForm from "@/pages/StudentLogin/LoginForm";
import LoginImg from "@/pages/StudentLogin/Illustration.tsx";

export default function StudentLogin() {
  return (
    <div className="login">
      <LoginImg />
      <div className="layout">
        <header>
          <h2>Comece sua jornada</h2>
          <h1>Entre na sua conta.</h1>
          <p>
            Ainda não possui uma? <a href="/student-signup">Registre-se.</a>
          </p>
        </header>
      <LoginForm />
      </div>
      <GlassBg />
    </div>
  );
}
