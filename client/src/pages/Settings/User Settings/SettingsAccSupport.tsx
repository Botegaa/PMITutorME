import axios from "axios";

import Btn from "@/components/common/Button";
import "@/styles/Settings/SettingsAccSupport.css";

export default function SettingsAccSupport() {
  const deleteAcc = async () => {
    const userId = "685089415c3160b139abd659"; // aqui coloque o id do usuário atual

    try {
      const response = await axios.delete(`http://localhost:5000/api/alunos/${userId}`);
      alert(response.data.message);
      // Aqui você pode fazer logout, redirecionar, etc.
    } catch (error) {
      alert("Erro ao deletar a conta");
      console.error(error);
    }
  };

  return (
    <section className="stgs stgs-acc-support">
      <h2>Suporte</h2>
      <hr />
      <div className="stgs-row justify">
        <div className="stgs-col">
          <p className="stgs-config txt-danger">Excluir conta</p>
          <p className="stgs-detail">
            Isso deletará a sua conta do TutorMe permanentemente. Pode levar
            alguns dias.
          </p>
        </div>
        <Btn
          variant="subtle"
          icon="ic:round-arrow-forward-ios"
          clickFn={deleteAcc}
        />
      </div>
    </section>
  );
}