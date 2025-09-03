import { InlineIcon } from "@iconify/react";

import "@/styles/Settings/SettingsAcc.css";
import InputField from "@/components/common/InputField";
import Button from "@/components/common/Button";

export default function SettingsAcc() {
  return (
    <section className="stgs stgs-acc">
      <h2>Conta</h2>
      <hr />
      <div className="account-details stgs-row">
        <section className="user-info stgs-col">
          <div className="user-pic">
            <InlineIcon icon="ic:round-person" className="user-pic-ic" />
          </div>
          <div className="user-details stgs-col">
            <h3 className="user-name">Isabel Pichini</h3>
            <p className="user-role">Estudante</p>
          </div>

          <div className="stgs-tabs">
            <div role="tablist">
              <div
                role="tab"
                aria-selected="true"
                aria-controls="personal"
                id="tab-personal"
              >
                Informações Pessoais
              </div>
              <div
                role="tab"
                aria-selected="false"
                aria-controls="login"
                id="tab-login"
              >
                Login e Senha
              </div>
              <div
                role="tab"
                aria-selected="false"
                aria-controls="notifications"
                id="tab-notifications"
              >
                Notificações
              </div>
            </div>
          </div>
        </section>
        <hr />
        <div id="personal" role="tabpanel" aria-labelledby="tab-personal">
          <form action="" method="" className="change-info stgs-col">
            <InputField
              customClass="stgs-name"
              type="text"
              id="firstName"
              name="nome"
              label="Nome"
              defaultValue="Isabel Pichini"
            />
            <InputField
              customClass="stgs-email"
              type="email"
              id="email"
              name="email"
              label="Email"
              defaultValue="isabel@example.com"
            />
            <div className="stgs-address stgs-row">
              <InputField
                customClass="stgs-city"
                type="text"
                id="cidade"
                name="cidade"
                label="Cidade"
                defaultValue="Florianópolis"
              />
              <InputField
                customClass="stgs-state"
                type="text"
                id="estado"
                name="estado"
                label="Estado"
                defaultValue="SC"
              />
            </div>
            <InputField
              customClass="stgs-phone"
              type="tel"
              id="phone"
              name="telefone"
              label="Telefone"
              defaultValue="(48) 9 9999-9999"
            />

            <div className="stgs-row">
              <Button
                variant="subtle"
                customClass="stgs-clear"
                content="Limpar"
              />
              <Button
                variant="primary"
                type="submit"
                customClass="stgs-submit"
                content="Salvar Alterações"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
