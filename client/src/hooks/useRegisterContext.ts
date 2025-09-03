import { useContext } from "react";
import { RegisterContext } from "@/contexts/RegisterContext/RegisterContext";

export const useRegisterContext = () => {
  const context = useContext(RegisterContext);
  if (!context)
    throw new Error("useRegisterContext must be used within RegisterProvider");
  return context;
};
