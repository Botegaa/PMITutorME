import { createContext } from "react";
import { type UserDTO } from "@/types/UserDTO";

type RegisterContextProps = {
  formData: UserDTO;
  updateField: (field: keyof UserDTO, value: string) => void;
  resetForm: () => void;
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
};

export const RegisterContext = createContext<RegisterContextProps | null>(null);
