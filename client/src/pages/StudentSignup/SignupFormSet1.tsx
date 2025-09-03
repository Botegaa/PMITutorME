import { useRegisterContext } from "@/hooks/useRegisterContext";
import { submitSignupForm } from "@/utils/registerSubmit";

import "@/styles/StudentSignup/SignupForm.css";

import Btn from "@/components/common/Button.tsx";
import InputField from "@/components/common/InputField.tsx";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const { formData, updateField, currentStep, nextStep, prevStep } =
    useRegisterContext();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const idAluno = await submitSignupForm(formData);

      if (idAluno) {
        navigate(`/settings/${idAluno}`);
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <form action="" className="signup-form">
      {currentStep == 0 && (
        <>
          <InputField
            type="text"
            id="nome"
            name="nome"
            customValue={formData.nome}
            label="Nome:"
            customClass="input"
            required="true"
            changeFn={updateField}
          />

          <InputField
            type="email"
            id="email"
            name="email"
            customValue={formData.email}
            label="E-mail:"
            customClass="input"
            required="true"
            changeFn={updateField}
          />
        </>
      )}

      {currentStep == 1 && (
        <>
          <InputField
            type="text"
            id="cpf"
            name="cpf"
            customValue={formData.cpf}
            label="CPF:"
            customClass="input"
            required="true"
            changeFn={updateField}
          />
          <div className="input-row">
            <InputField
              type="text"
              id="cidade"
              name="cidade"
              customValue={formData.cidade}
              label="Cidade:"
              customClass="input input-70"
              required="true"
              changeFn={updateField}
            />
            <InputField
              type="text"
              id="state"
              name="estado"
              customValue={formData.estado}
              label="Cidade:"
              customClass="input input-30"
              required="true"
              changeFn={updateField}
            />
          </div>
          <InputField
            type="tel"
            id="telefone"
            name="telefone"
            customValue={formData.telefone}
            label="Celular:"
            customClass="input"
            required="true"
            changeFn={updateField}
          />
        </>
      )}

      {currentStep == 2 && (
        <>
          <InputField
            type="password"
            id="senha"
            name="senha"
            customValue={formData.senha}
            label="Password:"
            customClass="input"
            required="true"
            changeFn={updateField}
          />
          <InputField
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            customValue={formData.confirmarSenha}
            label="Password:"
            customClass="input"
            required="true"
            changeFn={updateField}
          />
        </>
      )}

      {currentStep == 0 && (
        <Btn
          variant="primary"
          content="Continuar"
          customClass="registrar-btn"
          clickFn={nextStep}
        />
      )}

      {currentStep == 1 && (
        <div className="btn-row">
          <Btn
            variant="subtle"
            content="Voltar"
            customClass="registrar-btn"
            clickFn={prevStep}
          />
          <Btn
            variant="primary"
            content="Continuar"
            customClass="registrar-btn"
            clickFn={nextStep}
          />
        </div>
      )}

      {currentStep == 2 && (
        <>
          <div className="btn-row">
            <Btn
              variant="subtle"
              content="Voltar"
              customClass="registrar-btn"
              clickFn={prevStep}
            />
            <Btn
              variant="primary"
              type="submit"
              content="Criar conta"
              customClass="registrar-btn"
              clickFn={handleSubmit}
            />
          </div>
          <p>
            Clicando em 'Criar Conta', você confirma que leu e concorda com os
            nossos <a href="">Termos de Uso</a> e{" "}
            <a href="">Políticas de Privacidade</a>.
          </p>
        </>
      )}
    </form>
  );
}
