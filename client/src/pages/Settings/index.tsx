import "@/styles/Settings/Settings.css";

import SettingsAcc from "./User Settings/SettingsAcc";
import SettingsAccSecurity from "./User Settings/SettingsAccSecurity";
import SettingsAccSupport from "./User Settings/SettingsAccSupport";
import { useParams } from "react-router-dom";

export default function Settings() {
  const { id } = useParams<{ id: string }>();

  if (id) {
    return (
      <>
        <SettingsAcc />
        <SettingsAccSecurity />
        <SettingsAccSupport />
      </>
    );
  }
}
