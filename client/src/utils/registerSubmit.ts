import axios from "axios";
import { type UserDTO } from "@/types/UserDTO";

export const submitSignupForm = async (formData: UserDTO) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/alunos",
      formData
    );

    return response.data._id;
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    alert("Erro ao cadastrar o aluno.");
    console.log("Signup error:", error);
    return {
      success: false,
      message: error.response?.data?.message || "Something went wrong",
    };
  }
};
