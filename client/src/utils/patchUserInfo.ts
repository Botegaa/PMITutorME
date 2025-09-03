import axios from "axios";
import { type PatchUserParams } from "@/types/patchParams";

export const patchUserInfo = async (data: PatchUserParams) => {
  try {
    const response = await axios.put("http://localhost/5000/api/alunos", data);

    if (response.status === 200) {
      return { success: true };
    }

    return { success: false, message: "Unexpected response" };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || "Failed to update info",
    };
  }
};
