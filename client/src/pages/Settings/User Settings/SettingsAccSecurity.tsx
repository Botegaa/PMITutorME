import "@/styles/Settings/SettingsAccSecurity.css";

import InputField from "@/components/common/InputField";
import { useState } from "react";
import { type UserDTO } from "@/types/UserDTO";
import { useParams } from "react-router-dom";
import { patchUserInfo } from "@/utils/patchUserInfo";
import Btn from "@/components/common/Button";

export default function SettingsAccSecurity() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<UserDTO>({
    _id: "",
    nome: "Current Name",
    email: "",
    cpf: "",
    senha: "",
    confirmarSenha: "",
    telefone: "",
    cidade: "",
    estado: "",
    criadoEm: new Date(),
  });

  // QUANDO DER O FETCH NOS DADOS, BOTA NO TRY QUE setUser(res.data);
  // PRA SUBSTITUIR OS VALORES PADRÃO QUE EU COLOQUEI AQUI EM CIMA

  const handleFieldChange = (field: keyof UserDTO, value: string) => {
    setUser((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  if (id) {
    return (
      <section className="stgs stgs-acc-sec">
        <h2>Segurança</h2>
        <hr />

        <InputField
          type="email"
          id="email"
          name="email"
          customValue={user.email}
          label="E-mail"
          description=""
          changeFn={handleFieldChange}
        />
        <InputField
          type="password"
          id="senha"
          name="senha"
          label="Senha"
          description="Se você perder o acesso ao seu email, você poderá entrar com a senha."
          changeFn={handleFieldChange}
        />

        <Btn
          variant="primary"
          content="SALVAR"
          clickFn={async () => {
            const result = await patchUserInfo({ id: id, ...user });
            if (result.success) {
              //show ok
            } else {
              console.error(result.message);
            }
          }}
        />
      </section>
    );
  }
}
