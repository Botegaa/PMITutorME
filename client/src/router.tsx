import { Routes, Route } from "react-router-dom";
import NotFound from "@/pages/NotFound/index.tsx";
import DesignSystem from "@/pages/DesignSystem/index.tsx";
import Home from "@/pages/Home/index.tsx";
import Profile from "@/pages/Profile/index.tsx";
import Settings from "@/pages/Settings/index.tsx";
import StudentLogin from "@/pages/StudentLogin/index.tsx";
import StudentSignup from "@/pages/StudentSignup/index.tsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/design-system" element={<DesignSystem />} />
      <Route path="/" element={<Home />} />
      <Route path="/settings/" element={<Settings />} />
      <Route path="/settings/:id" element={<Settings />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/student-login" element={<StudentLogin />} />
      <Route path="/student-signup" element={<StudentSignup />} />
    </Routes>
  );
}
