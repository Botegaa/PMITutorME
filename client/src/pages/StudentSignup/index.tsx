import "@/styles/StudentSignup/StudentSignup.css";

import GlassBg from "@/components/layout/GlassBg.tsx";
import SignupForm from "@/pages/StudentSignup/SignupFormSet1.tsx";
import SignupImg from "@/pages/StudentSignup/Illustration.tsx";

export default function StudentSignup() {
  return (
    <div className="signup">
      <div className="layout">
        <header>
          <h2>Registre-se</h2>
          <h1>Crie sua conta agora.</h1>
          <p>
            Já possui uma? <a href="/student-login">Entre aqui.</a>
          </p>
        </header>
        <SignupForm />
      </div>
      <SignupImg />
      <GlassBg />
    </div>
  );
}
