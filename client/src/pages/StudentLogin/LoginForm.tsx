import "@/styles/StudentLogin/LoginForm.css";

import Btn from "@/components/common/Button.tsx";
import InputField from "@/components/common/InputField.tsx";

export default function LoginForm() {
  return (
    <form action="" className="login-form">
      <InputField
        type="email"
        id="email"
        name="email"
        label="E-mail:"
        customClass="input"
        required="true"
      />
      <InputField
        type="password"
        id="password"
        name="password"
        label="Senha:"
        customClass="input"
        required="true"
      />

      <Btn
        variant="primary"
        type="submit"
        content="Entrar"
        customClass="entrar-btn"
      />

      <p>
        Clicando em 'Entrar', você confirma que leu e concorda com os nossos{" "}
        <a href="">Termos de Uso</a> e <a href="">Políticas de Privacidade</a>.
      </p>
    </form>
  );
}
