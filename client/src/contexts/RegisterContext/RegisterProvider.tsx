import { useState } from "react";
import { type UserDTO } from "@/types/UserDTO";
import { RegisterContext } from "./RegisterContext";

const defaultValues: UserDTO = {
  id: "",
  name: "",
  cpf: "",
  email: "",
  password: "",
  confirmPassword: "",
  phone: "",
  city: "",
  state: "",
  dateCreated: new Date(),
};

export const RegisterProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormData] = useState<UserDTO>(defaultValues);
  const [currentStep, setCurrentStep] = useState(0);

  const updateField = (field: keyof UserDTO, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => setFormData(defaultValues);

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => Math.max(0, prev - 1));

  return (
    <RegisterContext.Provider value={{ formData, updateField, resetForm, currentStep, nextStep, prevStep }}>
      {children}
    </RegisterContext.Provider>
  );
};
